export class PokemonModel {
    constructor(data, endpoint = "pokemon") {
        this.id = data.id || 'N/A';
        this.name = data.name;
        this.raw = data;
        this.endpoint = endpoint;

        if (endpoint === 'pokemon') {
            this.title = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            this.subtitle = `ID: #${data.id}`;
            this.image = data.sprites?.front_default || 'https://via.placeholder.com/96';
        } else if (endpoint === 'berry') {
            this.title = data.name.charAt(0).toUpperCase() + data.name.slice(1) + ' Berry';
            this.subtitle = `Firmness: ${data.firmness?.name || 'N/A'}`;
            const berryItemName = data.item ? data.item.name : `${data.name}-berry`;
            this.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${berryItemName}.png`;
        } else if (endpoint === 'item') {
            this.title = data.name.replace(/-/g, ' ').toUpperCase();
            this.subtitle = `Cost: ${data.cost || 0} Pokédollars`;
            this.image = data.sprites?.default || 'https://via.placeholder.com/96';
        }
    }
}