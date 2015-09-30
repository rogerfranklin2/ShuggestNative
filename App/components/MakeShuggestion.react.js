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

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  PickerIOS,
} = React;

class ShuggestForm extends React.Component {
  
  constructor() {
  	super()
		this.state = {
			suggestion: "",
  		friend: {
  				name: "friend",
  				id: null
			}	
		}	
	}
  
  _sendSuggestion(){
    
  //  {
  //  	"category":"movie", 
  //  	"suggestion":"[name of movie]",
  //  	"url":"[imdb url]",
  //  	"fbname":"[name of friend]",
  //  	"fbid":"[Facebook ID of friend]",
  // 	 	"fromfbname":"[your name]",
  // 		"fromfbid":"[your Facebook ID ]"
  //  }
    
  }

	_getImdbUrl(){
  	//get IMDB url from ask jakub
  }

	_getFBFriends(){
  	//get friends for fbgraph
    
    
    return [{name:"John", id: "1"},{name: "geoff",id:"2"},{name: "kevin",id: 3}, {name: "paul", id: 4}, {name: "keith", id: 5}]
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Make a shuggestion
        </Text>
  			<Text>Your suggestion</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(suggestion) => this.setState({suggestion: suggestion})}
          value={this.state.suggestion}
        />
        
        <Text>To who?</Text>
        <PickerIOS
          selectedValue="Blah"
          onValueChange={(carMake) => this.setState({friend: carMake})}>
          {Object.keys(this._getFBFriends()).map((friend) => (
            <PickerIOS.Item
              key={friend}
              value={friend}
              label={this._getFBFriends()[friend].name}
              />
            )
          )}
        </PickerIOS>
        
        
        

      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
});
module.exports = ShuggestForm;