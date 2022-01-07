import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';

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
      // keyExtractor={(item, index) => item.id}
        data={goalList}
        renderItem={itemData => 
          <GoalItem
            key={itemData.key}
            title={itemData.item.value}
          />
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
