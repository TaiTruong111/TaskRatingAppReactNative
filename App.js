import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Modal } from 'react-native';
// import TaskAsIcon, { TaskAsIconView } from './components/TaskAsIcon';
// import TaskGrid from './components/TaskGrid';

import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()
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




  

function Task ({route, navigation}) {
  
  const task = route.params.taskParam
  const [taskTitle, setTaskTitle] = useState(task.taskTitle)
  const [taskDetail, setTaskDetail] = useState(task.taskDetail)
  
  route.params.onChangeOriginal({title : taskTitle, detail : taskDetail, isNeeded : task.isNeeded, isWanted : task.isWanted, id : task.id})
  if(route.params.onEditItem){
    route.params.onEditItem({title : taskTitle, detail : taskDetail, isNeeded : task.isNeeded, isWanted : task.isWanted, id : task.id})
  }
  return (
    <View style = {{borderRadius : 10, backgroundColor : 'white', flex : 1, margin : 10}}>
      <TextInput
        maxLength = {36}
        defaultValue = {taskTitle}
        onEndEditing = {(e) => setTaskTitle(e.nativeEvent.text)}
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

function TaskAsIcon ({task}) {
    const navigation = useNavigation()
    const route = useRoute()
    const [taskTitle, setTaskTitle] = useState(task.taskTitle)
    const [taskDetail, setTaskDetail] = useState(task.taskDetail)
    useEffect(() => {
      setTaskTitle(task.taskTitle)
      setTaskDetail(task.taskDetail)
    })

    editItem = (data) => {
      setTaskTitle(data.taskTitle)
    }
    return (
      <TouchableOpacity style = {{alignSelf : 'stretch', borderWidth : 1, backgroundColor: 'red', minWidth : 80, minHeight : 80, maxHeight : 120, maxWidth : 120, margin : 10}}
        onPress = {() => navigation.navigate('Task', {
          taskParam : task,
          onChangeOriginal : route.params.onChangeOriginal,
          onEditItem : this.editItem.bind(this)
          })}>
        <Text>{taskTitle} </Text>
        <View style = {{borderWidth : 0.5}}></View>
        <Text>{taskDetail} </Text>
      </TouchableOpacity>
    )
}

function ListTaskAsIcon ({route , navigation}) {
  
  const tasks = route.params.taskParam
  const [taskData, setTaskData] = useState(tasks)

  return (
    <View style = {{flex: 1, backgroundColor : 'blue',}}>
      <FlatList style = {{margin : 5, alignSelf : 'center'}}
        data = {taskData}
        renderItem = {({item}) => <TaskAsIcon task = {item}/>}
        numColumns = {3}
        keyExtractor = {(item) => item.id.toString()}/>
    </View>
  )
}



  
function TaskAsLine ({task}) {
  const navigation = useNavigation()
  const route = useRoute()
  const [taskTitle, setTaskTitle] = useState(task.taskTitle)
  const [taskDetail, setTaskDetail] = useState(0)

  useEffect(() =>{
    setTaskTitle(task.taskTitle)
  })
  
  return (
    <View style = {{backgroundColor : 'green', padding : 5, borderWidth : 1, borderRadius : 10}}>
      <TouchableOpacity
        onPress = {() => {
          
          navigation.navigate('Task', {taskParam : {
            taskTitle : task.taskTitle,
            taskDetail : task.taskDetail,
            id : task.id,
            isNeeded : task.isNeeded,
            isWanted : task.isWanted
          },
            onChangeOriginal : route.params.onChangeOriginal
          })}}>
        <Text>{taskTitle}</Text>
      </TouchableOpacity>
    </View>
  )
}

function ListTaskAsLine ({tasks}) {
  const navigation = useNavigation()
  const route = useRoute()
  const [taskData, setTaskData] = useState(tasks)
  return (
    <TouchableOpacity style = {{backgroundColor : 'red', borderWidth : 1, flex : 1, padding : 5}}
      onPress = {() => navigation.navigate('ListTaskAsIcon', {taskParam : taskData, onChangeOriginal : route.params.onChangeOriginal})}>
      <FlatList
        data = {taskData}
        renderItem = { ({item}) => <TaskAsLine task = {item}/>}
        keyExtractor = {(item) => item.id.toString()}/>
    </TouchableOpacity>
  )
}



function Overview ({route, navigation}) {

  const tasks = route.params.tasks
  const [wantedList, setWantedList] = useState(tasks.filter(e => !e.isNeeded && e.isWanted))
  const [neededList, setNeededList] = useState(tasks.filter(e => e.isNeeded && !e.isWanted))
  const [importantList, setImportantList] = useState(tasks.filter(e => e.isNeeded && e.isWanted))
  const [nonImportantList, setNonImportantList] = useState(tasks.filter(e => !e.isNeeded && !e.isWanted))

  const HandleUpdateList = (list, fn) => {
        if (fn && list) {
            fn(list)
        }
    }

  const EditList = (list, data) => {
    const newData = list.map(item =>{
      if(item.id == data.id){
        item.taskTitle = data.title
        return item
      }
      return item
    })
    return newData
  }

  const changeOriginal = (data) => {
    let oldList = null
    let fn = null

    if(data.isNeeded) {
      if(data.isWanted) {
        oldList = importantList
        fn = setImportantList
      }
      else {
        oldList = neededList
        fn = setNeededList
      }
    }
    else if(!data.isNeeded){
      if(data.isWanted) {
        oldList = wantedList
        fn = setWantedList
      }
      else {
        oldList = nonImportantList
        fn = setNonImportantList
      }
    }
    
    let newList = EditList(oldList, data)
    HandleUpdateList(newList, fn)
  }
  
  route.params.onChangeOriginal = this.changeOriginal.bind(this)

  return (
    <View style = {{ flex : 1, flexDirection : 'column', backgroundColor : 'blue', margin : 10, padding : 5}}>
      <View style = {{flex : 1, flexDirection : 'row'}}>
        {/* <ListTaskAsLine tasks = {wantedList} />
        <ListTaskAsLine tasks = {importantList}/> */}
      </View>
      <View style = {{flex: 1, flexDirection : 'row'}}>
        <ListTaskAsLine tasks = {nonImportantList}/>
        {/* <ListTaskAsLine tasks = {neededList}/> */}
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
