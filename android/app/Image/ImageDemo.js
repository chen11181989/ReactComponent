import React, { Component } from 'react';
import { StyleSheet,Text, View,Image} from 'react-native';


class ImageDemo extends Component {
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            uri:'http://qq.111cn.net/uploads/allimg/140712/22020H9C-22.jpg'
            //source={{uri: 'http://qq.111cn.net/uploads/allimg/140712/22020H9C-22.jpg'}}
        };
    }
 render() {
        return (
            //根View
            <View style={styles.container}>
            <Text>dsf</Text>
               <Image style={styles.imageStyle}  source={require('./it.jpg')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {   //根View样式
        flex: 1,    
       // backgroundColor: 'red',
      //  width:1000,
       // height:200,
    },
    imageStyle: {
      // 设置背景颜色
            backgroundColor:'green',
            // 设置宽度
           width:300,
            // 设置高度
            height:150,
        
    }
});

export {ImageDemo};