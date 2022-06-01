import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GreenScreen from './screens/grid/gridscreen';

export default function App() {
  return (
    <View style={styles.container}>
    < GreenScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
