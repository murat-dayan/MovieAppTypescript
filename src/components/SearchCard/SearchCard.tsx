import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './SearchCard.style'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const SearchCard = () => {
  return (
    <View style={styles.container}>
    <MaterialIcon name='search' size={30} color='gray'/>
      <TextInput style={styles.search_text_input} placeholder='Movies Or Series' />
    </View>
  )
}

export default SearchCard