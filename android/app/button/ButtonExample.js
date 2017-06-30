

import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View,Button ,Alert} from 'react-native';


class ButtonExample extends Component{

 render(){
 
const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};
     return(
         <Button
            onPress={onButtonPress}
            title="Learn More"
            color="#841584"
           // disabled={true}
            accessibilityLabel="Learn more about this purple button"
            />
     );
 }

}


export {ButtonExample};
