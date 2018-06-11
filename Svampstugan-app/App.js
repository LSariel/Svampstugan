import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <View style= {styles.container}>
      <MyAppHeaderText> Välkommen till Svampstugan! </MyAppHeaderText>
      <MyAppText> Här kan du lära dig lite om skogens olika svampar.</MyAppText>
      <MyAppText> Svampar </MyAppText>
      </View>
    );
  }
}

class MyAppText extends React.Component{
  render() {
    return(
    <Text style={{fontSize: 17}, {color: '#111'}}>{this.props.children}</Text>
  );
  }
}

class MyAppHeaderText extends React.Component {
  render() {
    return(
    <MyAppText>
      <Text style={{fontSize: 25}, {color: '#eee'}}>{this.props.children}</Text>
    </MyAppText>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6a6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  baseText: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 15,
    textAlignVertical: 'center',
  },

  titleText:{
    fontSize: 25,
    color: '#eee',
    fontWeight: 'bold',
  },
});
