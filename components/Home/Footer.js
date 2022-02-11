import { View, Image,StyleSheet,TouchableOpacity } from 'react-native';
import React,{useState,useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Divider } from 'react-native-elements';

export default function Footer({navigation,user}){

  const [active,setActive]=useState(1);

  function onClickActive(n)
  {
    if(n-4===0){navigation.push('HomeScreen');}
    if(n-1===0){navigation.push('HomeScreen');}
    if(n-2===0){navigation.push('NewPostScreen');}
    if(n-3===0){navigation.push('NewPostScreen');}
    setActive(n);
  }

  return (
    <View>
      <Divider width={1} orientation='vertical'/>
      <View style={styles.container}>
            <TouchableOpacity onPress={()=>(onClickActive(1))} style={styles.logo} >
                <Icon name='synagogue' size={30} color={'#ffffff'} />
                {active===1?<Icon name='dot-circle' size={10} color={'#ffffff'} />
                :null}
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>(onClickActive(2))} style={styles.logo}>
                <Icon name='searchengin' size={30} color={'#ffffff'} />
                {active===2?<Icon name='dot-circle' size={10} color={'#ffffff'} />
                :null}
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>(onClickActive(3))} style={styles.logo}>
                <Icon name='upload' size={30} color={'#ffffff'} />
                {active===3?<Icon name='dot-circle' size={10} color={'#ffffff'} />
                :null}
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.logo} onPress={()=>(onClickActive(4))}>
                {<Image source={{uri:user?.profilePic}} style={styles.image}/>}
                {active===4?<Icon name='dot-circle' size={10} color={'#ffffff'} />
                :null}
            </TouchableOpacity>
        </View>
      </View>
  );
};

const styles= StyleSheet.create({
    container:{
        // color:'white',
        flexDirection:'row',
        justifyContent:'space-around',
        textAlignVertical:'center',
        paddingTop:10,
        // borderTopWidth:1,
        // borderBottomWidth:1,
        // borderColor:'white'
        // marginHorizontal:10,
        // marginRight:10
    },
    image:{
      // backgroundColor:'white',
      width:40,
      height:35,
      borderRadius:25,
      borderWidth:1,
      borderColor:'white',
      backgroundColor:'white',
    },
    
    logo:
    {
      textAlignVertical:'center'
    }
  }
);