import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {black, white, yellow, grey} from "../utils/colors"

class Quiz extends Component {
    state = {
        currentQuestionIndex: 0,
        correctCount: 0,
        inCorrectCount: 0,
        showAnswer: false,
    }

    handleToggleAnswer = () => {
        this.setState({
            showAnswer: !this.state.showAnswer
        })
    }

    handleCorrect = () => {
        this.setState((state) => (
            {
                correctCount : state.correctCount + 1,
                currentQuestionIndex: state.currentQuestionIndex + 1,
                showAnswer: false,
            }
        ))
    }

    handleIncorrect = () => {
        this.setState((state) => (
            {
                inCorrectCount : state.inCorrectCount + 1,
                currentQuestionIndex: state.currentQuestionIndex + 1,
                showAnswer: false,
            }
        ))
    }

    handleResetQuiz = () => {
        this.setState({
            currentQuestionIndex: 0,
            correctCount: 0,
            inCorrectCount: 0,
            showAnswer: false,
        })
    }

    handleExitQuiz = () => {
        this.props.navigation.goBack(null)
    }

    render(){
        const { deckTitle } = this.props.navigation.state.params
        const { decks } = this.props
        const deck = decks[deckTitle]
        const { questions } = deck
        const { currentQuestionIndex, showAnswer, correctCount, inCorrectCount } = this.state
        if(currentQuestionIndex > (questions.length - 1)){
            return(
                <View style={styles.container}>
                    <Text style={styles.textTitle}>Correct - {correctCount}</Text>
                    <Text style={styles.textTitle}>Incorrect - {inCorrectCount}</Text>
                    <TouchableOpacity style={styles.iosBtnBasic} onPress={this.handleResetQuiz}>
                        <Text style={styles.iosBtnBasicText}>Reset quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iosBtnBasic} onPress={this.handleExitQuiz}>
                        <Text style={styles.iosBtnBasicText}>Back to deck</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        return(
            <View style={styles.container}>
                <Text>{currentQuestionIndex + 1}/{questions.length}</Text>
                {!showAnswer ? (
                    <View>
                        <Text style={styles.textTitle}>
                            {questions[currentQuestionIndex].question}
                        </Text>
                        <TouchableOpacity style={styles.iosBtnBasic} onPress={this.handleToggleAnswer}>
                            <Text style={styles.iosBtnBasicText}>Answer</Text>
                        </TouchableOpacity>
                    </View>
                ):(
                    <View>
                        <Text style={styles.textTitle}>
                            {questions[currentQuestionIndex].answer}
                        </Text>
                        <TouchableOpacity style={styles.iosBtnBasic} onPress={this.handleToggleAnswer}>
                            <Text style={styles.iosBtnBasicText}>Back to question</Text>
                        </TouchableOpacity>
                    </View>
                )}

                <TouchableOpacity style={styles.iosBtnPositive} onPress={this.handleCorrect}>
                    <Text style={styles.iosBtnPrimaryText}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iosBtnNegative} onPress={this.handleIncorrect}>
                    <Text style={styles.iosBtnPrimaryText}>Incorrect</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const mapStateToProps = (decks) => ({
    decks
})

export default connect(mapStateToProps)(Quiz)

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
    iosBtnPositive: {
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
    iosBtnNegative: {
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