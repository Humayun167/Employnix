import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';

const AddJob = () => {

    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('Bangalore')
    const [category, setCategory] = useState('Progrumming')
    const[level, setLevel] = useState('Beginner Level')
    const [salary, setSalary] = useState(0)
    const [description, setDescription] = useState('')

    const editorRef = useRef(null)
    const quillRef = useRef(null)

    useEffect(()=>{ 
        // initialize quill only once
        if(editorRef.current && editorRef.current){
            quillRef.current = new Quill(editorRef.current, {
                theme: 'snow'
            });
        }
    }, [])


    return (
       <form>
           <div>
            <p>Job Title</p>
            <input type="text" placeholder='type here' 
            onChange={e=>setTitle(e.target.value)} value={title} />
           </div>

           <div>
            <p>Job description</p>
            <div ref={editorRef} id="editor" style={{height:'300px'}}></div>

            </div>
        
       </form>
    );
};

export default AddJob;