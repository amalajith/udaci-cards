import {GET_ALL_DECKS, SAVE_CARD, SAVE_NEW_DECK_TITLE} from "../actions/index"

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
        case SAVE_CARD:
            const newState = {
                ...state,
                [action.title]: {
                    ...state[action.title],
                    questions: [
                        ...state[action.title].questions,
                        {
                            question: action.question,
                            answer: action.answer
                        }
                    ]
                }
            }
            console.log(newState)
            return newState
        default:
            return state
    }
}

export default decks