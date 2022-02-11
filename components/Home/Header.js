import { signOut } from 'firebase/auth';
import { useEffect,useState } from 'react';
import { TouchableOpacity,Image,StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {auth} from '../../Firebase';

export default function Header({navigation,noUsers}) {

  const [numUsers,setNumUsers]=useState(1)

  useEffect(()=>{
    if(noUsers)
    {setNumUsers(noUsers)}
  },[noUsers]);

  const signOutFunc=async()=>{
    console.log("logging");
    signOut(auth).then(() => {
      console.log("Logged out");
    }).catch((error) => {
      console.log(error.message);
    });
  }

  const imgLink='https://reactnative.dev/img/tiny_logo.png'
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
        style={styles.leftLogo}  
        source={require('../../assets/instaWords.png')}
        />
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <TouchableOpacity style={[styles.rightLogo,styles.rightMargin]}
        onPress={()=>(signOutFunc())}>
            <Icon name='skull-crossbones' size={30} color='#ffffff'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rightLogo} onPress={()=>navigation.push('NewPostScreen')}>
            <Icon  name='plus-square' size={30} color='#ffffff'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rightLogo}>
            <Icon name='rocket' size={30} color='#ff1212'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rightLogo}>
          <View style={styles.numberContainer}>
            <Text style={styles.numberMessage}>{numUsers}</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent:'space-between',
    // alignItems:'center',
    flexDirection:'row',
    color:'white',
    marginTop:10
  },

  leftLogo:{
    width:100,
    height:50,
    resizeMode:'contain'
    },
    
    rightLogo:{
      // width:50,
      // height:25,
      // resizeMode:'contain'
      marginLeft:5,
      marginRight:5,
      // paddingHorizontal:5
    },
    rightMargin:{marginRight:8},

    numberMessage:{
      color:'#ff1212',
      fontWeight:'600'
    },

    numberContainer:{
      // color:'white',
      position:'absolute',
      // fontSize:50,
      right:0,
      top:0.5,
      // padding:'1%',
      // flexDirection:'row',
      // fontSize:18,
      height:20,
      width:15,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10,
      zIndex:10,
      backgroundColor:'white',
      color:'#ff1212'
    },

    container:{
      // marginTop:'1%',
      justifyContent:'space-between',
      flexDirection:'row',
      // marginHorizontal:20,
      // marginVertical:15,
      borderColor:'#d9bac1',
      borderBottomWidth:1,
      borderTopWidth:1,
    }
});
