import React from 'react'
import { TextInput, StyleSheet } from 'react-native';
const GoalInput = props => {
    return (
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
    );
}

const styles = StyleSheet.create({
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    }
});

export default GoalInput;