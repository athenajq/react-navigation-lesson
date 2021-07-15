import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Button , SafeAreaView} from 'react-native';
import Home from "./screens/Home";
import Details from "./screens/Details";
import Navigation from "./config/Navigation";

export default function App() {
  //using state
  const [clicked, setClicked] = useState(0);
  var timesClicked=0;
  return (
    //it only updates when we're using state 
    // <SafeAreaView>
    //   <Button title={`${timesClicked} clicked`} onPress={()=>{timesClicked+=1}}/>
    // </SafeAreaView>
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
