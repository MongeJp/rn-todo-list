import React, { useState } from 'react'
import { TextInput, StyleSheet, View, Button, Modal } from 'react-native';
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
        <Modal visible={props.isVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel}></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler}></Button>
                    </View>

                </View>
            </View >
        </Modal>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '60%'
    },
    button: {
        width: '40%'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        marginRight: 10
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
});

export default GoalInput;