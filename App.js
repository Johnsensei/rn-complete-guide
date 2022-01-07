import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goalList, setGoalList] = useState([]);

  const addGoalHandler = goalTitle => {
    // console.log(enteredGoal);
    setGoalList(currentGoals => [...currentGoals,
      {key: Math.random().toString(), value: goalTitle}]);
  }

  return (
    <View style={styles.mainContainer}>

      <GoalInput
        onAddGoal={addGoalHandler}
      />

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
});
