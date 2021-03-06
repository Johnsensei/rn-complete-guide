import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = props => {
    return(
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {props.onDelete(props.id)}}
        >
            <View style={styles.goalItem}>
                <Text >
                {props.title}
                </Text>
            </View>
        </TouchableOpacity>
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