import * as API from '../utils/api'

//Actions
export const GET_ALL_DECKS = 'GET_ALL_DECKS'
export const SAVE_NEW_DECK_TITLE = 'SAVE_NEW_DECK_TITLE'
export const SAVE_CARD = 'SAVE_CARD'

//Action creators
export const getAllDecks = (decks) => ({
    type: GET_ALL_DECKS,
    decks
})

export const saveNewDeckTitle = (title) => ({
    type: SAVE_NEW_DECK_TITLE,
    title
})

export const saveCard = ({title,question,answer}) => ({
    type: SAVE_CARD,
    title,
    question,
    answer
})


export const saveDeckTitleToAsyncStorage = (title) => dispatch => {
   return API.saveDeckTitle(title)
        .then(() => {
            dispatch(saveNewDeckTitle(title))
        })
}

export const getDecksFromAsyncStorage = () => dispatch => {
    API.getDecks()
        .then((decks) => {
            if(decks) {
                dispatch(getAllDecks(decks))
            }
        })
}

export const saveCardToAsyncStorage = ({title,question,answer}) => dispatch => {
    return API.saveCard({title,question,answer})
        .then(() => dispatch(saveCard({title,question,answer})))
}