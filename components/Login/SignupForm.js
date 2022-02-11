import {  Alert, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import * as Validator from 'email-validator';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth,usersRef } from '../../Firebase';
import { setDoc,doc } from 'firebase/firestore';

export default function SignupForm({navigation}) {
    
    const signupFormSchema=Yup.object().shape({
        email:Yup.string().email().required('An email is required'),
        username:Yup.string().required().min(4,'Username should be between 4 and 20 characters'), 
        password:Yup.string().required().min(8,'Password should have atleast 8 characters'), 
        confirmPassword:Yup.string()
        .test('passwords-match', 'Passwords must match', function(value){
            return this.parent.password === value
        })
    })
    
    const profilePic=(seed)=>(`https://avatars.dicebear.com/api/avataaars/${seed}.svg`);
        
        
    const onSignUp=async(username,email,password)=>{
        try{
            console.log(username+' '+email+' '+password);
            const fObj=await createUserWithEmailAndPassword(auth,email,password);
            
            console.log(email+" has been registered");
            const userRef=doc(usersRef,fObj.user.email)
            setDoc(userRef,
                {owner_uid: fObj.user.uid,
                username:username,
                email:fObj.user.email,
                profilePic:profilePic(Math.floor(Math.random()*100))}
            );
            
            navigation.push('LoginScreen')
        }
        catch(error){
            console.log(error.message);
            Alert.alert(
                'Dont perform ecclesiastical sins,\n','Enter valid details\n',
                [
                    {
                        text:'Ok',
                        style:'cancel',
                        onPress:()=>(console.log("OK"))
                    },
                ]
            );
        }

    }

  return (
    <View style={styles.container}>
        <Formik 
        initialValues={{username:'',email:'',password:'',confirmPassword:''}}
        onSubmit={values=>{onSignUp(values.username,values.email,values.password)}}
        validationSchema={signupFormSchema}
        validationOnMount={true}
        >

        {({handleChange,handleBlur,handleSubmit,values,isValid})=>(
            <>
                <View style={styles.inputField}>
                    <TextInput placeholder='Enter Email' placeholderTextColor='gray' 
                        autoCapitalize='none'
                        keyboardType='email-address' 
                        textContentType='emailAddress'
                        autoFocus={true}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        style={[styles.input,values.email.length<1?null:Validator.validate(values.email)?null:styles.incorrectBorder]}
                    />
                </View>

                <View style={styles.inputField}>
                    <TextInput placeholder='Enter Username' placeholderTextColor='gray' 
                    autoCapitalize='none'
                    textContentType='username' autoCorrect={false} autoFocus={false}
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                    style={[styles.input,(values.username.length<1 || (values.username.length>3 && values.username.length<21))?null:styles.incorrectBorder]}
                    />
                </View>

                <View style={styles.inputField}>
                    <TextInput placeholder='Enter Password' placeholderTextColor='gray' 
                    autoCapitalize='none'secureTextEntry={true}
                    textContentType='password' autoCorrect={false} autoFocus={false}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    style={[styles.input,(values.password.length<1 || values.password.length>7)?null:styles.incorrectBorder]}
                    />
                </View>

                <View style={styles.inputField}>
                    <TextInput placeholder='Confirm Password' placeholderTextColor='gray' 
                    autoCapitalize='none'secureTextEntry={true}
                    textContentType='password' autoCorrect={false} autoFocus={false}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                    style={[styles.input,((values.confirmPassword.length<1 || values.confirmPassword.length>7)&&(values.password===values.confirmPassword))?null:styles.incorrectBorder]}
                    />
                </View>

                <Pressable style={[isValid?styles.validButton:styles.invalidButton]} 
                onPress={handleSubmit} >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>

                <View style={styles.signupContainer}>
                    <Text style={{color:'white'}}>Have an account?</Text>
                    <TouchableOpacity onPress={()=>(navigation.goBack())}>
                        <Text style={{color:'#3a7eba'}}> Log In</Text>
                        </TouchableOpacity>
                </View>
            </>
            )}
        </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
    signupContainer:{
        flexDirection:'row',
        justifyContent:'center',
        margin:50
    },
    forgotBox:{
        alignItems:'flex-end',
        marginBottom:20,
        padding:10
    },
    container:{
        marginTop:20
        // backgroundColor:'green'
    },
    inputField:{
        marginHorizontal:20,
        marginVertical:20,
        // color:'red',
        // backgroundColor:'#FAFAFA'
    },
    input:{
        color:'white',
        fontSize:20,
        padding:5
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
    buttonText:{
        color:'white',
        fontSize:24
    },
    incorrectBorder:
    {
        borderColor:'#a64d0d',
        borderWidth:1
    }
});
