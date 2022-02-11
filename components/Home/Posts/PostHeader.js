import { Image,StyleSheet, Text, View } from 'react-native';
import React from 'react';

function PostHeader({userName,proPic}){
  return (
    <View style={styles.container}>
      <Image source={{uri:proPic}} style={styles.image} />
      <Text style={styles.text}>{userName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        margin:10,
        alignItems:'center',
        // marginVertical:10,
        // marginHorizontal:10,
        // textAlignVertical:'center'
    },
    text:{
        color:'white',
        fontSize:20,
        marginLeft:10
    },
    image:{
        height:30,
        width:30,
        borderRadius:50,
        marginLeft:5,
        borderWidth:2,
        borderColor:'#f78e0c'
    },
});

export default PostHeader;

