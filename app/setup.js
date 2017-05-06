'use strict'

import React, {Component} from 'react'
import {
  Navigator,
} from 'react-native'
import LayoutPage from './pages/LayoutPage'


function setup() {
  class Root extends Component {
    constructor(props) {
      super(props)
    }

    _renderScene(route, navigator) {
      let Component = route.component
      return (
        <Component {...route.params} navigator={navigator}/>
      )
    }
    
    render() {
      return (
        <Navigator
          initialRoute={{
            name: 'LayoutPage',
            component: LayoutPage
          }}
          renderScene={(e, i)=>this._renderScene(e, i)}
        />
      )
    }
  }

  return Root
}

module.exports = setup