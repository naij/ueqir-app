/**
 * 全局样式
 * @flow
 */
import {
  Dimensions,
} from 'react-native'

const {height, width} = Dimensions.get('window')

module.exports = {
  line: {
    flex: 1,
    height: 0.4,
    opacity:0.5,
    backgroundColor: 'darkgray',
  },
  highlightBlock: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderTopColor: '#dddddd',
    borderTopWidth: 0.5,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 0.5,
  },
  listViewContainer: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 50,
    backgroundColor: '#f3f3f4',
  },
  webViewContainer: {
    flex: 1,
    backgroundColor: '#f3f3f4',
  },
  backgroundColor: '#f3f3f4',
  window_height: height,
  window_width: width,
  navBarHeightios: 44,
  navBarHeightandroid: 50,

}