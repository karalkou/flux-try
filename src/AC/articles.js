import AppDispatcher from '../dispatcher';
import { DELETE_ARTICLE } from "../constants";

export const deleteArticleId = id => {
    const action = {
        type: DELETE_ARTICLE,
        payload: {
            id
        }
    };

    console.log('-- action: ', action);
    AppDispatcher.dispatch(action);
};