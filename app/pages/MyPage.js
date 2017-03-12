'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import NavigationBar from "../common/NavigationBar"

export default class MyPage extends Component {
  static defaultProps = {
    title: 'MyPage'
  }

  render() {
    return (
      <View>
        <NavigationBar
          title='我的'
        />
      </View>
    )
  }
}