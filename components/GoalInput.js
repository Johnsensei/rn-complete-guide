import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      }

    const addGoalHandler = () => {
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');
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
            
            <View style={styles.buttonRow}>
              <View style={styles.button}>
                <Button
                  title="ADD"
                  onPress={addGoalHandler}
                />
              </View>

              <View style={styles.button}>
                <Button
                  title="CANCEL"
                  color='red'
                  onPress={props.cancelHandler}
                />
              </View>

            </View>
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
    buttonRow: {
      flexDirection: 'row',
      width: '60%',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    button: {
      width: '40%'
    }
  });

export default GoalInput;