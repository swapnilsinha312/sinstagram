import {  Alert,Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React,{useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import * as Validator from 'email-validator';
import {auth} from '../../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function LoginForm({navigation}) {

    const loginFormSchema=Yup.object().shape({
        email:Yup.string().email().required('An email is required'),
        password:Yup.string().required().min(8,'Password should have atleast 8 characters'), 
    })

    const onlogin=async(email,password)=>{
        console.log(email+" "+password);
        try{
            const req=await signInWithEmailAndPassword(auth,email,password)
            // delay(1000).then(() => navigation.push('HomeScreen'));
        }
        catch(error){
            console.log(error.message);
            Alert.alert(

                'For the fear of Satan, ','Recollect the glory of correct logins\nOr signUp and be savedfrom the anti-devils',
                [
                    {
                        text:'Ok',
                        style:'cancel',
                        onPress:()=>(console.log("OK"))
                    },
                    {
                        text:'Sign Up',
                        style:'cancel',
                        onPress:()=>(navigation.push('SignupScreen'))
                    }
                ]
            );
        }
    }
    
  return (
    <View style={styles.container}>
        <Formik 
        initialValues={{email:'',password:''}}
        onSubmit={(values)=>{onlogin(values.email,values.password)}}
        validationSchema={loginFormSchema}
        validationOnMount={true}
        >

        {({handleChange,handleBlur,handleSubmit,values,isValid})=>(
            <>
                <View style={styles.inputField}>
                    <TextInput placeholder='Enter User Email'
                        placeholderTextColor='gray' autoCapitalize='none'
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
                    <TextInput placeholder='Enter Password' placeholderTextColor='gray' 
                    autoCapitalize='none'secureTextEntry={true}
                    textContentType='password' autoCorrect={false} autoFocus={false}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    style={[styles.input,(values.password.length<1 || values.password.length>7)?null:styles.incorrectBorder]}
                    />
                </View>

                <View style={styles.forgotBox}>
                    <Text style={{color:'#3a7eba'}}>Forgot Password?</Text>
                </View>

                <Pressable style={[isValid?styles.validButton:styles.invalidButton]} 
                onPress={handleSubmit} >
                    <Text style={styles.buttonText}>Log In</Text>
                </Pressable>

                <View style={styles.signupContainer}>
                    <Text style={{color:'white'}}>Don't have account?</Text>
                    <TouchableOpacity onPress={()=>(navigation.push('SignupScreen'))}>
                        <Text style={{color:'#3a7eba'}}> Sign Up</Text>
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
