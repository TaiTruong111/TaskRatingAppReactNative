import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
// import TaskAsIcon, { TaskAsIconView } from './components/TaskAsIcon';
// import TaskGrid from './components/TaskGrid';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const dummyTasks = [
        {
            taskTitle : 'Wanted',
            taskDetail : '- Do house chores, do dishes\n- Do house chores, do dishes',
            isNeeded : false,
            isWanted : true
        },
        {
            taskTitle : 'Needed',
            taskDetail : '- Do house chores, do dishes',
            isNeeded : true,
            isWanted : false
        },
        {
            taskTitle : 'Needed-Wanted',
            taskDetail : '- Do house chores, do dishes',
            isNeeded : true,
            isWanted : true
        },
        {
            taskTitle : 'Needed-Wanted1',
            taskDetail : '- Do house chores, do dishes',
            isNeeded : true,
            isWanted : true
        },
        {
            taskTitle : 'Needed-Wanted2',
            taskDetail : '- Do house chores, do dishes',
            isNeeded : true,
            isWanted : true
        },
        {
            taskTitle : 'Needed-Wanted3',
            taskDetail : '- Do house chores, do dishes',
            isNeeded : true,
            isWanted : true
        },
        {
            taskTitle : 'Needed-Wanted4',
            taskDetail : '- Do house chores, do dishes',
            isNeeded : true,
            isWanted : true
        },
        {
            taskTitle : 'Non',
            taskDetail : '- Do house chores, do dishes',
            isNeeded : false,
            isWanted : false
        }

    ]

function TaskAsIcon ({task}) {
  console.log(task)
  return (
    <View style = {{alignSelf : 'stretch', borderWidth : 1, backgroundColor: 'red', minWidth : 80, minHeight : 80, maxHeight : 120, maxWidth : 120, margin : 10}}>
      <Text>{task.taskTitle} </Text>
    </View>
  )
}

function ListTaskAsIcon ({route , navigation}) {
  // console.log(route.params.tasksParam)
  const tasks = route.params.tasksParam
  return (
    <View style = {{flex: 1, backgroundColor : 'blue',}}>
      <FlatList style = {{margin : 5, alignSelf : 'center'}}
        data = {tasks}
        renderItem = {({item}) => <TaskAsIcon task = {item}/>}
        numColumns = {3}/>
    </View>
  )
}

const Stack = createStackNavigator()

function TaskAsLine ({task}) {
  const navigation = useNavigation()
  return (
    <View style = {{backgroundColor : 'green', padding : 5, borderWidth : 1, borderRadius : 10}}>
      <TouchableOpacity>
        <Text>{task.taskTitle}</Text>
      </TouchableOpacity>
    </View>
  )
}

function ListTaskAsLine ({tasks}) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style = {{backgroundColor : 'red', borderWidth : 1, flex : 1, padding : 5}}
      onPress = {() => navigation.navigate('ListTaskAsIcon', {tasksParam : tasks})}>
      <FlatList
        data = {tasks}
        renderItem = { ({item}) => <TaskAsLine task = {item}/>}/>
    </TouchableOpacity>
  )
}

function Overview ({route, navigation}) {

  const tasks = route.params.tasks
  const wantedList = tasks.filter(e => !e.isNeeded && e.isWanted)
  const neededList = tasks.filter(e => e.isNeeded && !e.isWanted)
  const importantList = tasks.filter(e => e.isNeeded && e.isWanted)
  const nonImportantList = tasks.filter(e => !e.isNeeded && !e.isWanted)

  return (
    <View style = {{ flex : 1, flexDirection : 'column', backgroundColor : 'blue', margin : 10, padding : 5}}>
      <View style = {{flex : 1, flexDirection : 'row'}}>
        <ListTaskAsLine tasks = {wantedList} />
        <ListTaskAsLine tasks = {importantList}/>
      </View>
      <View style = {{flex: 1, flexDirection : 'row'}}>
        <ListTaskAsLine tasks = {nonImportantList}/>
        <ListTaskAsLine tasks = {neededList}/>
      </View>
    </View>
  )
}

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Overview" component = {Overview} initialParams = {{ tasks : dummyTasks}}/>
        <Stack.Screen name = "ListTaskAsIcon" component = {ListTaskAsIcon}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
// function TaskAsLine () {
//   return (
//     <View style = {styles.taskAsLine}>
      
//     </View>
//   )
// }
// function Overview (){
//   return (
//     <View>  
//     </View>
//   )
// }


// export default function App() {
//   // console.log('here')
//   // console.log(dummyTasks.filter(e => e.isWanted == false));

//   // const [tasks, setTasks] = useState({
//   //   { id: 1, title: "Task title 1"},

//   // });
//   return (
//     <View style={styles.container}>
//       {/* <Text>Open up App.js to start working on your app!</Text> */}
//       {/* <TaskAsIconView taskParam = {dummyTask}/> */}
//       {/* <TaskGrid/> */}
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eb4034',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  taskAsLine : {
    backgroundColor : 'yellow'
  }
});
