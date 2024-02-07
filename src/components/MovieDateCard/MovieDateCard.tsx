import { View, Text } from 'react-native'
import React from 'react'
import styles from './MovieDateCard.style'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { mainBlue } from '../../styles/colors'
const MovieDateCard = () => {
  return (
    <View style={styles.container}>
      <MaterialIcon name='date-range' size={15}  color={mainBlue} />
      <Text style={styles.date_text}>22/22/2013</Text>
    </View>
  )
}

export default MovieDateCard