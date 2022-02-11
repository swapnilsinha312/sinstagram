import { ImageBackground,StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

function Creator({navigation}){
    const image=require('../../assets/creatorBackground.jpg');
  return (
    <ImageBackground style={styles.bgImg} source={image}>
        <View style={styles.container}>
            <View style={styles.inContainer}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Icon name={'angle-left'} color={'white'} size={30}/>
            </TouchableOpacity>
                <Text style={styles.text}>
                    {'Sinha Inc.'}
                    <Icon name={'copyright'} color={'white'} size={20}/>
                    {/* {'&#169;'} */}
                    {'\nVersion 1.0.1'}
                </Text>
            </View>
        </View>
    </ImageBackground>
  )
}

export default Creator

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        // backgroundColor:'black'
    },
    bgImg:{
        height:'100%',
        width:'100%',
        resizeMode:'cover'
    },
    inContainer:{
        backgroundColor:'black',
        borderWidth:1,
        borderColor:'white',
        width:'50%',
        marginLeft:'25%',
        padding:10,
    },
    text:{
        fontSize:24,
        color:'white'
    },
})