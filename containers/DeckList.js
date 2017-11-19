import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

class DeckList extends Component {
    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Deck list page</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckDetail')}>
                    <Text>Show deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default DeckList