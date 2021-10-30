import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from 'expo-constants'; 
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.containerTop}>
        <Text style={{color: '#fff' ,fontSize :'18',marginTop: 20,}}>
          Register
        </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <StatusBar style='dark'/>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{flex :1}}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.vContent}>
            <Text style={styles.textt}>
              First Name
            </Text>
            <TextInput style={styles.input}/>
            
            <Text style={styles.textt}>
              Last Name
            </Text>
            <TextInput style={styles.input}/>

            <Text style={styles.textt}>
              Email Address
            </Text>
            <TextInput style={styles.input}/>

            <Text style={styles.textt}>
              Password
            </Text>
            <TextInput style={styles.input}/>

            <Text style={styles.textt}>
              Confirm Password
            </Text>
            <TextInput style={styles.input}/>

            <TouchableOpacity style={styles.button}>
              <Text style={{fontSize:18, color: '#fff', fontWeight:'bold'}}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        
      </SafeAreaView>
      
    </>

    
    
  );
}

const styles = StyleSheet.create({
  containerTop: {
    flex: 0,
    height: '16%',
    backgroundColor: '#33BBFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight ,
  },
  vContent:{
    padding: 25,
    // backgroundColor:'pink',
  },
  textt: {
    fontSize: 18,
    marginBottom: 5,
    color: '#7B7D7D',
  },
  input: {
    height: 50,
    marginBottom: 20,
    borderWidth :1.8,
    borderColor:'#D0D3D4',
    borderRadius: 5,
  },
  button: {
    marginTop: 10,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: "#5499C7",
    height: 50,
    borderRadius : 15,
  },
});
