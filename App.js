import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
// import TaskAsIcon, { TaskAsIconView } from './components/TaskAsIcon';
// import TaskGrid from './components/TaskGrid';

import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const dummyTasks = [  
        {
            id : 1,
            taskTitle : 'Wanted',
            taskDetail : '- Do house chores, do dishes\n- Do house chores, do dishes',
            isNeeded : false,
            isWanted : true
        },
        {
            id : 2,
            taskTitle : 'Needed',
            taskDetail : '- Do house chores, do dishes',
            isNeeded : true,
            isWanted : false
        },
        {
            id : 3,
            taskTitle : 'Needed-Wanted',
            taskDetail : '- Do house chores, do dishes',
            isNeeded : true,
            isWanted : true
        },
        {
            id : 4,
            taskTitle : 'Needed-Wanted1',
            taskDetail : '- Do house chores, do dishes',
            isNeeded : true,
            isWanted : true
        },
        {
            id : 5,
            taskTitle : 'Needed-Wanted2',
            taskDetail : '- Do house chores, do dishes',
            isNeeded : true,
            isWanted : true
        },
        {
            id : 6,
            taskTitle : 'Needed-Wanted3',
            taskDetail : '- Do house chores, do dishes',
            isNeeded : true,
            isWanted : true
        },
        {
            id : 7,
            taskTitle : 'Needed-Wanted4',
            taskDetail : '- Do house chores, do dishes',
            isNeeded : true,
            isWanted : true
        },
        {
            id : 8,
            taskTitle : 'Non',
            taskDetail : '- Do house chores, do dishes',
            isNeeded : false,
            isWanted : false
        }

    ]




  function TaskAsIcon ({task}) {
  const navigation = useNavigation()
  const route = useRoute()
  const [taskTitle, setTaskTitle] = useState(task.taskTitle)
  const [taskDetail, setTaskDetail] = useState(task.taskDetail)
  
  returnData = (data) =>{
    setTaskTitle(data.title)
    setTaskDetail(data.detail)
  }
  
  return (
    <TouchableOpacity style = {{alignSelf : 'stretch', borderWidth : 1, backgroundColor: 'red', minWidth : 80, minHeight : 80, maxHeight : 120, maxWidth : 120, margin : 10}}
      onPress = {() => navigation.navigate('Task', {
        taskParam : {
          taskTitle : taskTitle,
          taskDetail : taskDetail
        },
        returnedData : this.returnData.bind(this)
        })}>
      <Text>{taskTitle} </Text>
      <View style = {{borderWidth : 0.5}}></View>
      <Text>{taskDetail} </Text>
    </TouchableOpacity>
  )
}

function Task ({route, navigation}) {
  
  const task = route.params.taskParam
  
  const [taskTitle, setTaskTitle] = useState(task.taskTitle)
  const [taskDetail, setTaskDetail] = useState(task.taskDetail)
  
  route.params.returnedData({title : taskTitle, detail : taskDetail})
  return (
    <View style = {{borderRadius : 10, backgroundColor : 'white', flex : 1, margin : 10}}>
      <TextInput
        maxLength = {36}
        value = {taskTitle}
        onChangeText = {text => setTaskTitle(text)}
        style = {{padding : 5}}/>
      <View style = {{borderWidth : 0.5}}/>
      <TextInput
        number = {255}
        value = {taskDetail}
        onChangeText = {text => setTaskDetail(text)}
        style = {{paddingHorizontal : 10, paddingVertical: 5}}/>
    </View>
  )
}

function ListTaskAsIcon ({route , navigation}) {
  
  const tasks = route.params.taskParam
  // console.log(route.params)
  route.params.returnedData('123')
  onEditingItem = (item) => {
    
  }
  // returnData = (data) {
    
  // }
  // route.params.onGoBack = {
  //   test : 'test'
  // }
  return (
    <View style = {{flex: 1, backgroundColor : 'blue',}}>
      <FlatList style = {{margin : 5, alignSelf : 'center'}}
        data = {tasks}
        renderItem = {({item}) => <TaskAsIcon task = {item}/>}
        numColumns = {3}
        keyExtractor = {(item) => item.id.toString()}/>
    </View>
  )
}

const Stack = createStackNavigator()

  
function TaskAsLine ({task}) {
  const navigation = useNavigation();
  const [taskTitle, setTaskTitle] = useState(task.taskTitle)
  const [taskDetail, setTaskDetail] = useState(task.taskDetail)
  returnData = (data) => {
              // console.log('here')
              // console.log(data)
              setTaskTitle(data.title)
              setTaskDetail(data.detail)
            }
  return (
    <View style = {{backgroundColor : 'green', padding : 5, borderWidth : 1, borderRadius : 10}}>
      <TouchableOpacity
        onPress = {() => {
          
          navigation.navigate('Task', {taskParam : {
            taskTitle : taskTitle,
            taskDetail : taskDetail
            },
            returnedData : this.returnData.bind(this)});
        }}>
        <Text>{taskTitle}</Text>
      </TouchableOpacity>
    </View>
  )
}

// function ListTaskAsLine ({tasks}) {
//   const navigation = useNavigation()
//   const [selected, setSelected] = useState(new Map());
//   const onSelect = React.useCallback(
//     id => {
//       const newSelected = new Map(selected);
//       newSelected.set(id, !selected.get(id));

//       setSelected(newSelected);
//     },
//     [selected],
//   );
//   return (
//     <TouchableOpacity style = {{backgroundColor : 'red', borderWidth : 1, flex : 1, padding : 5}}
//       onPress = {() => navigation.navigate('ListTaskAsIcon', {tasksParam : tasks})}>
//       <FlatList
//         data = {tasks}
//         renderItem = { ({item}) => <TaskAsLine task = {item}  selected={!!selected.get(item.id)} onSelect={onSelect}/>}
//         keyExtractor = {item => item.id.toString()}
//         extraData={selected}/>
//     </TouchableOpacity>
//   )
// }

function ListTaskAsLine ({tasks}) {
  const navigation = useNavigation()
  const route = useRoute()
  const [selected, setSelected] = useState(new Map());

  returnData = (data) =>{
    console.log('here')
    console.log(data)
  }
  // route.params.returnedData = this.returnData.bind(this)
  // console.log('here')
  // console.log(route.params)
  return (
    <TouchableOpacity style = {{backgroundColor : 'red', borderWidth : 1, flex : 1, padding : 5}}
      onPress = {() => navigation.navigate('ListTaskAsIcon', {taskParam : tasks, returnedData : this.returnData.bind(this)})}>
      <FlatList
        data = {tasks}
        renderItem = { ({item}) => <TaskAsLine task = {item}/>}
        keyExtractor = {(item) => item.id.toString()}/>
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
        <Stack.Screen name = "Task" component = {Task} options = {{ title: ''}} />
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
