import { ScrollView,StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
// import {POSTS} from './FakePostsData';
import Post from './Posts/Post';

function Posts({posts,user}){
  return (
    <ScrollView style={styles.container}>
        {/* <Text style={styles.text}>For Father. We have sinned.</Text> */}
        {/* <ScrollView> */}
        {posts.map((post,index)=>(
            <View key={index}>
                <Post post={post} user={user}/>
            </View>
        ))}
        {/* <Text style={{color:'white'}}>fagbiuf</Text> */}
        {/* </ScrollView> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'column'
    },
    text:{
        color:'white'
    }
});

export default Posts;

