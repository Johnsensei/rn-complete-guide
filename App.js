import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goalList, setGoalList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addGoalHandler = goalTitle => {
    // console.log(enteredGoal);
    setGoalList(currentGoals => [...currentGoals,
      {id: Math.random().toString(), value: goalTitle}]);
  }

  const removeGoalHandler = goalId => {
    // console.log("Goal ID: " + goalId);
    setGoalList(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  }

  return (
    <View style={styles.mainContainer}>

      <Button
        title="Add New Goal"
        onPress={() => setShowModal(true)}
      />

      <GoalInput
        onAddGoal={addGoalHandler}
        visible={showModal}
      />

      <FlatList
      // keyExtractor={(item, index) => item.id}
        data={goalList}
        renderItem={itemData => 
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeGoalHandler}
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
