import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import DeckList from "./containers/DeckList"
import IndividualDeck from "./containers/IndividualDeck"
import UdaciStatusBar from "./components/UdaciStatusBar"
import {orange, white, yellow} from "./utils/colors"
import { Constants } from 'expo'

const Stack = StackNavigator({
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            title: 'UdaciCards',
            // headerTintColor: white,
            headerStyle: {
                // backgroundColor: yellow,
            }
        }
    },
    DeckDetail: {
        screen: IndividualDeck,
        navigationOptions: {
            title: 'Deck detail',
        }
    }

})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <UdaciStatusBar backgroundColor={orange} barStyle='light-content'/>
          <Stack/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
