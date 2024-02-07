import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './TextButtonCard.style'

const TextButtonCard = () => {
  return (
    <Pressable onPress={()=> console.log("logout")}>
        <Text style={styles.text} >Logout</Text>
    </Pressable>
  )
}

export default TextButtonCard