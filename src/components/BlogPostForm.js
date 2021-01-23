import React, { useState} from 'react'
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';

const BlogPostForm = ({onSubmit, initialvalues}) => {
    const [title, setTitle] = useState(initialvalues.title);
    const [content, setContent] = useState(initialvalues.content);
    return (
         <View style={styles.container}>
            <Text style={styles.text}>Edit Title</Text>
            <TextInput style={styles.input} value ={title} onChangeText={(text)=>setTitle(text)}/>
            <Text style={styles.text}>Edit Content</Text>
            <TextInput style={styles.input} value ={content} onChangeText={(text)=>setContent(text)}/>
            <View style={styles.button}>
            <Button  
            onPress={()=> {
                onSubmit(title,content)
            }}
            title="Save Blog"/>
            </View>
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialvalues: {
        title: '',
        content: ''
    }
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

export default BlogPostForm;