import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      }

    return(
      <Modal visible={props.visible} animationType="slide">
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
      </Modal>
    );    
}

const styles = StyleSheet.create({

    goalInputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    goalInputBox: {
      width: '80%',
      borderColor: 'black',
      borderWidth: 1,
      padding: 10,
      marginBottom: 10,
    },

  });

export default GoalInput;