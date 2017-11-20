import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity } from 'react-native'
import {grey, white} from "../utils/colors"
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
                           onChangeText={this.handleTextChange}
                           style={styles.textInput}
                />
                <TouchableOpacity onPress={this.handleSubmit}>
                    <Text>Submit</Text>
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
        alignSelf: 'stretch'
    }
})

const mapStateToProps = ({decks}) => ({
    decks
})

export default connect(mapStateToProps)(NewDeck)