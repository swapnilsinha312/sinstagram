import { StyleSheet, Text, View } from 'react-native';
import React, { useState,useEffect } from 'react';
import {SignedInScreens} from './NavigationHelper';
import {SignedOutScreens} from './NavigationHelper';
import {auth} from './Firebase';
import { onAuthStateChanged } from 'firebase/auth';

function Navigation(){
    
    const [currUser,setCurrUser]= useState(false)
    const userHandler=(user)=>{
        user?setCurrUser(user):setCurrUser(false)
    }

    useEffect(()=>{
        return auth.onAuthStateChanged((user)=>(userHandler(user)))
    },[])

  return (
      <>
      {currUser?
        <SignedInScreens/>
        :<SignedOutScreens/>}
        </>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
