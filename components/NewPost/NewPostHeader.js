import { TouchableOpacity,StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function NewPostHeader({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <TouchableOpacity onPress={()=>navigation.push('HomeScreen')}>
                <Icon name={'trash'} size={25} color={'white'}/>
            </TouchableOpacity>
            <Text style={styles.text}>NEW POST</Text>
            <Text> </Text>
        </View>
        <Divider width={1} orientation='vertical'/>
    </View>
  );
}

const styles = StyleSheet.create({
    back:{
        color:'white',
    },
    text:{
        color:'white',
        fontSize:28,
        fontWeight:'900',
        // alignContent:'center'
        // justifyContent:'center'
        // borderWidth:1,
        // borderColor:'white',
        // marginHorizontal:20,
    },
    textContainer:{
        justifyContent:'space-between',
        margin:15,
        flexDirection:'row',
        alignItems:'center',
        // textAlignVertical:'center',
        // paddingVertical:10,
        // paddingLeft:25,
        // justifyContent:'center',
        // borderColor:'white',
        // borderWidth:1,
    },
    container:{
        backgroundColor:'black',
        // flex:1,
    },
});
