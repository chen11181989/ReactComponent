/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

import ActivityIndicatorDemo from './android/app/test/ActivityIndicator';

import TimerDemo from  './android/app/setTimeout/TimerDemo'
import {ButtonExample} from "./android/app/button/ButtonExample"
import {DrawerLayoutAndroidDemo} from "./android/app/DrawerLayout/DrawerLayoutAndroidDemo"
import {FlatListDemo} from "./android/app/FlatList/FlatListDemo"
import {MyListItem} from "./android/app/FlatList/MyListItem"
import {KeyBoard} from "./android/app/KeyboardAvoidingView/KeyBoard"
import {ModalDemo} from "./android/app/modal/ModalDemo"
export default class myapp extends Component {
  render(){
    return (  
    // <TimerDemo/>
    //加载按钮
    // <ActivityIndicatorDemo />   
    //
   // <ButtonExample />
    //<DrawerLayoutAndroidDemo />
  //<FlatListDemo />
   //<MyListItem />
  // <ImageDemo/>
 //<KeyBoard />
 <ModalDemo />
    );
  }

}

AppRegistry.registerComponent('myapp', () => myapp);

