import { Post, User } from "./models";

export const connectToDB = async () => {
    
    const connection = {}
    try {
        if(connection.isConnected){
            console.log('using the same connection')
            return ;
        }
        const db = await  mongoose.connect(process.env.DB_NAME);
        connection.isConnected = db.connections[0].readyState
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const getPosts = async () =>{
    try {
        connectToDB()
        const posts = await Post.find()
        return posts
    } catch (error) {
        console.log(error)
        throw new Error('error in fetch posts')
    }
}
export const getPost = async (slug) =>{
    try {
        connectToDB()
        const posts = await Post.findOne({slug})
        return posts
    } catch (error) {
        console.log(error)
        throw new Error('error in fetch post')
    }
}
export const getUser = async (id) =>{
    try {
        connectToDB()
        const user = await User.findById(id)
        return user
    } catch (error) {
        console.log(error)
        throw new Error('error in fetch user')
    }
}
export const getUsers = async () =>{
    try {
        connectToDB()
        const users = await User.find()
        return users
    } catch (error) {
        console.log(error)
        throw new Error('error in fetch users')
    }
}