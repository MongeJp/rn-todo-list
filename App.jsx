import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  /**
   * Update the list of goals adding the new one goal received
   * @param {string} goalTitle
   */
  const addGoalHandler = goalTitle => {
    if (!goalTitle) return;
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goalTitle }]);
    setModalVisibility(false);
  };

  /**
   * Update the list of goals removing  goal with the id received
   * @param {string} goalId
   */
  const removeGoalHandler = goalId => {
    if (!goalId) return;
    setCourseGoals(currentGoals => currentGoals.filter(goal => goal.key != goalId));
  }

  // close the modal
  const cancelAddHandler = () => {
    setModalVisibility(false);
  }


  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setModalVisibility(true)} />
      <GoalInput onAddGoal={addGoalHandler} isVisible={modalVisibility} onCancel={cancelAddHandler} />
      <FlatList data={courseGoals} renderItem={itemData => <GoalItem title={itemData.item.value} onDelete={removeGoalHandler} id={itemData.item.key} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
