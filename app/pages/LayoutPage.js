'use strict'

import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/Ionicons'
import HomePage from './HomePage'
import MyPage from './MyPage'

export default class LayoutPage extends Component {
  state = {
    selectedTab: 'home'
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <TabNavigator tabBarStyle={{opacity: 0.9,}} sceneStyle={{paddingBottom: 0}}>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="首页"
            renderIcon={() => <Image style={styles.tabBarIcon} source={require('../assets/images/ic_home.png')} />}
            renderSelectedIcon={() => <Image style={styles.tabBarSelectedIcon} source={require('../assets/images/ic_home.png')}/>}
            selectedTitleStyle={styles.selectedTitleStyle}
            onPress={() => this.setState({ selectedTab: 'home' })}>
            {<HomePage {...this.props} homeComponent={this}/>}
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'my'}
            title="我的"
            renderIcon={() => <Image style={styles.tabBarIcon} source={require('../assets/images/ic_my.png')} />}
            renderSelectedIcon={() => <Image style={styles.tabBarSelectedIcon} source={require('../assets/images/ic_my.png')}/>}
            selectedTitleStyle={styles.selectedTitleStyle}
            onPress={() => this.setState({ selectedTab: 'my' })}>
            {<MyPage {...this.props} homeComponent={this}/>}
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarIcon: {
    width: 26, 
    height: 26,
    resizeMode: 'contain',
  },
  tabBarSelectedIcon: {
    width: 26, 
    height: 26,
    resizeMode: 'contain',
    tintColor:'#6a6ae4'
  },
  selectedTitleStyle: {
    color: '#6a6ae4'
  }
})