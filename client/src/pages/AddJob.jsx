import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import { JobCategories, JobLocations } from '../assets/assets';

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
       <form className='container p-4 flex flex-col w-full items-start gap-3'>
           <div className='mb-2 '>
            <p>Job Title</p>
            <input type="text" placeholder='type here' 
            onChange={e=>setTitle(e.target.value)} value={title}
            className='w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded'
            />
           </div>

           <div className='w-full max-w-lg'>
            <p className='my-2'>Job description</p>
            <div ref={editorRef} >


            </div>

            </div>

            <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
               <div>
               <p className='mb-2'>Job Category</p>
                <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setCategory(e.target.value)}>
                    {
                        JobCategories.map((category,index)=>(
                            <option key={index} value={category}>{category}</option>
                        
                    ))}
                </select>
               </div>

               
               <div>
               <p className='mb-2'>Job Location</p>
                <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setLocation(e.target.value)}>
                    {
                        JobLocations.map((location,index)=>(
                            <option key={index} value={location}>{location}</option>
                        
                    ))}
                </select>
               </div>
               <div>
               <p className='mb-2'>Job Level</p>
                <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setLevel(e.target.value)}>
                    <option value="Beginner Level">Beginner Level</option>
                    <option value="Intermidiate Level">Intermidiate Level</option>
                    <option value="Senior Level">Senior Level</option>
                </select>
               </div>
            </div>
            <div>
                 <p>Job Salary</p>
                 <input className='w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]' onChange={e=> setSalary(e.target.value)} type="number" placeholder='2500' />
            </div>

            <button className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"'>Add</button>
        
       </form>
    );
};

export default AddJob;