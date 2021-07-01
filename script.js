class GotService {

    async getResource(url) {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch url: ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters() {
        return this.getResource("https://www.anapioficeandfire.com/api/characters?page=10");
    }
}

const char = new GotService();
console.log(char.getAllCharacters);

