import React, { Component } from 'react';
import { StyleSheet,Text, View,KeyboardAvoidingView,TextInput} from 'react-native';


class KeyBoard extends Component {

 render(){
   return(
     <View style={styles.container}>
      <KeyboardAvoidingView behavior='padding'>     
        <TextInput style={styles.textInput} placeholder="这是一个简单的输入框"></TextInput>
        <TextInput style={styles.textInput} placeholder="这是一个简单的输入框"></TextInput>
        <TextInput style={styles.textInput} placeholder="这是一个简单的输入框"></TextInput>
        <TextInput style={styles.textInput} placeholder="这是一个简单的输入框"></TextInput>
            
        </KeyboardAvoidingView>
      
     </View>
   );

 }
}

const styles = StyleSheet.create({
    container: {   //根View样式
        flex: 1,  
        paddingHorizontal: 20,
        paddingTop: 20,  
        justifyContent: 'center',
    },
     textInput: {
	borderRadius: 5,
	borderWidth: 1,
	height: 140,
	paddingHorizontal: 10,
  },
});


export {KeyBoard}