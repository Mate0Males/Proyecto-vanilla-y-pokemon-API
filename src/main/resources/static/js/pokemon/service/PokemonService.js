import { PokemonModel } from '../model/PokemonModel.js';

export class PokemonService {
    constructor() {
        this.endpoints = {
            pokemon: 'https://pokeapi.co/api/v2/pokemon',
            berry: 'https://pokeapi.co/api/v2/berry',
            item: 'https://pokeapi.co/api/v2/item'
        };
    }

    async fetchBatch(endpointKey, offset = 0, limit = 30) {
        try {
            const url = `${this.endpoints[endpointKey]}?offset=${offset}&limit=${limit}`;
            const response = await fetch(url);
            const data = await response.json();

            if (!data.results || data.results.length === 0) {
                return { count: data.count || 0, items: [] };
            }

            const detailedBatch = await Promise.all(
                data.results.map(async (item) => {
                    const res = await fetch(item.url);
                    const itemData = await res.json();
                    return new PokemonModel(itemData, endpointKey);
                })
            );

            return {
                count: data.count,
                items: detailedBatch
            };
        } catch (error) {
            console.error('Error fetching API:', error);
            return { count: 0, items: [] };
        }
    }
}