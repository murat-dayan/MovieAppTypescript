import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './MovieCard.style'
import MovieDateCard from '../MovieDateCard/MovieDateCard'
import RatingCard from '../RatingCard/RatingCard'

const MovieCard = () => {
  return (
    <View style={styles.container}>
    <Image source={require('../../assets/joker.jpg')} style={styles.image} />
    <View style={styles.body_container}>
      <Text style={styles.movie_name_text}>Movie Name</Text>
      <View style={styles.info_container}>
        <MovieDateCard />
        <RatingCard />
      </View>
    </View>
  </View>
  )
}

export default MovieCard