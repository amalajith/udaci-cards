import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {grey, white} from "../utils/colors"

export default class DeckListCard extends Component {
    render(){
        const { item } = this.props
        return(
            <View style={{flex: 1}}>
                <TouchableOpacity style={styles.cardItem} onPress={this.props.onPressItem}>
                    <Text style={styles.cardItemTitle}>{item.title}</Text>
                    <Text>{item.questions.length} Questions</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardItem: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: white,
        borderColor: grey,
        padding: 30,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 18
    },
    cardItemTitle: {
        fontSize: 24,
        paddingBottom: 10
    }
})