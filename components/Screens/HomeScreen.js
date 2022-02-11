import { StyleSheet,SafeAreaView } from 'react-native';
import Footer from '../Home/Footer';
import Header from '../Home/Header';
import Posts from '../Home/Posts';
import Stories from '../Home/Stories';
// import {USERS} from '../Home/FakeUsersData';
import { useEffect, useState } from 'react';
import { collectionGroup, query, getDoc, doc, onSnapshot, orderBy } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from '../../Firebase';

export default function HomeScreen({navigation}) {

  const [posts,setPosts] = useState([])
  const [user,setUser] = useState(null)
  const [users,setUsers] = useState([])
  const [noUsers,setNoUsers]=useState(null);

  useEffect(()=>{
    async function getUser()
    {
      try{
        const auth =getAuth();
        const docRef = doc(db, "Users", auth.currentUser.email);
        const docSnap = await getDoc(docRef);
        setUser(docSnap.data())
      }
      catch(error){console.log(error);}
    }
        // console.log(user)
        // console.log("ajfka");
        // console.log(auth.currentUser.email);
        // console.log("in use effect")
    async function getPosts(){
      try{
        const postsQ = query(collectionGroup(db, 'Posts'),orderBy('createdAt','desc'));
        const abc=onSnapshot(postsQ,(snaps)=>{
            const post=[];
            snaps.forEach((doc)=>{
                var obj=doc.data();
                obj.id=doc.id;
                obj.comments.reverse();
                post.push(obj)
            });
            setPosts(post) 
          })
          
          // console.log(posts);
          // console.log(obj.createdAt.valueOf());
          // post.sort((a,b)=>(-a.createdAt.valueOf()+b.createdAt.valueOf()));
          // setPosts(posts) // console.log(posts);
        }
        catch(error){console.log(error);}
      }

    async function getUsers(){
      try{
          const postsQ = query(collectionGroup(db, 'Users'));
          const abc=onSnapshot(postsQ,(snaps)=>{
          const user=[];
          snaps.forEach((doc)=>{
            var obj=doc.data(); obj.id=doc.id;
            user.push(obj)
          });  
          setUsers(user)
          setNoUsers(user.length)
          })
        }
  catch(error){console.log(error);}
}
    
    getUser();
    getPosts();
    getUsers();
    console.log("User and post data extracted");
    // getPosts();
    // console.log("Home Screen posts extracted");
    // console.log('Got posts');
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} noUsers={noUsers}/>
      <Stories users={users}/>
      {/* <Posts posts={posts}/> */}
      <Posts posts={posts} user={user}/>
      <Footer navigation={navigation} user={user}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginHorizontal:20,
    marginVertical:15,
  },
});
