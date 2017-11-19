import React, { Component } from 'react'
import { View,StatusBar } from 'react-native'
import { Constants } from 'expo'

export default class UdaciStatusBar extends Component {
    render(){
        const { backgroundColor } = this.props
        return(
            <View style={{ backgroundColor, height: Constants.statusBarHeight}}>
                <StatusBar translucent backgroundColor={backgroundColor} {...this.props}/>
            </View>
        )
    }
}