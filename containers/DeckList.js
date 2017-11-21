import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, FlatList } from 'react-native'
import DeckListCard from "../components/DeckListCard"
import {getDecksFromAsyncStorage} from "../actions/index"

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
                                              deckTitle: item.title
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