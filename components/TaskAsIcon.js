import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';


const styles = StyleSheet.create({
    pageLayout : {
        flex: 1,
        backgroundColor : '#32a852',
        alignSelf : 'stretch',
        margin : 5,
    },

    containers : {
        flex: 1,
        backgroundColor: '#4287f5',
        flexDirection : 'column',
        justifyContent : 'center',
        marginHorizontal : 20,
        marginTop : 50,
        marginBottom : 25,
        alignSelf : 'stretch',
        borderRadius : 20,
        
    },
    taskAsIcon : {
        flex: 1,
        backgroundColor: 'blue',
        flexDirection : 'column',
        // justifyContent : 'center',
        margin : 5,
        height : 100,
        width : 200,
        // alignSelf : 'stretch',
        borderRadius : 20,
    },

    text : {
        // flex : 1,
        // justifyContent : 'flex-start',
        height : 30,
        
        padding : 5,
        margin : 5,
        // overflow : "hidden",
        // borderRadius: 6,
    },

    textInput : {
        flex : 1,
        margin : 5,
        padding : 5,
        textAlignVertical : 'top',
        // backgroundColor : 'red'
        // justifyContent : 'flex-start',
        // alignContent : 'flex-start'
        // height : 200,
    },

    button : {
        margin : 100,
        borderRadius : 50,
        width : 100,
        height : 100,
        backgroundColor : '#fff',
    },
    line : {
        borderBottomWidth : 1,
        height : 0.5,
    },
    image : {
        height : 50,
        width : 50,
        margin : 10,
        alignSelf : 'center'
    }
});

export function TaskAsIconView ({taskParam}) {
    
    return (
        <View style = {styles.pageLayout}>
                <EditTask taskObj = {taskParam}/>
            <View>
                <TouchableOpacity>
                    <Image style = {styles.image}
                    source = {require('.././assets/addButton.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export function TaskAsIcon ({taskObj}) {
    return (
        
            <View style = {styles.taskAsIcon}>
                <Text style = {styles.text}>{taskObj.taskTitle}</Text>
                <View style = {styles.line}></View>
                <Text style = {styles.text}>{taskObj.taskDetail}</Text>
            </View>
    )
}

export default function EditTask ({taskObj}) {
    
    const [taskText, setTaskText] = useState(taskObj.taskDetail);
    
    return (
        <View style = {styles.pageLayout}>
            <View style = {styles.containers}>
                <Text style = {styles.text}>{taskObj.taskTitle}</Text>
                <View style = {styles.line}></View>
                <TextInput style = {styles.textInput}
                    multiline = {true}
                    value = {taskText}
                    onChangeText = {text => setTaskText(text)}>
                </TextInput>
            </View>
            
        </View>
    )

    
}

