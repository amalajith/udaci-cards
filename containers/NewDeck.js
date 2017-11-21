import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity } from 'react-native'
import {grey, white, yellow} from "../utils/colors"
import {saveDeckTitleToAsyncStorage} from "../actions/index"

class NewDeck extends Component {
    state = {
        deckTitle: ''
    }

    handleTextChange = (deckTitle) => {
        this.setState({
            deckTitle
        })
    }

    handleSubmit = () => {
        const { deckTitle } = this.state
        if(deckTitle){
            this.props.dispatch(saveDeckTitleToAsyncStorage(deckTitle))
                .then(() => {
                    this.setState({
                        deckTitle: ''
                    }, () => {
                        this.props.navigation.navigate('DeckList')
                    })
                })
        }

    }

    render(){
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={{fontSize: 15, paddingBottom: 20}}>
                    What is the title of your new deck?
                </Text>
                <TextInput value={this.state.deckTitle}
                           placeholder='Deck title'
                           onChangeText={this.handleTextChange}
                           style={styles.textInput}
                />
                <TouchableOpacity style={styles.iosBtnPrimary} onPress={this.handleSubmit}>
                    <Text style={styles.iosBtnPrimaryText}>Submit</Text>
                </TouchableOpacity>


            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        borderColor: grey,
        borderWidth: 1,
        // width: 200,
        height: 40,
        alignSelf: 'stretch',
        marginTop: 5,
        marginBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
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
})

const mapStateToProps = ({decks}) => ({
    decks
})

export default connect(mapStateToProps)(NewDeck)