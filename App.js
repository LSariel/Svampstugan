import React from 'react';
import { StyleSheet, Text, AppRegistry, View, Image} from 'react-native';

class Counter extends React.Component {
  state = {count: 0};
  componentDidMount(){
    setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000);
  }
  render() {
    const {count} = this.state
    const {color, size} = this.props

    return (
      <Text style={{color, fontSize: size}}>
        {count}
      </Text>
    )
  }
}


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source = {require('./bild0.jpeg')} style = {{width: 193, height: 100}}/>
        <Text> Hur många svampar har du plockat? </Text>
        <Counter color = {'#fff'} size = {35} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#88e7f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
