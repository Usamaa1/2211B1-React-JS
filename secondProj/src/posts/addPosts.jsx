import { useState, useEffect } from 'react'
import axios from 'axios';

const AddPosts = () => {

    const [allPosts, setAllPost] = useState([]);

    const getPosts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/post');

            const {data} = response;
            console.log(data)

            setAllPost(data);

            // console.log(allPosts)
            
            console.log(response);

        } catch (error) {
            console.error(error);
        }
        console.log("getPost function run")
    }
    useEffect(()=>{
        getPosts();
        return ()=>{
            console.log("Removed useEffect")
        }
    },[])



    return <>
        <h1>AddPosts</h1>

        {/* <button onClick={getPosts}>Click Me</button> */}

        <div className="container">

            {allPosts.map((singlePost) => (
                <div className="card" key={singlePost._id}>
                    <h5 className="card-header">{singlePost.likes}</h5>
                    <div className="card-body">
                        <h5 className="card-title">{singlePost.title}</h5>
                        <p className="card-text">{singlePost.description}</p>

                    </div>
                </div>
            ))}

        </div>

    </>

}


export default AddPosts