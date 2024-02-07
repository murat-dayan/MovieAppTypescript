import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './RoundedButtonCard.style'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { white } from '../../styles/colors'

const RoundedButtonCard = () => {
  return (
    <Pressable style={styles.container}>
        <MaterialIcon name='star' size={15} color={white} />
    </Pressable>
  )
}

export default RoundedButtonCard