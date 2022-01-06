import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [goalList, setGoalList] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    // console.log(enteredGoal);
    setGoalList(currentGoals => [...currentGoals,
      {key: Math.random().toString(), value: enteredGoal}]);
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.goalInputContainer}>
        <TextInput
          placeholder='Input goal.'
          style={styles.goalInputBox}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button
          title="ADD"
          onPress={addGoalHandler}
        />
      </View>
      <FlatList
        data={goalList}
        renderItem={itemData => 
          <View key={itemData.key} style={styles.goalItem}>
            <Text >
              {itemData.item.value}
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 50,
    marginTop: 50
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
  },
  goalItem: {
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginTop: 10
  }
});
