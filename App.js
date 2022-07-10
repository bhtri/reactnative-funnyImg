import { View, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Provider } from 'react-redux';

import { Action, Item } from './components';
import styles from './App.components.style';
import petsData from './data/pets';

import store from './store';

export default function App() {
  const [pet, setPet] = useState(0);
  const data = petsData[pet];

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <View style={styles.background}></View>
        <View style={styles.mainWrapper}>
          <Item data={data}/>
          <Action data={data} />
        </View>
      </SafeAreaView>
    </Provider>
  );
}
