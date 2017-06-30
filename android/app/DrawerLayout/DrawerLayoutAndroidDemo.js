

import React, { Component } from 'react';
import { StyleSheet,Text, View,DrawerLayoutAndroid} from 'react-native';


class DrawerLayoutAndroidDemo extends Component{

 render(){
     var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
    </View>
  );
     return(
        <DrawerLayoutAndroid
         drawerWidth={300}
         drawerPosition={DrawerLayoutAndroid.positions.Left}
         renderNavigationView={() => navigationView}
        >
           <View>
               <Text>
                hello,this is DrawerLayoutAndroid
               </Text> 
           
           </View>    
        </DrawerLayoutAndroid>
     );
 }

}


export {DrawerLayoutAndroidDemo};
