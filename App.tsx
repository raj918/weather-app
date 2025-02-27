import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const apikey = '655b4c5a37f4a3ea39218f65ab724d8d';

const App = () => {
  const [city, setCity] = useState("kanpur");
  const [weather, setWeather] = useState(null);
  

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`,
      );

     setWeather(response.data);


    } catch (error) {
      console.error('Error fetching weather data:', error); // Handle the error (e.g., log it, show an error message, etc.' error)
    }
  };
 
 
  useEffect(() => {
    fetchWeather();
  
  }, [])
   



  return (
    <View style={styles.container}>
      <Text>weather app</Text>
      <TextInput
        style={styles.input}
        placeholder="enter city"
        value={city}
        onChangeText={text => setCity(text)}
        
      />
      <Button title="get weather" onPress={fetchWeather} />
    </View>


  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    marginBottom: 20,
  },
});
