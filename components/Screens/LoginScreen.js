import { ImageBackground,StyleSheet, Image,Text, View } from 'react-native';
import React from 'react';
import LoginForm from '../Login/LoginForm';

const instaLogo=
'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png'
// 'https://preview.redd.it/6phjbixr59g81.jpg?width=640&crop=smart&auto=webp&s=2c5643eb7263047de5f32e628f76f8d534b8358e'

export default function LoginScreen({navigation}){
  return (
      <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{uri:instaLogo}} resizeMode='contain' style={styles.image}/>
            </View>
            <View style={styles.loginForm}>
                <LoginForm navigation={navigation}/>
                <Text style={{color:'white'}}>riraybpoih</Text>
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
