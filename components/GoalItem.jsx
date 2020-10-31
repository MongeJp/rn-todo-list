import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const GoalItem = props => {
    return (
        <View style={styles.listItem}><Text>{props.title}</Text></View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10

    }
});

export default GoalItem;