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
  TextInput,
} = React;

var MakeShuggestion = React.createClass({
  
  render() {
    return (
      <View>
        <View style={styles.wrapper}>
          <View style={styles.imageContainer}>
            <Image source={{uri: 'http://shuggest.com/images/logo.jpg'}} style={styles.image} />
          </View>
          <View>
            <Text>Make a shuggestion to a friend</Text>
          </View>
        </View>
        <View>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            value="BLAH"
          />
        </View>
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

module.exports = MakeShuggestion;