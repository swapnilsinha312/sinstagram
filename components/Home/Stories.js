import { StyleSheet,Image,Text, View, ScrollView } from 'react-native';
import React, { useState,useEffect } from 'react';
// import {USERS} from './FakeUsersData';

const Stories = ({users}) => {
  return (
    <View style={styles.container}>
      <Text style={{color:'white'}}>Our sinners</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {users.map((user,index)=>(
            <Story key={index} user={user}/>
        ))}
      </ScrollView>
      <Text style={{color:'white',paddingTop:20}}>For father we have sinned</Text>
    </View>
  );
};

function Story({user}){

    const [userName,setUserName] = useState('')

    useEffect(()=>{
        if(user){
            setUserName(nameShorten(user.username))
        };},[user]);

    
    function nameShorten(name){
        if(name.length>11)
        {name=name.substr(0,7)+"...";}
        else
        {
            let rem=10-name.length;
            name=name.padStart(name.length+rem/2,' ');
            name=name.padEnd(10,' ');
        }
        return name.toLowerCase();
    }

    return (
        <View style={styles.singleStory}>
            <Image source={{uri:user?.profilePic}} style={styles.image}/>
            <Text style={styles.names}>{userName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginBottom:10,
        color:'white',
        borderColor:'#d9bac1',
        marginHorizontal:10,
        marginVertical:10,
        borderBottomWidth:1
    },
    image:{
        height:80,
        width: 80,
        borderRadius:40,
        marginLeft:6,
        marginRight:6,
        borderColor:'#ff6836',
        // borderRightColor:'#f51444',
        // borderBottomColor:'#ff8c00',
        // borderTopColor:'#fc6203',
        // borderLeftColor:'#e04c4c',
        borderWidth:3
    },
    names:{
        color:'white'
    },
    singleStory:{
        alignItems:'center',
        // flexDirection:'row'
    }
});

export default Stories;

