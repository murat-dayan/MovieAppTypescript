import { View, Text } from 'react-native'
import React from 'react'
import styles from './FavoriteCard.style'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { mainBlue } from '../../styles/colors'

const FavoriteCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favorite Movies</Text>
      <MaterialIcon name='arrow-forward-ios' size={20} color={mainBlue} />
    </View>
  )
}

export default FavoriteCard