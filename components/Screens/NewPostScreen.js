import { SafeAreaView,StyleSheet, Text, View } from 'react-native';
import React from 'react';
import NewPostHeader from '../NewPost/NewPostHeader';
import NewPostForm from '../NewPost/NewPostForm';

export default function NewPost({navigation}) 
{
  return (
    <SafeAreaView style={styles.container}>
      <NewPostHeader navigation={navigation}/>
      <NewPostForm navigation={navigation}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1
    },
});
