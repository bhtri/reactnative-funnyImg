import { View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import { Action, Item } from './components';
import styles from './App.components.style';

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <View style={styles.background}></View>
        <View style={styles.mainWrapper}>
          <Item />
          <Action />
        </View>
      </SafeAreaView>
    </Provider>
  );
}
