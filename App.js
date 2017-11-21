import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import {StyleSheet, View} from 'react-native'
import {TabNavigator, StackNavigator} from 'react-navigation'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import DeckList from "./containers/DeckList"
import UdaciStatusBar from "./components/UdaciStatusBar"
import {darkYellow, white, yellow} from "./utils/colors"
import NewDeck from "./containers/NewDeck"
import IndividualDeck from "./containers/IndividualDeck"
import NewCard from "./containers/NewCard"
import Quiz from "./containers/Quiz"
import {setLocalNotification} from "./utils/helpers"

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

const Tabs = TabNavigator({
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            title: 'Decks',
            tabBarIcon: () => <MaterialCommunityIcons name='cards-outline' size={30} color='black'/>
        }
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            title: 'New deck',
            tabBarIcon: () => <MaterialCommunityIcons name='credit-card-plus' size={30} color='black'/>
        }
    }
})

const MainNavigation = StackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            title: 'UdaciCards',
            // headerTintColor: white,
            // headerStyle: {
            //     backgroundColor: yellow,
            //     paddingTop: -30,
            //     height: 30
            // }
        }
    },
    DeckDetail: {
        screen: IndividualDeck
    },
    NewCard: {
        screen: NewCard,
        navigationOptions: {
            title: 'New card'
        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            title: 'Quiz'
        }
    }
})


export default class App extends React.Component {
    componentDidMount(){
        setLocalNotification()
    }
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <UdaciStatusBar backgroundColor={darkYellow} barStyle='light-content'/>
                    <MainNavigation/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
