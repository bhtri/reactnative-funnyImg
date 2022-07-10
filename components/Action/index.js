import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';

import { addAction, removeAction } from '../../store/action';
import { IMAGES } from '../../contains'
import styles from './style';

export default function Action({ data }) {
  const listData = useSelector((state) => state.listData);
  const dispatch = useDispatch();

  const onReaction = (status) => {
    dispatch(addAction(data.id, status));
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onReaction('like')} style={[styles.box, styles.boxFunny]}>
        <Image source={IMAGES.iconFunny} />
        <Text style={styles.number}>100</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onReaction('dislike')} style={[styles.box, styles.boxSad]}>
        <Image source={IMAGES.iconSad} />
        <Text style={styles.number}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onReaction('love')} style={[styles.box, styles.boxHappy]}>
        <Image source={IMAGES.iconHappy} />
        <Text style={styles.number}>50</Text>
      </TouchableOpacity>
    </View>
  )
}