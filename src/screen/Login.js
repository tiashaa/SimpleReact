import React from "react";
import {ImageBackground,Text,SafeAreaView, StyleSheet} from 'react-native';
import {Input, Button, Card} from 'react-native-elements';
import { Fontisto, Feather, FontAwesome  } from '@expo/vector-icons';


const Login=(props)=>{
    return(
        <Card>
        <Card.Title style={styles.textStyle}>Welcome to<Text style={styles.textStyle1}>Log In Page</Text></Card.Title>
        <Card.Divider/>

        <Input leftIcon={<Fontisto name="email" size={24} color="gray" />}
        placeholder='Email'/>

        <Input leftIcon={<Feather name="key" size={24} color="gray" />}
        placeholder='Password' />

        <Button
        icon={<FontAwesome name="sign-in" size={24} color="white" />}
        title=" Log In"
        type="solid"
        onPress={()=>props.navigation.navigate("Home")}
        />

        <Button
        title="  Haven't Signed Up !!"
        type="clear"
        />
        </Card>
    )
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize: 20,
        color: "skyblue",
    },
    textStyle1:{
        fontSize: 30,
        color: "steelblue",
        fontStyle: "italic",
    },
    viewStyle:{
        flex: 1,
        justifyContent:'center',
    },
        imageStyle: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
})

export default Login