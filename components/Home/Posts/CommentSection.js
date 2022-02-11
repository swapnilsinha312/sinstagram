import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react';
import CommentHelper from './CommentHelper';

export default function CommentSection({comments}){
    
    const [showComment,setShowComment]= useState(false)
    function onClickShowComment()
    {
        setShowComment(!showComment);
    }
    
    return ( 
    <View style={styles.commentContainer}>
        
        <TouchableOpacity onPress={onClickShowComment}>
            <Text style={{color:'gray'}}>
            {comments.length==0?('No Comments'):
            (comments.length>2 && !showComment)?`View all ${comments.length} comments`:'All Comments'}
            </Text>
        </TouchableOpacity>
        
         {comments.length<1?(<Text></Text>):(showComment?
         (comments.map((comment,index)=>(<Text style={styles.marginComment} key={index}>
             <CommentHelper comment={comment}/>
             </Text>))):(<Text style={styles.marginComment} >
             <CommentHelper comment={comments[0]}/>
            </Text>))}
        
    </View>
    );
 };

 const styles = StyleSheet.create({
   
    commentContainer:{
        color:'white',
        marginVertical:3
    },
    marginComment:{
      marginVertical:3
    },
    

});
