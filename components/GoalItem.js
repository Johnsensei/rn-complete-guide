import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = props => {
    return(
        <View style={styles.goalItem}>
            <Text >
              {props.title}
            </Text>
          </View>
    );
}

const styles = StyleSheet.create({
    goalItem: {
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1,
      padding: 10,
      marginTop: 10
    }
  });

export default GoalItem;