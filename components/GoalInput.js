import React,{useState} from 'react'; 

import { TextInput, View, Button, StyleSheet } from 'react-native'

const GoalInput = props =>{ 
    const [enteredGoal, setEnterGoal] = useState(''); 
    const goalInputHandler = (enteredText) => {
        setEnterGoal(enteredText)
      };
    return( 
     <View style={styles.inputContainer}>
        <TextInput placeholder="add course" style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal} />
        <Button title='Add'
          onPress={props.onAddGoal.bind(this,enteredGoal)} />

      </View>


    )
}  

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    
      },
      input: {
        width: '80%',
        borderWidth: 1,
        padding: 4
      }
})

export default GoalInput;