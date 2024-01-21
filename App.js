import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import List from './components/ToDoList';

export default function App() {
  return (
    <View style={styles.container}>
        <List initialValues={['Software Engineering', 'Computer Science I', 'Linear Algebra II']} />
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