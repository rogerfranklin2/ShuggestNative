/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Login = require('./components/Login.react.js');
var Shuggestions = require('./components/Shuggestions.react');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Navigator,
} = React;

var Shuggest = React.createClass({
    
  getInitialState: function() {
    return {bootstrapped: false}
  },
      
  renderScene(route, nav) {
    switch (route.id) {
      case 'authenticate':
        return <Login navigator={nav} />;
      case 'user-info':
        return <Shuggestions navigator={nav} />;
      default:
        return <View />;
    }
  },
      
  render: function() {
    return (
      <Navigator
        initialRoute={{ id: 'authenticate', }}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }

          return Navigator.SceneConfigs.FloatFromRight;
        }} />
    );
  }
});



AppRegistry.registerComponent('Shuggest', () => Shuggest);