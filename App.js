import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.goalInputContainer}>
        <TextInput
          placeholder='Input goal.'
          style={styles.goalInputBox}
        />
        <Button
          title="ADD"
        />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 50,
  },
  goalInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goalInputBox: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
});
