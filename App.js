import { View, SafeAreaView } from 'react-native';

import { Action, Item } from './components';
import styles from './App.components.style';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.background}></View>
        <View style={styles.mainWrapper}>
          <Item />
          <Action />
        </View>
      </SafeAreaView>
    </>
  );
}
