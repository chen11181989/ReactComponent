import React, { Component } from 'react';
import { StyleSheet,Text, View,TextInput,Modal,TouchableHighlight,} from 'react-native';

class ModalDemo extends Component {

   constructor(props){
        super(props);
        this.state={modalVisible:false
        };
   }
  
  // 显示/隐藏 modal  
  _setModalVisible(visible) {  
  //  let isShow = this.state.show;  
    this.setState({  
      modalVisible:visible,  
    });  
  }  

   // 加载完成  
  componentDidMount(){  
    //  
  }  
  
  // view卸载  
  componentWillUnmount(){  
    //  
  }  

 render(){

    return(
        <View style={styles.container}>

            <TouchableHighlight underlayColor='#ccc'
          activeOpacity={0.8}  onPress={()=>{
                      this._setModalVisible(!this.state.modalVisible)
                  }}>
                     <Text>show Modal!!</Text>
                 </TouchableHighlight>       
             <Modal animationType={"slide"}
            transparent={true}  //控制是否带有透明效果  
            visible={this.state.modalVisible}   //控制是否显示
             onRequestClose={() => {alert("Modal has been closed.")}}
           >
              <View style={styles.modalStyle}>
                 <View style={styles.subView}>  
                    <Text style={styles.titleText}>  
                        提示  
                    </Text>  
                    <Text style={styles.contentText}>  
                        Modal显示的View 多行了超出一行了会怎么显示，就像这样显示了很多内容该怎么显示，看看效果  
                    </Text>  
               <View style={styles.horizontalLine} />  
               <View style={styles.buttonView}>  
                 <TouchableHighlight underlayColor='transparent'  
                   style={styles.buttonStyle}  
                   onPress={()=>{this._setModalVisible(!this.state.modalVisible)}}>  
                   <Text style={styles.buttonText}>  
                     取消  
                   </Text>  
                 </TouchableHighlight>  
                 <View style={styles.verticalLine} />  
                 <TouchableHighlight underlayColor='transparent'  
                   style={styles.buttonStyle}  
                   onPress={()=>{this._setModalVisible(!this.state.modalVisible)}}>  
                   <Text style={styles.buttonText}>  
                     确定  
                   </Text>  
                 </TouchableHighlight>  
               </View>  
             </View>                       
              </View>         
           </Modal> 
         
        </View>
    );

 }
}


const styles = StyleSheet.create({
    container: {   //根View样式
        flex: 1,  
     marginTop:22,
      backgroundColor: '#ECECF0',  
    },
     modalStyle: {  
    // backgroundColor:'#ccc',  
    alignItems: 'center',  
    justifyContent:'center',  
    flex:1,  
  },  
   // modal上子View的样式  
  subView:{  
    marginLeft:60,  
    marginRight:60,  
    backgroundColor:'#fff',  
    alignSelf: 'stretch',  
    justifyContent:'center',  
    borderRadius: 10,  
    borderWidth: 0.5,  
    borderColor:'#ccc',  
  },  
  // 标题  
  titleText:{  
    marginTop:10,  
    marginBottom:5,  
    fontSize:16,  
    fontWeight:'bold',  
    textAlign:'center',  
  },  
  // 内容  
  contentText:{  
    margin:8,  
    fontSize:14,  
    textAlign:'center',  
  },  
  // 水平的分割线  
  horizontalLine:{  
    marginTop:5,  
    height:0.5,  
    backgroundColor:'#ccc',  
  },  
  // 按钮  
  buttonView:{  
    flexDirection: 'row',  
    alignItems: 'center',  
  },  
  buttonStyle:{  
    flex:1,  
    height:44,  
    alignItems: 'center',  
    justifyContent:'center',  
  },  
  // 竖直的分割线  
  verticalLine:{  
    width:0.5,  
    height:44,  
    backgroundColor:'#ccc',  
  },  
  buttonText:{  
    fontSize:16,  
    color:'#3393F2',  
    textAlign:'center',  
  },  
});


export {ModalDemo}