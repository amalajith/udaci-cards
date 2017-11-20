import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import DeckList from "./containers/DeckList"
import UdaciStatusBar from "./components/UdaciStatusBar"
import {darkYellow, white, yellow} from "./utils/colors"
import NewDeck from "./containers/NewDeck"
import IndividualDeck from "./containers/IndividualDeck"

const Tabs = TabNavigator({
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            title: 'Decks',
            tabBarIcon: () => <MaterialCommunityIcons name='cards-outline' size={30} color='black' />
        }
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            title: 'New deck',
            tabBarIcon: () => <MaterialCommunityIcons name='credit-card-plus' size={30} color='black' />
        }
    }
})

const MainNavigation = StackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            title: 'Deck List',
            headerTintColor: white,
            headerStyle: {
                backgroundColor: yellow
            }
        }
    },
    DeckDetail: {
        screen: IndividualDeck
    }
})


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <UdaciStatusBar backgroundColor={darkYellow} barStyle='light-content'/>
          <MainNavigation/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
