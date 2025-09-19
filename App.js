import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CounterApp from './CounterApp'
import ColorChanger from './ColorChanger'
export default function App() {
  return (
    <View style={styles.container}>
<CounterApp/>
<ColorChanger/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
