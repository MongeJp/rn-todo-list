import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  /**
   * Update the list of goals adding the new one goal received
   * @param {string} goalTitle
   */
  const addGoalHandler = goalTitle => {
    if (!goalTitle) return;
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goalTitle }]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList data={courseGoals} renderItem={itemData => <GoalItem title={itemData.item.value} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
