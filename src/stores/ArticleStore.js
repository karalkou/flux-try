import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher';
import {SOME_EXTERNAL_EVENT} from "../constants";

export default class ArticleStore extends EventEmitter {
    constructor(initialState = []) {
        super();
        this.__items = {};
        initialState.forEach(this.__add);

        AppDispatcher.register(action => {
            const { type, payload } = action;

            switch (type) {
                case 'DELETE_ARTICLE': {
                    this.__delete(payload.id);
                    this.emitChange();
                    break;
                }
            }
        });
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
    };

    addChangeListener(callback) {
        this.on(
            SOME_EXTERNAL_EVENT,
            callback
        );
    }

    removeChangeListener(callback) {
        this.removeListener(
            SOME_EXTERNAL_EVENT,
            callback
        );
    }

    emitChange() {
        this.emit(SOME_EXTERNAL_EVENT)
    }
}