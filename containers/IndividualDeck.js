import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {black, grey, white, yellow} from "../utils/colors"
import {getDecksFromAsyncStorage} from "../actions/index"

class IndividualDeck extends Component {

    static navigationOptions = ({navigation}) => {
        const {deckTitle} = navigation.state.params
        return {
            title: deckTitle
        }
    }

    componentDidMount(){
        this.props.dispatch(getDecksFromAsyncStorage())
    }

    handleAddCardPress = () => {
        this.props.navigation.navigate('NewCard', {
            deckTitle: this.props.navigation.state.params.deckTitle
        })
    }

    handleStartQuiz = () => {
        this.props.navigation.navigate('Quiz', {
            deckTitle: this.props.navigation.state.params.deckTitle
        })
    }

    render(){
        const { deckTitle } = this.props.navigation.state.params
        const { decks } = this.props
        const deck = decks[deckTitle]
        return(
            <View style={styles.container}>
                <Text style={styles.textTitle}>{deck.title}</Text>
                <Text>{deck.questions.length} questions</Text>
                <TouchableOpacity style={styles.iosBtnBasic} onPress={this.handleAddCardPress}>
                    <Text style={styles.iosBtnBasicText}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iosBtnPrimary} onPress={this.handleStartQuiz}>
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

const mapStateToProps = (decks) => ({
    decks
})

export default connect(mapStateToProps)(IndividualDeck)