'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import NavigationBar from "../common/NavigationBar"

export default class HomePage extends Component {
  static defaultProps = {
    title: 'HomePage'
  }

  render() {
    return (
      <View>
        <NavigationBar
          title='首页'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})