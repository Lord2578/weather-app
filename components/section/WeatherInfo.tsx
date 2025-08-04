import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Weather } from '../../models/Weather'
import { DEEGREE_SYMBOL } from '../../utils/Constants'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface WeatherInfoProps {
    weather: Weather
}

const WeatherInfo = ({ weather }: WeatherInfoProps) => {
  const { city, temperature, condition, high, low } = weather;
  const {top} = useSafeAreaInsets();
  const weatherInfoMargin = top + 51;

  return (
    <View style={{ backgroundColor: 'red', marginTop: weatherInfoMargin }}>
        <Text style={styles.cityText}>{city}</Text>
        <Text style={styles.temperatureText}>{temperature}{DEEGREE_SYMBOL}</Text>
        <Text style={styles.conditionText}>{condition}</Text>
        <Text style={styles.minMaxText}>H:{high}{DEEGREE_SYMBOL}    L:{low}{DEEGREE_SYMBOL}</Text>
    </View>
  )
}

export default WeatherInfo

const styles = StyleSheet.create({})