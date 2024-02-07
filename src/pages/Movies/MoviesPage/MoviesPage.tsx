import { View, Text } from 'react-native'
import React from 'react'
import styles from './MoviesPage.style'
import RatingCard from '../../../components/RatingCard/RatingCard'
import MovieDateCard from '../../../components/MovieDateCard/MovieDateCard'
import MovieCard from '../../../components/MovieCard/MovieCard'
import SeriesCard from '../../../components/SeriesCard/SeriesCard'
import RoundedButtonCard from '../../../components/RoundedButtonCard/RoundedButtonCard'
import SearchCard from '../../../components/SearchCard/SearchCard'
import FavoriteCard from '../../../components/FavoriteCard/FavoriteCard'
import TextButtonCard from '../../../components/TextButtonCard/TextButtonCard'

const MoviesPage = () => {
  return (
    <View style={styles.container}>
      <Text>MoviesPage</Text>
      <TextButtonCard />
    </View>
  )
}

export default MoviesPage