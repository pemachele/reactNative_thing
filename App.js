
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native'; 
import GoalItem from './components/GoalItem' 
import GoalInput from './components/GoalInput'

export default function App() {
 
  const [courseGoals, setCourseGoals] = useState([])
    
   
  

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoal => [
      ...courseGoals,
      { id: Math.random().toString(), value: enteredGoal }]);
  }


  return (
    <View style={styles.screen} > 
    <GoalInput onAddGoal={addGoalHandler}/>
     
    <FlatList data={courseGoals} 
      renderItem={ itemData => <GoalItem title={itemData.item.value }/> }
      />


    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,


  },
 
 

})
