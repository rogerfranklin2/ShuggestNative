'use strict';
var React = require('react-native');
var Shuggestions = require('./ShuggestionsList.react');

var UserStore = require('../stores/UserStore');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
  ListView,
} = React;

var Login = React.createClass({
  getInitialState: function() {
    return UserStore.getState();
  },
    
  componentWillMount(){
  },
    
  componentDidMount() {
    UserStore.listen(this.onChange);
  },

  componentWillUnmount() {
    UserStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
  },
  
  
  render() {
    return (
      <View>
        <View style={styles.wrapper}>
          <View style={styles.imageContainer}>
            <Image source={{uri: 'http://shuggest.com/images/logo.jpg'}} style={styles.image} />
          </View>
          <Text>{ this.state }</Text>
          
          <View style={ styles.suggestionContainer }>
            <Text>Shuggestions for you</Text>
          </View>
        </View>
          <Shuggestions/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 25,
  },
  image: {
    height: 42,
    width: 200,
  },
  suggestionContainer: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: 25,
  }

});

module.exports = Login;