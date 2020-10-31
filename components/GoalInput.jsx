import React, { useState } from 'react'
import { TextInput, StyleSheet, View, Button } from 'react-native';
const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    /**
     * Update the state property entered text when the input change
     * @param {string} enteredText
     */
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    // add a goal and reset the input value to blank
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal.trim());
        setEnteredGoal('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
            <Button title="ADD" onPress={addGoalHandler}></Button>
        </View >
    );
}

const styles = StyleSheet.create({
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});

export default GoalInput;