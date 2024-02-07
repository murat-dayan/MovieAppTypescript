import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './SeriesCard.style'
import RatingCard from '../RatingCard/RatingCard'

const SeriesCard = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/joker.jpg')} />
      <Text style={styles.movie_name_text}>Movie Name</Text>
      <RatingCard />
    </View>
  )
}

export default SeriesCard