import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      }

    return(
        <View style={styles.goalInputContainer}>
            <TextInput
            placeholder='Input goal.'
            style={styles.goalInputBox}
            onChangeText={goalInputHandler}
            value={enteredGoal}
            />
            <Button
            title="ADD"
            onPress={props.onAddGoal.bind(this, enteredGoal)}
            />
        </View>
    );    
}

const styles = StyleSheet.create({

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

  });

export default GoalInput;