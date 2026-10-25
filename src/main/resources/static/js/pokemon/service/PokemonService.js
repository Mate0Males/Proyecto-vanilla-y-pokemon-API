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

    async getPokemonEvolutions(pokemonIdOrName) {
        try {
            const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIdOrName}`);
            const pokemonData = await pokemonRes.json();

            // Petición anidada 1: Especie
            const speciesRes = await fetch(pokemonData.species.url);
            const speciesData = await speciesRes.json();

            // Petición anidada 2: Cadena de evolución
            const evolutionRes = await fetch(speciesData.evolution_chain.url);
            const evolutionData = await evolutionRes.json();

            const evolutions = [];
            let currentChain = evolutionData.chain;

            while (currentChain) {
                evolutions.push(currentChain.species.name);
                currentChain = currentChain.evolves_to.length > 0 ? currentChain.evolves_to[0] : null;
            }

            return evolutions;
        } catch (error) {
            console.error("Error obteniendo evoluciones:", error);
            return [];
        }
    }
}