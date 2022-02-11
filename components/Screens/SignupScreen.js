import { ImageBackground,StyleSheet, Image,Text, View } from 'react-native';
import React from 'react';
import SignupForm from '../Login/SignupForm';

const instaLogo='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png'

export default function SignupScreen({navigation}){
  return (
      <View style={styles.container}>
            
            <View style={styles.imageContainer}>
                <Image source={{uri:instaLogo}} resizeMode='contain' style={styles.image}/>
            </View>
            
            <View style={styles.loginForm}>
                <SignupForm navigation={navigation}/>
                <Text style={{color:'white'}}>Signup</Text>
            </View>

        </View>
  );
}; 

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20,
        borderWidth:1,
        // borderColor:'white',
        // backgroundColor:'white'
    },
    imageContainer:{
        alignItems:'center',
        marginTop:50
        // textAlignVertical:'bottom',
        // justifyContent:'space-between'
    },
    loginForm:{
        flex:1
    },
    image:{
        height:100,
        width:100,
        // borderColor:'white',
        // borderWidth:1
        
    }
});
