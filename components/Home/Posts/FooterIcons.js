import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React,{useState} from 'react';
import NumberFormat from 'react-number-format';
import { getAuth } from 'firebase/auth';

export default function FooterIcons({onPressLike, likedArray,changeShowAddCommentOption,showAddCommentOption}){

    const [liked,setLiked]=useState(likedArray.includes(getAuth().currentUser.email));
    const [noLiked,setNoLiked]=useState(likedArray.length);

    function onClickLiked(){
        onPressLike();
        if(liked) setNoLiked((noLiked)-1);
        else setNoLiked(noLiked+1);
        setLiked(!liked);
        // increment liked number
    }

    function onClickComment(){   
        changeShowAddCommentOption();
    }

    return (
        <View>
        <View style={styles.imageContainer}>
            <TouchableOpacity onPress={()=>(onClickLiked())} style={styles.leftLogo}>
                <Icon name='angellist' size={30} color={liked?'#ff0000':'#ffffff'} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.leftLogo} onPress={()=>(onClickComment())}>
                <Icon name='connectdevelop' size={30} color={showAddCommentOption?'#ff0000':'#ffffff'}/>
            </TouchableOpacity>
        </View>

        <Text style={{color:'white',textAlign:'left'}}>    
            <NumberFormat value={noLiked} displayType={'text'} thousandSeparator={true}
            renderText={formattedValue => <Text>{formattedValue}</Text>} // This line had me stuck for 30 minutes. Damned formatting and !localeString android
            />
            {'  '}sins
        </Text>
    
    </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        flexDirection:'row',
        color:'white',
        marginTop:10,
        // alignItems:'center',
  },
    
    leftLogo:{
        margin:5,
      // width:50,
      // height:25,
      // resizeMode:'contain'
    },
});
