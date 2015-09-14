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

render: function(){
  
  var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


  return (
          <ListView
            dataSource={ ds.cloneWithRows([{ title: "Gone Girl", recommendedFrom: "Roger Franklin", poster: { uri: "http://www.dvdsreleasedates.com/covers/gone-girl-dvd-cover-21.jpg"}},{ title: "Gone Girl", recommendedFrom: "Roger Franklin", poster: { uri: "http://www.dvdsreleasedates.com/covers/gone-girl-dvd-cover-21.jpg"}}]) }
            renderRow={ this.renderShuggestionRow }
            style={styles.commentListView}
            automaticallyAdjustContentInsets={false}/>
         )
},
  
renderShuggestionRow: function(suggestion){
  console.log(suggestion);
  return (
    <View style={styles.container}>
        <Image
          source={{uri: suggestion.poster.uri}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{suggestion.title}</Text>
          <Text style={styles.year}>{suggestion.recommendedFrom}</Text>
        </View>
   </View>
  )
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