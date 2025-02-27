

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  StatusBar,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';



const apikey = '655b4c5a37f4a3ea39218f65ab724d8d';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
      );
      console.log('response', response.data);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1E1E1E" />
      <Text style={styles.heading}>Weather App</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter city"
        placeholderTextColor="#bbb"
        value={city}
        onChangeText={(text) => setCity(text)}
      />

      <View style={styles.buttonContainer}>
        <Button title="Get Weather" onPress={fetchWeather} color="#FFD700" />
      </View>

      {weather?.main && weather?.weather?.length > 0 && (
        <View style={styles.weatherContainer}>
          <Text style={styles.temp}>{weather.main.temp}°C</Text>
          <Text style={styles.description}>
            {weather.weather[0].description}
          </Text>
          <Text style={styles.city}>{weather.name }</Text>
        </View>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 12,
    backgroundColor: '#333',
    borderRadius: 8,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 16,
  },
  buttonContainer: {
    width: '60%',
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  weatherContainer: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#292929',
    alignItems: 'center',
  },
  temp: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  description: {
    fontSize: 20,
    color: '#fff',
    textTransform: 'capitalize',
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ADD8E6',
  },
});

