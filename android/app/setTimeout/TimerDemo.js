import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
class TimerDemo extends Component {
  constructor(props) {
      super(props);  
      this.state={
        content:'',
      }
  }
  componentDidMount() {
    this.timer = setTimeout(
      () => {
        this.setState({content:'我是定时器打印的内容...One'})
      },
      500
    );
    this.timer_two = setTimeout(
      () => {
        this.setState({msg:'我是定时器打印的内容...Two'})
      },
      1000
    );
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
    this.timer_two && clearTimeout(this.timer_two);
  }
  render() {
    return (
      <View style={{margin:20}}>
        <Text style={styles.welcome}>
           定时器实例
        </Text>
        <Text>{this.state.content}</Text>
        <Text>{this.state.msg}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default TimerDemo;
 