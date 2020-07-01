import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Modal } from 'react-native';
// import TaskAsIcon, { TaskAsIconView } from './components/TaskAsIcon';
// import TaskGrid from './components/TaskGrid';

import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()
const dummyTasks = [  
        // {
        //     id : 1,
        //     taskTitle : 'Wanted',
        //     taskDetail : '- Do house chores, do dishes\n- Do house chores, do dishes',
        //     isNeeded : false,
        //     isWanted : true
        // },
        // {
        //     id : 2,
        //     taskTitle : 'Needed',
        //     taskDetail : '- Do house chores, do dishes',
        //     isNeeded : true,
        //     isWanted : false
        // },
        // {
        //     id : 3,
        //     taskTitle : 'Needed-Wanted',
        //     taskDetail : '- Do house chores, do dishes',
        //     isNeeded : true,
        //     isWanted : true
        // },
        // {
        //     id : 4,
        //     taskTitle : 'Needed-Wanted1',
        //     taskDetail : '- Do house chores, do dishes',
        //     isNeeded : true,
        //     isWanted : true
        // },
        // {
        //     id : 5,
        //     taskTitle : 'Needed-Wanted2',
        //     taskDetail : '- Do house chores, do dishes',
        //     isNeeded : true,
        //     isWanted : true
        // },
        // {
        //     id : 6,
        //     taskTitle : 'Needed-Wanted3',
        //     taskDetail : '- Do house chores, do dishes',
        //     isNeeded : true,
        //     isWanted : true
        // },
        // {
        //     id : 7,
        //     taskTitle : 'Needed-Wanted4',
        //     taskDetail : '- Do house chores, do dishes',
        //     isNeeded : true,
        //     isWanted : true
        // },
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
    // console.log(route)
    // returnData = (data) =>{
    //   setTaskTitle(data.title)
    //   setTaskDetail(data.detail)
    // }
    
    // route.params.returnData2({
    //   taskId : task.id,
    //   taskTitle : taskTitle,
    //   taskDetail : taskDetail
    // })

    
    return (
      <TouchableOpacity style = {{alignSelf : 'stretch', borderWidth : 1, backgroundColor: 'red', minWidth : 80, minHeight : 80, maxHeight : 120, maxWidth : 120, margin : 10}}
        onPress = {() => navigation.navigate('Task', {
          taskParam : {
            taskTitle : taskTitle,
            taskDetail : taskDetail
          },
          // returnedData : this.returnData.bind(this)
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
  // console.log('here1')
  // console.log(task)
  // console.log(route.params)
  // route.params.returnedData({title : taskTitle, detail : taskDetail, isNeeded : task.isNeeded, isWanted : task.isWanted})
  
  const handleEditing = () => {
    route.params.dosthe({title : taskTitle, detail : taskDetail, isNeeded : task.isNeeded, isWanted : task.isWanted, id : task.id})
  }
  const onHandleEditing = (text) =>{
    setTaskTitle(text)
    handleEditing()
  }
  return (
    <View style = {{borderRadius : 10, backgroundColor : 'white', flex : 1, margin : 10}}>
      <TextInput
        maxLength = {36}
        defaultValue = {taskTitle}
        // onChangeText = {text => setTaskTitle(text)}
        onEndEditing = {(e) => onHandleEditing(e.nativeEvent.text)}
        style = {{padding : 5}}/>
      <View style = {{borderWidth : 0.5}}/>
      <TextInput
        number = {255}
        value = {taskDetail}
        onChangeText = {text => setTaskDetail(text)}
        // onBlur = {text => setTaskDetail(text)}
        style = {{paddingHorizontal : 10, paddingVertical: 5}}/>
    </View>
  )
}

function ListTaskAsIcon ({route , navigation}) {
  
  const tasks = route.params.taskParam
  const [taskData, setTaskData] = useState(tasks)
  const [selectedItem, setSelectedItem] = useState(0)
  // console.log(route.params)
  // console.log('here')
  // console.log(route.params)
  // route.params.returnedData1(taskData)
  // // route.params.returnData3(taskData)
  // route.params.returnData2 = dosth = (data) => {
  //     // console.log('done it')
  //     // console.log(data)
  //     onEditingItem(data)
  // }
  // onEditingItem = (data) => {
  //   // console.log('made it here')
  //   const newData = taskData.map(item =>
  //     {
  //       if(item.id == data.taskId){
  //         // console.log('found it')
  //         item.taskTitle = data.taskTitle
  //         item.taskDetail = data.taskDetail
  //         return item
  //       }
  //       return item
  //     }
  //   )
  //   // console.log('finish')
  // }
  // returnData = (data) {
    
  // }
  // route.params.onGoBack = {
  //   test : 'test'
  // }
  return (
    <View style = {{flex: 1, backgroundColor : 'blue',}}>
      <FlatList style = {{margin : 5, alignSelf : 'center'}}
        data = {taskData}
        renderItem = {({item}) => <TouchableOpacity onPress={() => setSelectedItem(item.id)}><TaskAsIcon task = {item}/></TouchableOpacity>}
        numColumns = {3}
        keyExtractor = {(item) => item.id.toString()}/>
    </View>
  )
}



  
function TaskAsLine ({task}) {
  const navigation = useNavigation()
  const route = useRoute()
  const [taskTitle, setTaskTitle] = useState(0)
  const [taskDetail, setTaskDetail] = useState(0)
  useEffect(() =>{
    console.log('here')
    console.log(taskTitle)
    
    setTaskTitle(task.taskTitle)
  })
  // returnData = (data) => {
  //             setTaskTitle(data.title)
  //             setTaskDetail(data.detail)
  //           }
  // route.params.returnData3 = returnedData3 = (data) =>{
  //   onEditingItem(data)
  // }
  // console.log('here')
  // console.log(route.params)
  // dosth = (data) => {
  //   console.log('here2')
  //   route.params.original(data)
  // }
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
            // returnedData : this.returnData.bind(this),
            // dosth : this.doth.bind(this)
            dosthe : route.params.original
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
  // console.log('here11')
  // console.log(tasks)
  useEffect(() => {
    // console.log('here22')
    // setTaskData(tasks)
    // console.log(taskData)
  })
  // const [selected, setSelected] = useState(new Map());
  // returnData1 = (data) =>{
  //   // console.log('here1')
  //   // console.log(data)
  //   // onEditingItem(data)
  // }
  // route.params.returnData3 = returnedData3 = (data) =>{
  //   onEditingItem(data)
  // }
  // console.log(route.params)
  onEditingItem = (data) => {
    // console.log('made it here')
    const newData = taskData.map(item =>
      {
        if(item.id == data.taskId){
          // console.log('found it')
          item.taskTitle = data.taskTitle
          item.taskDetail = data.taskDetail
          return item
        }
        return item
      }
    )
    setTaskData(newData)
    // console.log('finish')
  }
  // route.params.returnedData = this.returnData.bind(this)
  // console.log('here')
  // console.log(route.params)
  return (
    <TouchableOpacity style = {{backgroundColor : 'red', borderWidth : 1, flex : 1, padding : 5}}
      onPress = {() => navigation.navigate('ListTaskAsIcon', {taskParam : tasks})}>
      {/* onPress = {() => navigation.navigate('ListTaskAsIcon', {taskParam : tasks, returnedData1 : this.returnData1.bind(this)})}> */}
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
  // useEffect(() => {
  //   // Update the document title using the browser API    
  //   console.log('111')
  //   console.log(nonImportantList)  });
  route.params.original = changeOriginal = (data) => {
    if(!data.isNeeded && !data.isWanted)
    {
      onEditingItem(nonImportantList, data)
    }
  }
  
  const onEditingItem = (list, data) => {
    const newData = list.map(item =>{
      if(item.id == data.id){
        item.taskTitle = data.title
        return item
      }
      return item
    })
    setNonImportantList(newData)
  }
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

      {/* <TouchableOpacity
        onPress = {() => navigation.navigate('TestList')}>
        <Text>button</Text>
      </TouchableOpacity> */}
    </View>
  )
}

function TestList() {
  const [data, setData] = useState(dummyTasks)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [textInput, setTextInput] = useState ('')
  const [editedItem, setEditedItem ] = useState(0)
  handleEditedItem = (editedItem) =>{
    console.log("begin")
    const newData = data.map ( item =>{
      console.log("id" + typeof(item.id) + "edit" + typeof(editedItem))
      if(item.id == editedItem){
        item.taskTitle = textInput
        return item
        console.log("done")
      }
      return item
    })
    setData(newData)
  }
  return (
    <View>
      <FlatList style = {{backgroundColor:'red'}}
        data = {data}
        renderItem = {({item}) => <TouchableOpacity onPress = {() => {setIsModalVisible(true); setTextInput(item.taskTitle); setEditedItem(item.id); console.log(editedItem)}}><Text>{item.taskTitle}</Text></TouchableOpacity>}
        keyExtractor = {(item) => item.id.toString()} />
      <Modal visible = {isModalVisible} onRequestClose = {() => setIsModalVisible(false)}>
        <Text>Input text: </Text>
        <View style = {{borderWidth : 1}}/>
        <TextInput defaultValue = {textInput} onChangeText = {(text) => {setTextInput(text);}} style = {{backgroundColor:'green'}}/>
        <TouchableOpacity onPress = {() => {setIsModalVisible(false); this.handleEditedItem(editedItem)}}><Text>Save</Text></TouchableOpacity>
      </Modal>
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
        <Stack.Screen name = "TestList" component = {TestList} />
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
