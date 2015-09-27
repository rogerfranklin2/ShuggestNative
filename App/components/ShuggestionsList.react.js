'use strict';
var React = require('react-native');

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


var Shuggestions = React.createClass({
  getInitialState(){
    return {loading: true}
  },
  
  componentWillMount(){
    this.fetchSuggestions();
  },

render: function(){
  
  if(this.state.loading) { return <Text>LOADING</Text> }
  
  
  var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  

  return (
          <ListView
            dataSource={ ds.cloneWithRows(this.state.suggestions) }
            renderRow={ this.renderShuggestionRow }
            style={styles.commentListView}
            automaticallyAdjustContentInsets={false}/>
         )
},
  
renderShuggestionRow: function(suggestion){
  return (
    <View style={styles.container}>
        <Image
          source={{ uri: "http://www.dvdsreleasedates.com/covers/gone-girl-dvd-cover-21.jpg"}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{suggestion.suggestion}</Text>
          <Text style={styles.year}>{suggestion.fromfbname }</Text>
        </View>
   </View>
  )
},
    
fetchSuggestions() {
  var baseURL = 'http://shuggest.com/suggestions/894255183952442'
  fetch(baseURL)
  .then((response) => response.json())
  .then((responseData) => {
    this.setState({suggestions: responseData});
    this.setState({loading: false});
  })
  .catch(error => {
    console.log(error);
  })
  .done();
}

})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

module.exports = Shuggestions;