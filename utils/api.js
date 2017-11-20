import { AsyncStorage } from 'react-native'
import { CARD_STORAGE_KEY } from "./helpers"

export const saveDeckTitle = (title) => {
    return AsyncStorage.mergeItem(CARD_STORAGE_KEY, JSON.stringify({
        [title]: {
            title,
            questions: []
        }
    }))
}

export const getDecks = () => {
    return AsyncStorage.getItem(CARD_STORAGE_KEY)
        .then(results => JSON.parse(results))
}