import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {

  const navigation = useNavigation();

  const handleLogin = () => {
    // Navigate to Home screen
    navigation.navigate("Home")
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}> Login Form</Text>
      <TextInput style={styles.input} placeholder='Email'/>
      <TextInput 
      style={styles.input} 
      placeholder='password'
      secureTextEntry
      />
      <TouchableOpacity onPress={handleLogin}
      style={styles.button}>
        <Text style={styles.buttonText}>
          Login
          </Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  input: {
    width: '60%',
    height: '70',
    backgroundColor: '#ccc',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 100,
    paddingHorizontal: 20,
    marginBottom: '5'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#234463',
    marginBottom: '15'
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#046332',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  }
});



export default App;
