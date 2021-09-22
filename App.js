import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Main from './components/MainComponent';

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#1d466d'
  }
})