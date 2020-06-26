import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {TaskAsIcon} from '../components/TaskAsIcon.js';

const dummyTasks = [
        {
            taskTitle : 'Do house chores',
            taskDetail : '- Do house chores, do dishes\n- Do house chores, do dishes',
            isNeeded : true,
            isWanted : false
        },
        {
            taskTitle : 'Do house chores',
            taskDetail : '- Do house chores, do dishes',
            isNeeded : true,
            isWanted : false
        },
    ]

export default function TaskGrid () {
    
    return (
        <View style = {styles.container}>
            <FlatList style = {styles.list}
                data = {dummyTasks}
                renderItem = {({item}) => <TaskAsIcon taskObj = {item}/>}/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf : 'stretch'
  },
  
  taskAsLine : {
    backgroundColor : 'yellow'
  },
  list : {
      flexDirection : 'row',
      flex : 1
  }
});