import React, { Component } from 'react';
import { StyleSheet,Text, View,FlatList,} from 'react-native';


class FlatListDemo extends Component{

 render(){

     return(
        <FlatList
        data={[{key: 'a'}, {key: 'b'}]}
        renderItem={({item}) => <Text>{item.key}</Text>}
        />

     );
 }

}

export {FlatListDemo}