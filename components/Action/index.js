import { View } from 'react-native'

import styles from './style';
import { DEFINE } from '../../contains';
import Button from './Button';

export default function Action({ data }) {
  return (
    <View style={styles.container}>
      <Button
        data={data}
        status={DEFINE.REACTION_LIKE}

      />
      <Button
        data={data}
        status={DEFINE.REACTION_DISLIKE}

      />
      <Button
        data={data}
        status={DEFINE.REACTION_LOVE}

      />
    </View>
  )
}