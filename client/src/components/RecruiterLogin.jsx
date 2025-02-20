import React, { useState } from 'react';

const RecruiterLogin = () => {
    const [state,setState] = useState('Login')
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')

    const [image,setImage] = useState(false)

    const [isTextDataSubmited,setIsTextDataSubmited] = useState(false)
    return (
        <div>
            <h3>Login </h3>
        </div>
    );
};

export default RecruiterLogin;