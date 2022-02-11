import { StyleSheet, Text} from 'react-native';
import React,{useEffect, useState} from 'react';

export default function CommentHelper({comment}){

    const [commenter,setCommenter]= useState('')
    const [commentText,setCommentText]=useState('')
  
    useEffect(()=>{
      if(comment)
      {
        const temp=comment.indexOf(' ');
        setCommenter(comment.substr(0,temp))
        setCommentText(comment.substr(temp+1))
      }
    }
    ,[comment]);
      
    return(
          <Text style={styles.captionOfNameAndCaption}>
          <Text style={styles.nameOfNameAndCaption}>
              {commenter}-</Text>
              <Text>{'  '}{commentText}</Text>
          </Text>
       );
      }

      const styles = StyleSheet.create({

        captionOfNameAndCaption:{
            color:'white',
            fontSize:16,
            // margin:5
        },
        nameOfNameAndCaption:{
            fontWeight:'bold',
            color:'white',
            // marginRight:10,
            // marginLeft:10
        },
    });
