import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Dimensions, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
// https://openweathermap.org/api
import { Fontisto } from '@expo/vector-icons';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
export default function App() {
  const [city, setCity] = useState('Loading...');
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);

  const API_KEY = 'dca47a6ef327e0b6b0558674298a7b21';

  const icons = {
    Clouds: 'cloudy',
    Clear: 'day-sunny',
    Snow: 'snow',
    Rain: 'rains',
    Drizzle: 'rain',
    Thunderstorm: 'lightning',
  };

  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      {
        latitude,
        longitude,
      },
      { useGoogleMaps: false }
    );
    setCity(location[0].city || location[0].district);

    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`);
    const json = await response.json();
    setDays(json.daily);
  };

  useEffect(() => {
    getWeather().then();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView horizontal pagingEnabled contentContainerStyle={styles.weather}>
        {days.length === 0 ? (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: SCREEN_WIDTH,
            }}
          >
            <ActivityIndicator size="large" color="white" style={{ marginTop: 10 }} />
          </View>
        ) : (
          days.map((day, index) => (
            <View key={index} style={styles.day}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={styles.temp}>{parseFloat(day.temp.day).toFixed(1)}</Text>
                <Fontisto name={icons[day.weather[0].main]} size={70} color="white" />
              </View>
              <Text style={styles.description}>{day.weather[0].main}</Text>
              <Text style={styles.tinyText}>{day.weather[0].description}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  city: {
    flex: 1.2,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 58,
    color: 'white',
  },
  weather: {},
  day: {
    paddingHorizontal: 15,
    width: SCREEN_WIDTH,
    alignItems: 'flex-start',
  },
  temp: {
    fontSize: 120,
    color: 'white',
  },
  description: {
    marginTop: -40,
    fontSize: 50,
    color: 'white',
  },
  tinyText: {
    marginTop: -10,
    fontSize: 20,
    color: 'white',
  },
});
