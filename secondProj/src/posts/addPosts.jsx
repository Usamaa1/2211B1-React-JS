import { useState, useEffect, Suspense, useContext } from 'react'
import axios from 'axios';
import LoadingPage from '../LoadingPage';
import { GlobalContext } from '../contextAPI/context';

const AddPosts = () => {

    const [allPosts, setAllPost] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const {theme} = useContext(GlobalContext);

    const getPosts = async () => {
        try {
            setLoading(true)
            const response = await axios.get('https://arsalan.fronxsolutions.com/');

            console.log(response)


            const {data} = response;
            const {products} = data;
            console.log(products)

            setAllPost(products);
            setLoading(false)
            console.log(allPosts)
            
            console.log(response);

        } catch (error) {
            console.error(error);
        }
        console.log("getPost function run")
    }

    const deletepost = async (id) => {

        const delResponse = await axios.delete(`https://arsalan.fronxsolutions.com/?id=${id}`)
        console.log(delResponse);
        getPosts();
    }
    useEffect(()=>{
        getPosts();

       return ()=>{
            console.log("Remove from component")
        }

       
    },[])



    return <>



        <h1>AddPosts</h1>

        {/* <button onClick={getPosts}>Click Me</button> */}

        <div className="container">
            {isLoading ? (<h2>Loading.....</h2>): (<h2></h2>)}
            <h3>The Current Theme is: {theme}</h3>

            {allPosts.map((singlePost) => (
                
                
                <div className="card" key={singlePost.id}>
                    <h5 className="card-header">{singlePost.name}</h5>
                    <div className="card-body">
                        <h5 className="card-title">{singlePost.price}</h5>
                        <p className="card-text">{singlePost.description}</p>

                    </div>
                    <button onClick={()=>deletepost(singlePost.id)} 
                    //className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                    className='btn btn-danger'
                    >Delete</button>
                    <button></button>
                    <hr />
                </div>
           
        ))}

        </div>
  

    </>

}


export default AddPosts