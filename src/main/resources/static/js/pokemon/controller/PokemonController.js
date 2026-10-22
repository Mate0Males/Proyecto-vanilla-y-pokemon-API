import { PokemonService } from '../service/PokemonService.js';
import { PokemonUI } from '../ui/PokemonUI.js';

export class PokemonController {
    constructor() {
        this.service = new PokemonService();
        // Inyectamos el servicio al UI para que pueda resolver las evoluciones anidadas en el modal
        this.ui = new PokemonUI("artist-grid", "action-modal", this.service);

        this.currentEndpointKey = 'pokemon';
        this.currentData = [];
        this.offset = 0;
        this.limit = 30;
        this.isLoading = false;
        this.hasMoreData = true;
        this.debounceTimer = null;

        this.init();
    }

    async init() {
        await this.resetAndFetch(this.currentEndpointKey);
        this.initEventListeners();
    }

    async resetAndFetch(key) {
        this.currentEndpointKey = key;
        this.currentData = [];
        this.offset = 0;
        this.hasMoreData = true;
        await this.loadMoreData(key, false);
    }

    async loadMoreData(key, append = false) {
        if (this.isLoading) return;
        this.isLoading = true;

        const result = await this.service.fetchBatch(key, this.offset, this.limit);
        
        if (result.items.length === 0) {
            this.hasMoreData = false;
            this.isLoading = false;
            return;
        }

        if (append) {
            this.currentData = this.currentData.concat(result.items);
        } else {
            this.currentData = result.items;
        }

        this.ui.renderCards(this.currentData, false);
        this.offset += this.limit;

        if (this.offset >= result.count) {
            this.hasMoreData = false;
        }

        this.isLoading = false;
    }

    initEventListeners() {
        // Scroll infinito
        window.addEventListener('scroll', () => {
            const searchInput = document.getElementById('search-input');
            const searchVal = searchInput ? searchInput.value : '';

            if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 400) {
                if (!this.isLoading && this.hasMoreData && !searchVal) {
                    this.loadMoreData(this.currentEndpointKey, true);
                }
            }
        });

        // Cambio de pestañas
        const categoryButtons = document.querySelectorAll(".category-btn, .nav-link");
        categoryButtons.forEach(button => {
            button.addEventListener("click", async (e) => {
                const category = e.currentTarget.dataset.category || (e.currentTarget.id.includes('pokemon') ? 'pokemon' : e.currentTarget.id.includes('berri') ? 'berry' : 'item');
                
                document.querySelectorAll('.nav-link, .category-btn').forEach(btn => btn.classList.remove('active'));
                e.currentTarget.classList.add('active');

                const searchInput = document.getElementById('search-input');
                if (searchInput) searchInput.value = '';

                await this.resetAndFetch(category);
            });
        });

        // Buscador con Debounce estricto de 4 segundos
        const searchInput = document.getElementById('search-input');
        const debounceStatus = document.getElementById('debounce-status');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase().trim();

                clearTimeout(this.debounceTimer);
                if (debounceStatus) debounceStatus.innerText = 'Waiting 4 seconds (Debounce) to query...';

                this.debounceTimer = setTimeout(() => {
                    if (debounceStatus) debounceStatus.innerText = `Search applied for: "${searchTerm}"`;

                    if (!searchTerm) {
                        this.ui.renderCards(this.currentData, false);
                        return;
                    }

                    const filtered = this.currentData.filter(item => {
                        return item.name.toLowerCase().includes(searchTerm) || (item.id && item.id.toString() === searchTerm);
                    });

                    this.ui.renderCards(filtered, false);
                }, 4000); // 4 segundos exactos
            });
        }
    }
}