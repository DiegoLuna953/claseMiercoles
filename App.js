//Importar librerias
import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image, ScrollViewBase} from 'react-native';
import TextComponent from './components/textComponent';

const App = ()=> {
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Mi Biografia</Text>
        <Image style={styles.image} source={require('./assets/Images/monito.jpg')}/>
        <TextComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#487eb0'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#dfe6e9'
  },
  image: {
    width: 100,
    height: 100
  },
})

export default App;