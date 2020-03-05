import React, { Component } from "react";
import { Button, Text, View,TouchableOpacity,StyleSheet,Alert} from "react-native";
import {DocumentPicker,DocumentPickerUtil} from 'react-native-document-picker';



export default class ModalTester extends Component {

  constructor(props) {
    super(props);
    this.state = {
      singleFileOBJ:'',
    };
  }

    SingleFilePicker() {
    try {
       DocumentPicker.show({
        filetype: [DocumentPickerUtil.allFiles()],
      
      },(eror,res)=>{

        this.setState({ singleFileOBJ: res })

      });



    } 
    catch{
     console.warn("1")
      }
    
  }


  render() {
    return (
      <View style={styles.MainContainer}>
 
      <Text style={styles.text}>
        File Name: {this.state.singleFileOBJ.name ? this.state.singleFileOBJ.name : ''}
      </Text>

      <Text style={styles.text}>
        file Type: {this.state.singleFileOBJ.type ? this.state.singleFileOBJ.type : ''}
      </Text>

      <Text style={styles.text}>
        File Size: {this.state.singleFileOBJ.size ? this.state.singleFileOBJ.size : ''}
      </Text>

      <Text style={styles.text}>
        File URI: {this.state.singleFileOBJ.uri ? this.state.singleFileOBJ.uri : ''}
      </Text>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.button}
        onPress={()=>this.SingleFilePicker()}>
        <Text style={styles.buttonText}>
          Click Here To Pick File
        </Text>
      </TouchableOpacity>

    </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    justifyContent: 'center',
  },

  button: {
    width: '100%',
    backgroundColor: '#0091EA',
    borderRadius:9,
  },

  buttonText: {
    color: '#fff',
    fontSize: 21,
    padding: 10,
    textAlign: 'center'
  },

  text: {
    color: '#000',
    fontSize: 16,
    padding: 10,
    textAlign: 'left'
  },
});
