import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
const [courseGoals, setCourseGoals] = useState([]);
const [isAddMode, setIsAddMode] = useState(false);

const handleAddGoal = goalTitle => {
  setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goalTitle }]);
  setIsAddMode(false);
};

const handleRemoveGoal = goalId => {
  setCourseGoals(currentGoals => {
    return currentGoals.filter((goal) => goal.id !== goalId);
  });
}

const handleCancelAddGoal = () => {
  setIsAddMode(false);
};

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={handleAddGoal} onCancel={handleCancelAddGoal} />
      <FlatList
        keyExtractor={(item, index) => item.id} 
        data={courseGoals} 
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={handleRemoveGoal} title={itemData.item.value} /> } 
      />
    </View>
  );
}

const styles = StyleSheet.create({
 screen: {
   padding: 50
 }
});
