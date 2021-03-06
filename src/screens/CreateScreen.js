import React, {useContext} from 'react'
import { StyleSheet} from 'react-native';
import {Context } from '../context/BlogContext'
import BlogPostForm  from '../components/BlogPostForm'
const CreateScreen = ({navigation}) => {
    const {state} = useContext(Context);

    const {addBlogPost } = useContext(Context);
    return <BlogPostForm onSubmit ={(title, content)=>{
        addBlogPost(title,content, ()=> navigation.navigate('Index'))
    }}/>
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