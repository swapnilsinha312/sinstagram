import { StyleSheet,TextInput, Text, View, TouchableOpacity } from 'react-native';
import React,{useEffect, useState} from 'react';
import { getAuth } from 'firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CommentSection from './CommentSection';
import FooterIcons from './FooterIcons';

export default function PostFooter({post,onPressLike,addComment}) {
  
  const[showAddCommentOption,setShowAddCommentOption]=useState(false)

  function changeShowAddCommentOption(){
    setShowAddCommentOption(!showAddCommentOption);
  }

    return (
    <View style={styles.container}>
      <FooterIcons showAddCommentOption={showAddCommentOption} changeShowAddCommentOption={changeShowAddCommentOption} onPressLike={onPressLike} likedArray={post.likedByUsers}/>
      <NameNCaption userName={post.user} caption={post.caption}/>
      <CommentSection comments={post.comments}/>
      {showAddCommentOption?<AddComment changeShowAddCommentOption={changeShowAddCommentOption} addComment={addComment}/>:null}
    </View>
  );
}


function AddComment({addComment,changeShowAddCommentOption}){
  const [commentValue,setCommentValue]=useState('')

  function onChange(textValue){
    setCommentValue(textValue);
  }

  function onPressCommentAdd(){
    if(commentValue==='') return;
    addComment(commentValue);
    setCommentValue('');
    changeShowAddCommentOption();
  }
  return ( 
  <View style={styles.inputContainer}>
    <TextInput value={commentValue} style={styles.input} onChangeText={onChange} placeholder='Comment on the post' placeholderTextColor='gray'  />
    <TouchableOpacity onPress={()=>onPressCommentAdd()}>
      <Icon name={'rocket'} size={30} color={'red'}/>
    </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
    imageContainer: {
        flexDirection:'row',
        color:'white',
        marginTop:10,
        // alignItems:'center',
  },
  inputContainer:{
    justifyContent:'space-around',
    flexDirection:'row',
    marginHorizontal:15,
    marginVertical:2
  },
  input:{
    color:'white',
    fontSize:16,
    // padding:1
},    
    leftLogo:{
        margin:5,
      // width:50,
      // height:25,
      // resizeMode:'contain'
    },

    numberMessage:{
      color:'#ff1212',
      fontWeight:'600'
    },

    numberContainer:{
        position:'absolute',
        right:0,
        top:0.5,
        height:20,
        width:15,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        zIndex:10,
        backgroundColor:'white',
        color:'#ff1212'
        // color:'white',
      // fontSize:50,
      // padding:'1%',
      // flexDirection:'row',
      // fontSize:18,
    },

    container:{
        justifyContent:'space-between',
        borderColor:'#d9bac1',
        // borderBottomWidth:1,
        borderTopWidth:1,
    },

    nameAndImageContainer:{
        flex:1,
        flexDirection:'row',
        marginTop:5,
        textAlignVertical:'center',
        alignItems:'center',
        // margin:10
    },
    commentContainer:{
        color:'white',
        marginVertical:3
    },

    captionOfNameAndCaption:{
        color:'white',
        fontSize:16,
        // margin:5
    },

    marginComment:{
      marginVertical:3
    },
    
    nameOfNameAndCaption:{
        fontWeight:'bold',
        color:'white',
        // marginRight:10,
        // marginLeft:10
    },
});



 

function NameNCaption({userName,caption}){
   return ( 
   <View style={styles.nameAndImageContainer}>
        <Text style={styles.captionOfNameAndCaption}>
            <Text style={styles.nameOfNameAndCaption}>
                {userName} :  
            </Text>
            <Text>{' '}{caption}</Text>
        </Text>
   </View>
   );
};




/* <TouchableOpacity style={styles.rightLogo}>
          <View>
            <Icon name='rocket' size={30} color='#ff1212'/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rightLogo}>
          <View style={styles.numberContainer}>
            <Text style={styles.numberMessage}>agypv8rgyp</Text>
          </View>
        </TouchableOpacity> */