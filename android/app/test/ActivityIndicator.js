/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 * @providesModule ActivityIndicatorExample
 */
'use strict';

import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

 class ActivityIndicatorDemo extends Component {
   
   constructor(props){
     super(props);
     this.state={
       loading :true,

     };
   }

componentDidMount() {
  //开启一个定时器
  this.timer =setTimeout(()=>{
    this.setState({loading:false});
  },2000)
}
componentWillUnMount(){
  this.timer && clearTimeout(this.timer);
}


  render() {
    return (
      <View>
          <ActivityIndicator
           animating={this.state.loading}
            style={[styles.centering]}
            size="large"
          />
          <ActivityIndicator
            style={[styles.centering]}
             size="large"
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default  ActivityIndicatorDemo;