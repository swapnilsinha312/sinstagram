import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View,SafeAreaView } from 'react-native';
// import HomeScreen from './components/Screens/HomeScreen';
// import NewPostScreen from './components/Screens/NewPostScreen';
import Navigation from './Navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation/>
  </SafeAreaView>
  );
}

// //   <HomeScreen/>
// //   <NewPostScreen/>
// <StatusBar style="auto" />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop:20
  },
});
