import { useEffect,useState } from "react";
import Style from "./EditForm.module.css"
import { Link,useParams } from "react-router-dom";

const Edit_Blogs = (props) => {

    const [title,setTitle] = useState("");
    const [subtitle,setSubtitle] = useState("");
    const [writer,setWriter] = useState("");
    const [content,setContent] = useState("");
    const [image,setImage] = useState('');
    const [map,setMap] = useState("");
    const [oldBlog,setOldBlog] = useState({});
    const [token,setToken] = useState(localStorage.getItem("token"));
    const {_id} = useParams();
    
    const id = _id
    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await fetch(`https://travel-blog-api-s.onrender.com/get-blogdata/${_id}`,{
                    method: "GET",
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch blog data');
                }
                const blogData = await response.json();
                if (!blogData) {
                    throw new Error('Blog not found');
                }
                setTitle(blogData.title);
                setSubtitle(blogData.subtitle);
                setWriter(blogData.writer);
                setContent(blogData.content);
                setImage(blogData.image);
                setMap(blogData.map);
            } catch (error) {
                console.error('Error fetching blog data:', error);
            }
        };

        fetchBlogData();
    }, [id]);
    
    console.log(id)

    let AddBlog = (event)=>{
        event.preventDefault();
        console.log(title,subtitle,writer,content,image,map)
        let new_blog={
            title,
            subtitle,
            writer,
            content,
            image,
            map
        }
        fetch(`https://travel-blog-api-s.onrender.com/update-blog/${_id}`,{
            method:"PATCH",
            body:JSON.stringify(new_blog),
            headers:{
                "Content-type":"application/json",
                "authorization":`Bearer ${token}`
            }
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            alert(response.message);
        }).catch((error)=>{
            console.log(error);
        })
    }

    

    return(
        <>
        <div className={Style.createblogform}>
            <form style={{width:"70%",padding:"35px",margin:"auto",backgroundColor:"rgba(0,0,0,0.5)",borderRadius:"8px"}}>
            <h1 style={{fontSize:"30px",fontWeight:"600",color:"white"}}>Edit a memory</h1>
            <input placeholder='Blog Title' type='text' value={title} onChange={(event) => {
                        setTitle( event.target.value )
            }}/><br/><br/>
            <input placeholder='Blog Subtitle' type='text' color="white" value={subtitle} onChange={(event) => {
                        setSubtitle( event.target.value )
            }}/><br/><br/>
            <input placeholder='Blog Writer' type='text' color="white" value={writer} onChange={(event) => {
                        setWriter( event.target.value )
            }}/><br/><br/>
            <textarea placeholder='Blog Content Here' style={{ height: "200px"}} value={content} onChange={(event) => {
                        setContent( event.target.value )
                    
            }} /><br/><br/>
            <input type='text' margin="20px auto" variant="flushed" color="white" placeholder='Image URL' value={image} onChange={(event) => {
                        setImage( event.target.value )
            }}/><br/><br/>
            <input type='text' margin="20px auto" variant="flushed" color="white" placeholder='Map-Location URL' value={map} onChange={(event)=>{
                setMap(event.target.value)
            }}/><br/><br/> 
            <button type='submit' className={Style.triangularButton} onClick={AddBlog}> 
                        <span>Republish</span>
                        <span>Republish</span>
                    </button>
            </form>
            <div className={Style.animages}>
            <h2 className={Style.login_quote}>There is a world elsewhere...</h2>
            </div>
        </div>
        </>
    )
}

export default Edit_Blogs