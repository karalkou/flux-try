export default class ArticleStore {
    constructor(initialState = []) {
        this.__items = {};
        initialState.forEach(this.__add);
    }

    getAll() {
        return Object.keys(this.__items).map(this.getById);
    }

    getById = id => this.__items[id];

    __delete(id) {
        delete this.__items[id];
    }

    __add = item => {
        this.__items[item.id] = item;
    }
}