import {GET_ALL_DECKS, SAVE_NEW_DECK_TITLE} from "../actions/index"

function decks(state = {}, action){
    switch(action.type){
        case SAVE_NEW_DECK_TITLE:
            return {
                ...state,
                [action.title]: {
                    title: action.title,
                    questions: []
                }
            }
        case GET_ALL_DECKS:
            return action.decks
        default:
            return state
    }
}

export default decks