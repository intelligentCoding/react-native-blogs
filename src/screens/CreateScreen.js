import React, {useContext, useState} from 'react'
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';
import {Context } from '../context/BlogContext'

const CreateScreen = ({navigation}) => {
    const {state} = useContext(Context);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {addBlogPost } = useContext(Context);
    return (
         <View style={styles.container}>
            <Text style={styles.text}>Enter Title</Text>
            <TextInput style={styles.input} value ={title} onChangeText={(text)=>setTitle(text)}/>
            <Text style={styles.text}>Enter Content</Text>
            <TextInput style={styles.input} value ={content} onChangeText={(text)=>setContent(text)}/>
            <View style={styles.button}>
            <Button  
            onPress={()=> {
                addBlogPost(title,content, ()=> {
                    navigation.navigate('Index')
                })
            }}
            title="Add Blog"/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 10,
        padding: 5
    },
    text:{
        fontSize: 20, 
        marginBottom: 10,
    },
    container:{
        marginTop:25,
        padding: 10
    },
    button:{
        margin: 30
    }
})

export default CreateScreen;