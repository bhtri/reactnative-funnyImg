import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';

import { addAction, removeAction } from '../../store/action';
import { IMAGES } from '../../contains'
import styles from './style';

export default function Action() {
  const listData = useSelector((state) => state.listData);
  const dispatch = useDispatch();

  const click = () => {
    dispatch(addAction());
    dispatch(removeAction());
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => click()} style={[styles.box, styles.boxFunny]}>
        <Image source={IMAGES.iconFunny} />
        <Text style={styles.number}>100</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.box, styles.boxSad]}>
        <Image source={IMAGES.iconSad} />
        <Text style={styles.number}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.box, styles.boxHappy]}>
        <Image source={IMAGES.iconHappy} />
        <Text style={styles.number}>50</Text>
      </TouchableOpacity>
    </View>
  )
}