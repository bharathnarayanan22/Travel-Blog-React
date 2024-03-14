
import { useState,useEffect } from "react";
import Style from "./Create_Blog.module.css"


const Create_Blogs = () => {

    let [title,SetTitle] = useState("");
    let [subtitle,SetSubtitle] = useState("");
    let [content,SetContent] = useState("");
    let [writer,SetWriter] = useState("");
    let [image,SetImage] = useState("");
    let [token,SetToken] = useState('');
    let [map,SetMap] = useState("");

    useEffect(()=>{
       SetToken(localStorage.getItem("token"));
       
    },[]);

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
        fetch("https://travel-blog-api-s.onrender.com/add-blog",{
            method:"POST",
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
            <form style={{width:"70%",padding:"35px",margin:"auto",backgroundColor:"rgba(0,0,0,0.5)",borderRadius:"8px"}} onSubmit={AddBlog}>
            <h1 style={{fontSize:"30px",fontWeight:"600",color:"white"}}>Create a memory</h1>
            <input placeholder='Blog Title' type='text' onChange={(event)=>{
                SetTitle(event.target.value)
            }}/><br/><br/>
            <input placeholder='Blog Subtitle' type='text' color="white"  onChange={(event)=>{
                SetSubtitle(event.target.value)
            }}/><br/><br/>
            <input placeholder='Blog Writer' type='text' color="white"  onChange={(event)=>{
                SetWriter(event.target.value)
            }}/><br/><br/>
            <textarea placeholder='Blog Content Here' style={{ height: "200px"}} onChange={(event) => {
                SetContent(event.target.value)
            }} /><br/><br/>
            <input type='text' margin="20px auto" variant="flushed" color="white" placeholder='Image URL' onChange={(event)=>{
                SetImage(event.target.value)
            }}/><br/><br/>
            <input type='text' margin="20px auto" variant="flushed" color="white" placeholder='Map-Location URL' onChange={(event)=>{
                SetMap(event.target.value)
            }}/><br/><br/>
            <button type='submit' className={Style.triangularButton}> 
                        <span>Publish</span>
                        <span>Publish</span>
                    </button>
            </form>
            <div className={Style.animages}>
            <h2 className={Style.login_quote}>On earth there is no heaven, but there are pieces of it...</h2>
            </div>
        </div>
        </>
    )
}

export default Create_Blogs
