import { View, Text, Image } from 'react-native'
import React from 'react'

import { IMAGES } from '../../contains'
import styles from './style';

export default function Item() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chú chó dang yêu</Text>
      <View style={styles.box}>
        <Image source={IMAGES.background} style={styles.boxImage} />
      </View>
    </View>
  )
}