import { StyleSheet, Image, View } from 'react-native';
import React from 'react';

function PostImage({post}){
    // console.log("Post image start");
    // console.log(post.image);
    // console.log("Post image end ");
    return(
      <View style={styles.postImageContainer}> 
        <Image source={{uri:post?.image}} style={styles.postImage}/>
      </View>
      );
  };

export default PostImage;

const styles = StyleSheet.create({
    postImageContainer:{
        width:'100%', 
        height:450,
        backgroundColor:'white'
        },
        postImage:{
          // flex:2,
          // width:'100%',
          height:'100%',
          resizeMode:'cover',
          borderColor:'white',
          borderWidth:10
        }
});
