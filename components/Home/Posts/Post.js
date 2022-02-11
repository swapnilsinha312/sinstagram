import { arrayRemove, arrayUnion, Firestore } from 'firebase/firestore';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-elements';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import { getAuth } from 'firebase/auth'
import { doc,updateDoc } from 'firebase/firestore';
import { db } from '../../../Firebase';

function Post({post,user}){
  // console.log(post.id);
  const onPressLike=async()=>{
    // console.log("Clicked like");
    const userEmail=(getAuth().currentUser.email)
    const toDo=()=>(!post.likedByUsers.includes(userEmail))
    const postRef=doc(db,"Users",post.user,'Posts',post.id);
    try
    {
      if(!post.likedByUsers.includes(userEmail)){
        await updateDoc(postRef, {likedByUsers:arrayUnion(userEmail)});
      }
      else{
        await updateDoc(postRef, { likedByUsers:arrayRemove(userEmail)});
        }
    }
    catch(error){console.log(error.message);}
    console.log("Like/Unlike");
  }

  const addComment=async(comment)=>{
    console.log("Clicked Comment");
    try
    {
      const postRef=doc(db,"Users",post.user,'Posts',post.id);
      const pushedComment=user.username+" "+comment;
      await updateDoc(postRef, {comments:arrayUnion(pushedComment)});
    }
    catch(error){console.log(error.message);}
    console.log("Comment");
  }

  return (
    <View style={styles.container}>
      <Divider width={1} orientation='vertical'/>
      <PostHeader userName={post.user} proPic={post.profilePic}/>
      <PostImage post={post}/>
      <PostFooter post={post} addComment={addComment} onPressLike={onPressLike}/>
    </View>
  );
};

const styles = StyleSheet.create({   
    container:{
        marginVertical:10
    },
    text:{
        color:'white'
    },
});

export default Post;

// Post Header
// Post Image
// Post Footer