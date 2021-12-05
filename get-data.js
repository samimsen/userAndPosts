import axios from 'axios'
import isNumber from 'is-number'

const getData = async(id) => {
    if(isNumber(id)){
        const {data : userFromEndpoint} = await axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        const {data : postsFromEndpoint} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)

        return {user : userFromEndpoint, posts : postsFromEndpoint}
    }
    else{
        console.log("parameter must be number type only");
    }
}

export default getData;