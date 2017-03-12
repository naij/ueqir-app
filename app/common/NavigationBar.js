/**
 * NavigationBar
 * @flow
 */
'use strict'

import React, {Component, PropTypes} from 'react'

import {
  StyleSheet,
  Navigator,
  Platform,
  TouchableOpacity,
  Image,
  StatusBar,
  Text,
  View
} from 'react-native'
import GlobalStyles from '../assets/styles/GlobalStyles'
const NAV_BAR_HEIGHT_IOS = GlobalStyles.navBarHeightios
const NAV_BAR_HEIGHT_ANDROID = GlobalStyles.navBarHeightandroid
const STATUS_BAR_HEIGHT = 20

const ButtonShape = {
  title: PropTypes.string.isRequired,
  style: PropTypes.any,
  handler: PropTypes.func,
}
const StatusBarShape = {
  barStyle: PropTypes.oneOf(['light-content', 'default',]),
  networkActivityIndicatorVisible: PropTypes.bool,
  showHideTransition: PropTypes.oneOf(['fade', 'slide']),
  hidden: PropTypes.bool,
  translucent: PropTypes.bool,
  backgroundColor: PropTypes.string,
  animated: PropTypes.bool
}

export default class NavigationBar extends Component {
  static propTypes = {
    style: View.propTypes.style,
    titleLayoutStyle: View.propTypes.style,
    title: PropTypes.string,
    titleView: PropTypes.element,
    hide: PropTypes.bool,
    statusBar: PropTypes.shape(StatusBarShape),
    rightButton: PropTypes.oneOfType([
      PropTypes.shape(ButtonShape),
      PropTypes.element,
    ]),
    leftButton: PropTypes.oneOfType([
      PropTypes.shape(ButtonShape),
      PropTypes.element,
    ]),
  }
  
  static defaultProps = {
    statusBar: {
      barStyle: 'default',
      hidden: false,
      translucent: false,
      animated: false,
    },
  }

  state = {
    title: '',
    hide: false
  }

  constructor(props) {
    super(props)
  }

  getButtonElement(data = {}, style) {
    return (
      <View style={styles.navBarButton}>
        {(!!data.props) ? data : (
          <NavBarButton
            title={data.title}
            style={[data.style, style,]}
            tintColor={data.tintColor}
            handler={data.handler}/>
        )}
      </View>
    )
  }

  render() {
    let statusBar = !this.props.statusBar.hidden ?
      <View style={styles.statusBar}>
        <StatusBar {...this.props.statusBar} barStyle="light-content" style={styles.statusBar}/>
      </View> : null

    let titleView = this.props.titleView ? this.props.titleView :
      <Text style={styles.title} ellipsizeMode="head" numberOfLines={1} >{this.props.title}</Text>

    let content = this.props.hide ? null :
      <View style={styles.navBar}>
        {this.getButtonElement(this.props.leftButton)}
        <View style={[styles.navBarTitleContainer, this.props.titleLayoutStyle]}>
          {titleView}
        </View>
        {this.getButtonElement(this.props.rightButton, {marginRight: 8,})}
      </View>
    return (
      <View style={[styles.container, this.props.style]}>
        {statusBar}
        {content}
      </View>
    )
  }
}
class NavBarButton extends Component {
  static propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    tintColor: PropTypes.string,
    title: PropTypes.string,
    handler: PropTypes.func,
  }

  static defaultProps = {
    style: {},
    title: '',
    tintColor: '#0076FF',
    onPress: () => ({}),
  }

  render() {
    const {style, tintColor, title, handler} = this.props

    return (
      <TouchableOpacity style={styles.navBarButton} onPress={handler}>
        <View style={style}>
          <Text style={[styles.title, {color: tintColor,},]}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6a6ae4',
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID,
  },
  navBarTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 40,
    top: 0,
    right: 40,
    bottom: 0,
  },
  title: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  navBarButton: {
    alignItems: 'center',
  },
  statusBar: {
    height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT: 0,
  },
})