'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ListView,
  TouchableHighlight
} from 'react-native'
import NavigationBar from '../common/NavigationBar'
import GlobalStyles from '../assets/styles/GlobalStyles'
import WebViewPage from './WebViewPage'

export default class HomePage extends Component {
  static defaultProps = {
    title: 'HomePage'
  }

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    }
  }

  onSelect() {
    this.props.navigator.push({
      component: WebViewPage,
      params: {
        title: 'Detail',
        parentComponent: this,
        url: 'https://segmentfault.com/q/1010000004080910/a-1020000004121373',
        navigator: this.props.navigator
      },
    })
  }

  renderRow(rowData) {
    return (
      <TouchableHighlight 
        onPress={() => {this.onSelect()}
      }>
        <View style={GlobalStyles.highlightBlock}>
          <Text style={styles.title}>
            移动页面开发基础知识(2) 300ms点击延时和点击穿透
          </Text>
          <Text style={styles.description}>
            300毫秒点击延时的由来 在触屏设备上，移动浏览器为了兼容pc站点的使用，会在用户做触摸手势的时候模拟出鼠标事件...
          </Text>
          <Text style={styles.date}>
            Date: 2017-03-11
          </Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          title='首页'
        />
        <View style={GlobalStyles.listViewContainer}>
          <ListView
            ref="listView"
            renderRow={(e)=>this.renderRow(e)}
            enableEmptySections={true}
            dataSource={this.state.dataSource}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
    color: '#999',
    lineHeight: 20,
  },
  date: {
    color: '#ccc',
    fontSize: 12,
  }
})