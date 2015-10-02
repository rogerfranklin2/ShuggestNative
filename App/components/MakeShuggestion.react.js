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
            url: "",
            autoCompleteResponse: "",
            showPrediction: false,
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

  showPrediction(){
    this.setState({showPrediction: true})
  }

  hidePrediction(){
    this.setState({showPrediction: false})
  }
  
  renderPredictions(){
    if(this.state.autoCompleteResponse[0]){
      return (
        <View>
          <Text>{this.state.autoCompleteResponse[0] ? this.state.autoCompleteResponse[0].original_title : null }</Text>
          <Text>{this.state.autoCompleteResponse[1] ? this.state.autoCompleteResponse[1].original_title : null }</Text>
          <Text>{this.state.autoCompleteResponse[2] ? this.state.autoCompleteResponse[2].original_title : null }</Text>
          <Text>{this.state.autoCompleteResponse[3] ? this.state.autoCompleteResponse[3].original_title : null }</Text>
        </View>
      )
    }
  }

  findPredictions(suggestion){
    this.setState({suggestion: suggestion})
    if (suggestion != ""){
      

      var query = suggestion.toLowerCase().replace(/ /g, '%20');    
      var queryURL = "http://api.themoviedb.org/3/search/movie?api_key=12e033ccbcfb53775ecd230412f199ec&query=" + query + "&search_type=ngram"

      fetch(queryURL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({autoCompleteResponse: responseData.results})
      })
      .catch(error => {
        alert(error);
      })
      .done();
    }
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
          onChangeText={(suggestion) => this.findPredictions(suggestion)}
          value={this.state.suggestion}
          onFocus={() => this.showPrediction()}
          onEndEditing={() => this.hidePrediction()}
        />
        
        {this.renderPredictions()}


        <Text>To who?</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(url) => this.setState({url: url})}
          value={this.state.url}
        />
        
        
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