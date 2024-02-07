import { View, Text } from 'react-native'
import React from 'react'
import styles from './RatingCard.style'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { white } from '../../styles/colors'

const RatingCard = () => {
  return (
    <View style={styles.container}>
      <Icon name='star' color={white} size={15}  />
      <Text style={styles.rating_text}>7,5</Text>
    </View>
  )
}

export default RatingCard