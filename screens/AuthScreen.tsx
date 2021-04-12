import * as React from 'react';
import { StyleSheet } from 'react-native';

import Auth from '../components/Auth';
import { Text, View } from '../components/Themed';

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <Auth/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
