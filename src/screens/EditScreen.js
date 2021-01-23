import React, {useContext} from 'react'
import {StyleSheet} from 'react-native';
import {Context } from '../context/BlogContext'
import BlogPostForm  from '../components/BlogPostForm'

const CreateScreen = ({navigation}) => {
    const {state, editBlogPost} = useContext(Context);
    const {addBlogPost } = useContext(Context);
    let blogPost={};
    for(let i = 0; i < state.length; i++){
        if(state[i]["id"]==navigation.getParam('id'))blogPost = state[i]
    }
    return <BlogPostForm 
    initialvalues={{title: blogPost.title, content: blogPost.content}}
    onSubmit={(title, content)=>{
        editBlogPost(navigation.getParam('id'), title, content, ()=> navigation.pop())
    }}
    
    />
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