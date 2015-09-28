'use strict';
var React = require('react-native');

var Shuggestions = require('./Shuggestions.react')
var MakeShuggestion = require('./MakeShuggestion.react')

var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
  ListView,
  TabBarIOS,
} = React;


var base64Icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAFMN540AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAapJREFUeNpiYEADjEjs/UCsAOMoMGABBSACIIBwIgEgTkAW+A/E77EqBQggfOg/Mmc+klMSGCgFKCYABBBexIhD3AGI/dEF72Mz/j2avf/Rdc0n5CCQCetxSQZAA5wwAAgguqB+qHsbkH3KhMPd/9F8fhGIC4H4AxALYktzIA3noaGPHKYJSIk1gBTnFqDFA0ngPFq0U5bCkQFAAA0dtJ5UbyhAE8h8qMb1xEbTf6S4/U9MdO2HRo0AlhDHWhoZQBX044mqAGxFogHUtv/QhI8rjv8TWza9R1MsQLDMxVJkMOBLnkx4NBcisR+QkygacAQi0ZmC7IyxHxobZAG8GgECbFgjBWiE3aelJbBmwX2kSIZhBWpaFICUHe9Dc44AUu0Lq5scKA2y+dCc9h6tgYJe3SdAHfCe1MaLANS195EKSwcCZQd6pXqfmMyYgBRk/5GCjBh9/7H4aj8UkxV3/dC69T9S26cAGry4LIRV4DRJwQF4UimsuKZZG2w+lkrSgRbZBlsKR84mCniCnibtyPNI2aaBnsXhf2KbGOiAmUKLPwIxBxAHDpmaAwBmM3IT4a43gwAAAABJRU5ErkJggg=="

  
  
var Home = React.createClass({
  componentWillMount(){
    this.state = {
      selectedTab: 'suggestions'
    }
  },

  render() {
    return (
        <TabBarIOS>
          <TabBarIOS.Item
          title="Suggestions"
          systemIcon="featured"
          selected={this.state.selectedTab == 'suggestions'}
          onPress={() => this.setState({selectedTab : 'suggestions'})}
            >
            <Shuggestions />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Make suggestion"
            systemIcon="top-rated"
            selected={this.state.selectedTab == 'suggest'}
            onPress={() => this.setState({selectedTab : 'suggest'})}
          >
            <MakeShuggestion />
          </TabBarIOS.Item>
        </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({

  suggestionContainer: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: 25,
  }

});

module.exports = Home;