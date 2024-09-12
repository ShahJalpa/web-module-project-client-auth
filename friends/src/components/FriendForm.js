import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const initialState = {
    name: '',
    age: '',
    email: ''
};

const FriendForm = ({setFriends}) => {
    const [formValue, setFormValue] = useState({initialState});

const handleChange = (event) => {
    setFormValue({...formValue, [event.target.name]: event.target.value })
}

const handleSubmit = (event) => {
    event.preventDefault();

    axiosWithAuth()
       .post('/api/friends', formValue)
       .then((response) => {
           setFriends(response.data);
           setFormValue(initialState);
       })
       .catch((error) => {
           console.error(error);
       })
}   

    return (
        <form onSubmit={handleSubmit}>
                <div className='name'>
                    <input
                        name='name'
                        type='text'
                        placeholder='name'
                        value={formValue.name}
                        onChange={handleChange}
                    />
                </div>
                <div className='age'>
                    <input 
                        name='age'
                        type='text'
                        placeholder='age'
                        value={formValue.age}
                        onChange={handleChange}
                    />
                </div>
                <div className='email'>
                    <input 
                        name='email'
                        type='email'
                        placeholder='email'
                        value={formValue.email}
                        onChange={handleChange}                    
                    />
                </div>
                <div className='submit'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
    )
}

export default FriendForm;