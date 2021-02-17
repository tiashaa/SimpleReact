import React from "react";
import { View, Button, Text, StyleSheet, ImageBackground } from "react-native";
const Home = (props) => {
  return (
    <View style={styles.center}>
    <ImageBackground source={require('./../../src/download.jpg')} style={styles.imageStyle}/>  
      <Text>This is the home screen</Text>
     
    </View>
  );
};
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  imageStyle: {
    flex:1,
    resizeMode: "cover",
    justifyContent: "center"
},
});
export default Home;