export default class GotService {

    constructor() {
        this._apiBase = "https://www.anapioficeandfire.com/api";
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch url: ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    async getAllCharacters() {
        const res = await this.getResource("/characters?page=5&pageSize=10");
        return res.map(this._transformChar);
    }

    async getCharacter(id) {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformChar(character);
    }

    getAllHouses() {
        return this.getResource("/houses")
    }

    getHouse(id) {
        return this.getResource(`/houses/${id}`)
    }

    getAllBooks() {
        return this.getResource("/houses")
    }

    getBook(id) {
        return this.getResource(`//houses/${id}`)
    }

    _isData = (data) => {
        if (data) {
            return data
        } else {
            return "no data"
        }
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    _transformChar = (char) => {
        return {
            id: this._extractId(char),
            name: this._isData(char.name),
            gender: this._isData(char.gender),
            born: this._isData(char.born),
            died: this._isData(char.died),
            culture: this._isData(char.culture)
        }
    }

    _transformHouse = (house) => {
        return {
            id: this._extractId(house),
            name: this._isData(house.name),
            region: this._isData(house.region),
            words: this._isData(house.words),
            titles: this._isData(house.titles),
            overlord: this._isData(house.overlord),
            ancestralWeapon: this._isData(house.ancestralWeapon)
        }
    }

    _transformBook = (book) => {
        return {
            id: this._extractId(book),
            name: this._isData(book.name),
            numberOfPages: this._isData(book.numberOfPages),
            publiser: this._isData(book.publiser),
            released: this._isData(book.released)
        }
    }
}
