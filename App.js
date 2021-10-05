import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Main from './components/MainComponent';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Main style={styles.safeAreaView} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#1d466d',
    flex: 1
  }
});

export default App;