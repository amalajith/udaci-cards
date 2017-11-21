import React, { Component } from 'react'
import { connect } from 'react-redux'
import { KeyboardAvoidingView, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import { white, yellow, grey} from "../utils/colors"
import { saveCardToAsyncStorage} from "../actions/index"

class NewCard extends Component {

    state = {
        question: '',
        answer: ''
    }

    handleQuestionChange = (question) => {
        this.setState({
            question
        })
    }

    handleAnswerChange  = (answer) => {
        this.setState({
            answer
        })
    }

    handleSubmit = () => {
        const title  = this.props.navigation.state.params.cardItem.title
        const { question, answer } = this.state
        this.props.dispatch(saveCardToAsyncStorage({title,question,answer}))
            .then(() => {
                this.setState({
                    question: '',
                    answer: ''
                }, () => {
                    this.props.navigation.goBack(null)
                })
            })
    }


    render(){
        const { cardItem } = this.props.navigation.state.params

        return(
            <KeyboardAvoidingView behaviour='padding' style={styles.container}>
                <Text style={{fontSize: 15, paddingBottom: 20}}>
                    Create a new card in {cardItem.title}
                </Text>
                <TextInput value={this.state.question}
                           placeholder='Question'
                           onChangeText={this.handleQuestionChange}
                           style={styles.textInput}
                />
                <TextInput value={this.state.answer}
                           placeholder='Answer'
                           onChangeText={this.handleAnswerChange}
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

const mapStateToProps = (decks) => ({
    decks
})

export default connect(mapStateToProps)(NewCard)