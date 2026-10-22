export class PokemonUI {
    constructor(gridContainerId, modalId) {
        this.gridContainer = document.getElementById(gridContainerId);
        this.modalElement = document.getElementById(modalId);
        this.modalBodyContent = document.getElementById('modal-body-content');
        this.closeModalBtn = document.getElementById('close-action-modal-btn');

        if (this.closeModalBtn && this.modalElement) {
            this.closeModalBtn.addEventListener('click', () => this.hideModal());
            window.addEventListener('click', (e) => {
                if (e.target === this.modalElement) this.hideModal();
            });
        }
    }

    renderCards(items, append = false) {
        if (!append) {
            this.gridContainer.innerHTML = '';
        }

        if (!items || items.length === 0) {
            if (!append) {
                this.gridContainer.innerHTML = '<div class="col-12 text-center text-muted py-4 fst-italic">No results found.</div>';
            }
            return;
        }

        items.forEach((item) => {
            const col = document.createElement('div');
            col.className = 'col-12 col-sm-6 col-md-4 mb-3';

            col.innerHTML = `
                <div class="artist-card h-100 p-3 rounded-4 shadow-sm d-flex flex-column align-items-center justify-content-center text-center" style="cursor: pointer;">
                    <img src="${item.image}" width="80" height="80" class="mb-2 object-fit-contain" onerror="this.src='https://via.placeholder.com/80'">
                    <h3 class="m-0 fs-5 fw-semibold text-secondary">${item.title}</h3>
                    <span class="badge bg-light text-dark mt-2 border">${item.subtitle}</span>
                </div>
            `;

            const card = col.querySelector('.artist-card');
            card.addEventListener('click', () => {
                this.showModal(item);
            });

            this.gridContainer.appendChild(col);
        });
    }

    showModal(item) {
        if (!this.modalElement) return;
        const data = item.raw;
        let content = '';

        if (item.endpoint === 'pokemon') {
            const pokeName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            const pokeImage = data.sprites?.other?.['official-artwork']?.front_default || item.image;
            const types = data.types ? data.types.map(t => `<span class="badge bg-secondary me-1">${t.type.name}</span>`).join('') : '';

            content = `
                <img src="${pokeImage}" class="mb-3 img-fluid object-fit-contain" style="max-height: 160px;">
                <h2 class="h4 fw-bold mb-1">${pokeName}</h2>
                <p class="text-muted small mb-2"><strong>ID:</strong> #${data.id}</p>
                <div class="mb-3">${types}</div>
                <div class="text-start bg-light p-3 rounded-3 small">
                    <p class="mb-1"><strong>Height:</strong> ${data.height / 10} m</p>
                    <p class="mb-0"><strong>Weight:</strong> ${data.weight / 10} kg</p>
                </div>
            `;
        } else if (item.endpoint === 'berry') {
            content = `
                <img src="${item.image}" class="mb-3 img-fluid object-fit-contain" style="max-height: 120px;">
                <h2 class="h4 fw-bold mb-3 text-uppercase">${data.name} BERRY</h2>
                <div class="text-start bg-light p-3 rounded-3 small">
                    <p class="mb-1"><strong>Growth Time:</strong> ${data.growth_time} hours</p>
                    <p class="mb-1"><strong>Max Harvest:</strong> ${data.max_harvest}</p>
                    <p class="mb-0"><strong>Smoothness:</strong> ${data.smoothness}</p>
                </div>
            `;
        } else if (item.endpoint === 'item') {
            content = `
                <img src="${item.image}" class="mb-3 img-fluid object-fit-contain" style="max-height: 120px;">
                <h2 class="h4 fw-bold mb-3 text-uppercase">${data.name.replace(/-/g, ' ')}</h2>
                <div class="text-start bg-light p-3 rounded-3 small">
                    <p class="mb-1"><strong>Cost:</strong> ${data.cost || 0} Pokédollars</p>
                    <p class="mb-0"><strong>Category:</strong> ${data.category ? data.category.name : 'N/A'}</p>
                </div>
            `;
        }

        this.modalBodyContent.innerHTML = content;
        this.modalElement.style.display = 'block';
    }

    hideModal() {
        if (this.modalElement) {
            this.modalElement.style.display = 'none';
        }
    }
}