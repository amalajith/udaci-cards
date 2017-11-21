import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {black, grey, white, yellow} from "../utils/colors"

class IndividualDeck extends Component {

    static navigationOptions = ({navigation}) => {
        const {cardItem} = navigation.state.params
        return {
            title: cardItem.title
        }
    }

    handleAddCardPress = () => {
        this.props.navigation.navigate('NewCard', {
            cardItem: this.props.navigation.state.params.cardItem
        })
    }

    render(){
        const { cardItem } = this.props.navigation.state.params
        return(
            <View style={styles.container}>
                <Text style={styles.textTitle}>{cardItem.title}</Text>
                <Text>{cardItem.questions.length} questions</Text>
                <TouchableOpacity style={styles.iosBtnBasic} onPress={this.handleAddCardPress}>
                    <Text style={styles.iosBtnBasicText}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iosBtnPrimary}>
                    <Text style={styles.iosBtnPrimaryText}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10
    },
    textDesc: {
        fontSize: 15,
        color: grey
    },
    iosBtnPrimary: {
        backgroundColor: yellow,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5
    },
    iosBtnPrimaryText: {
        color: white
    },
    iosBtnBasic: {
        borderColor: yellow,
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5
    },
    iosBtnBasicText: {
        color: black
    },

})

export default IndividualDeck