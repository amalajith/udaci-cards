import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, FlatList } from 'react-native'
import DeckListCard from "../components/DeckListCard"
import {getDecksFromAsyncStorage} from "../actions/index"

const data = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
}


class DeckList extends Component {
    componentDidMount(){
        this.props.dispatch(getDecksFromAsyncStorage())
    }
    render(){
        const { decks } = this.props
        const deckList = Object.keys(decks).map((key) => {
            return decks[key]
        })

        return(
            <View style={{flex: 1}}>
                <FlatList
                    data={deckList}
                    renderItem={({item}) => (
                        <DeckListCard item={item}
                                      onPressItem={() => this.props.navigation.navigate(
                                          'DeckDetail',
                                          {
                                              cardItem: item
                                          }
                                          )}/>
                    )}
                    keyExtractor={item => item.title}
                />

            </View>
        )
    }
}

const mapStateToProps = (decks) => ({
    decks
})

export default connect(mapStateToProps)(DeckList)