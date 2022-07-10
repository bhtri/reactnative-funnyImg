import { View, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Provider } from 'react-redux';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

import { Action, Item } from './components';
import styles from './App.components.style';
import petsData from './data/pets';

import store from './store';

export default function App() {
  const [pet, setPet] = useState(0);
  const data = petsData[pet];

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };

  onSwipe = (gestureName, gestureState) => {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    switch (gestureName) {
      case SWIPE_UP:
      case SWIPE_LEFT:
        console.log('1');
        break;
      case SWIPE_DOWN:
      case SWIPE_RIGHT:
        console.log('2');
        break;
      default:
        break;
    }
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <View style={styles.background}></View>
        <View style={styles.mainWrapper}>
          <GestureRecognizer
            style={styles.wrapper}
            onSwipe={(direction, state) => onSwipe(direction, state)}
            config={config}
          >
            <Item data={data} />
          </GestureRecognizer>
          <Action data={data} />
        </View>
      </SafeAreaView>
    </Provider>
  );
}
