import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Constants from 'expo-constants'; 
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';//Thư viện ngoài



export default function App() {

const [fisrtName , setFisrtName] = useState('')
const [lastName , setLastName] = useState('')
const [email , setEmail] = useState('')
const [pass , setPass] = useState('')
const [cfPass , setCFPass] = useState('')

function submit() {
  console.log(fisrtName ,lastName , email ,pass ,cfPass)
}
  return (
    <>
      <SafeAreaView style={styles.containerTop}>
        <Text style={{color: '#fff' ,fontSize :'18',marginTop: 20,}}>
          Register
        </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <StatusBar style='dark'/>
        <KeyboardAwareScrollView style={styles.vContent}>
            <Text style={styles.textt}>
              First Name
            </Text>
            <TextInput style={styles.input} value = {fisrtName} onChangeText ={(text) => setFisrtName(text)}/>
            
            <Text style={styles.textt}>
              Last Name
            </Text>
            <TextInput style={styles.input} value = {lastName} onChangeText = {(text) => setLastName(text)}/>

            <Text style={styles.textt}>
              Email Address
            </Text>
            <TextInput style={styles.input} value = {email} onChangeText = {(text) => setEmail(text)}/>

            <Text style={styles.textt}>
              Password
            </Text>
            <TextInput style={styles.input} value = {pass} onChangeText = {(text) => setPass(text)} secureTextEntry={true}/>

            <Text style={styles.textt}>
              Confirm Password
            </Text>
            <TextInput style={styles.input} value = {cfPass} onChangeText = {(text) => setCFPass(text)} secureTextEntry={true}/>

            <TouchableOpacity style={styles.button} onPress={submit}>
              <Text style={{fontSize:18, color: '#fff', fontWeight:'bold'}}>SUBMIT</Text>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
        
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
