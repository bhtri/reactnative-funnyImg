import { View, Text, Image } from 'react-native'
import React from 'react'

import { IMAGES } from '../../contains'
import styles from './style';

export default function Item({data}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data.name}</Text>
      <View style={styles.box}>
        <Image source={data.image} style={styles.boxImage} />
      </View>
    </View>
  )
}