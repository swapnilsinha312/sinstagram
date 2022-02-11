import { Pressable,StyleSheet, Text, View,Image,TextInput } from 'react-native';
import React,{useEffect, useState} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome5'
import validUrl from 'valid-url';
import { db } from '../../Firebase';
import { getAuth } from "firebase/auth";
import {doc,getDoc,addDoc,Timestamp,collection} from 'firebase/firestore' 
//using Formik

const postFormSchema= Yup.object().shape({
    imageUrl:Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200,'Caption is too big')
})


const thumbnailDefault=
'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60'
const checkImg=
'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'

const PostForm=({navigation})=>{
    const [thumbnailUrl,setThumbnailUrl]=useState(thumbnailDefault)
    const [user,setUser]= useState(null)
    useEffect(()=>{
        async function getUser(){
            const auth =getAuth();
            const user = auth.currentUser;
            // console.log("ajfka");
            // console.log(auth.currentUser.email);
            const docRef = doc(db, "Users", auth.currentUser.email);
            const docSnap = await getDoc(docRef);
            setUser(docSnap.data())
            // console.log(user)
            // console.log("in use effect")
        } 
        getUser()
    },[]);

    function uploadPost(caption,imageUrl){
        // console.log(caption+' '+imageUrl+" kwvjboprpo ");
        try{
            // console.log(user);
            // const postRef=doc(postsRef,Date.now)   
            // console.log(postRef);
            // console.log(user); 
            const postsRef=collection(db,'Users',user.email,'Posts'); 
            addDoc(postsRef,
                {
                    owner_uid:user.owner_uid,
                    user:user.email,
                    caption:caption,
                    image:imageUrl,
                    profilePic:user.profilePic,
                    likedByUsers:[],
                    comments:[],
                    createdAt:Timestamp.now()
                }
            );    
            console.log("Post uploaded");
        }
        catch(error){
            console.log("Error in post upload "+error.message);
        }
        // navigation.push('HomeScreen');
    }

    return (
        <Formik
        initialValues={{caption:'',imageUrl:''}}
        onSubmit={(values)=>{
            // console.log("POST POST");
            uploadPost(values.caption,values.imageUrl); 
            navigation.push('HomeScreen');
        }}

        validationSchema={postFormSchema}
        validateOnMount={true}
        >
            {({handleBlur,handleChange,handleSubmit,values,errors,isValid})=>
                <>
                <View style={styles.formContainer}>
                    <View style={styles.imageAndCaptionBox}>
                        
                        <Image style={styles.thumbnail} source={{uri:validUrl.isUri(thumbnailUrl)?thumbnailUrl:thumbnailDefault}} key={Date.now()}/>
                        <TextInput placeholder='Confess your sins...' placeholderTextColor={'gray'} 
                        onChangeText={handleChange('caption')} onBlur={handleBlur('caption')} 
                        value={values.caption}  multiline={true} 
                        style={styles.caption} 
                        />
                
                    </View>

                    <TextInput onChange={()=>(setThumbnailUrl(values.imageUrl))} placeholder='Proof of the sin (Image URL)' placeholderTextColor={'gray'} 
                    onChangeText={handleChange('imageUrl')} onBlur={handleBlur('imageUrl')} 
                    value={values.imageUrl}  multiline={true} 
                    style={styles.imageUrl} 
                    />
                    <View style={{flexDirection:'row'}}>
                        <Icon name={'bible'} color={'white'} size={15}/>
                        <Text style={styles.error}>{'  '}{errors.imageUrl}</Text>
                    </View>
                    {/* <Image source={{uri:thumbnailUrl}} style={styles.imageBox} /> */}
                    {/* <TextInput placeholder='Enter image URL' placeholderTextColor={'gray'}/> */}
                </View>
                <Pressable style={[isValid?styles.validButton:styles.invalidButton]} 
                onPress={handleSubmit} >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>
                </>
            }

        </Formik>
    );
}
export default function NewPostForm({navigation}) {
  return (
    <View style={styles.container}>
      <PostForm navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
    btn:{
        // backgroundColor: 'transparent',
        // Color: 'transparent',
        // color:'white'
        alignItems:'center',
    },
    validButton:{
        marginHorizontal:10,
        padding:8,
        borderRadius:10,
        alignItems:'center',   
        backgroundColor: '#3a7eba'
    },
    invalidButton:{
        marginHorizontal:10,
        padding:8,
        borderRadius:10,
        alignItems:'center',   
        backgroundColor: '#bac6d1' 
    },
    btnText:{
        color:'blue',
        alignItems:'center'
    },
    thumbnail:{
        height:100,
        width:100,
        resizeMode:'cover'
    },
    container:{
        // flex:1,
        backgroundColor:'black'
    },
    error:{
        color:'white'
    },
    formContainer:{
        margin:20,
        // justifyContent:'center'
        // alignContent:'apceB'
    },

    text:{
        color:'red'
    },
    imageBox:{
        height:100,
        width:100,
        // resizeMode:'cover'
    },
    imageAndCaptionBox:{
        flexDirection:'row',
        borderColor:'gray',
        marginTop:20,
        // alignContent:'flex-start',
        // borderWidth:1,
        // flex:1,
    },

    caption:{
        margin:20,
        color:'red',
        fontSize:25,
        // borderWidth:1,
        // borderColor:'white',
    },

    imageUrl:{
        margin:5,
        fontSize:18,
        color:'red',
        // borderWidth:1,
        // borderColor:'white',
    }
});
