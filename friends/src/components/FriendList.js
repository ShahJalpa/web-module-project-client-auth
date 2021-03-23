import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import FriendForm from './FriendForm';

const FriendList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(()=> {
        axiosWithAuth()
          .get('/api/friends')
          .then((response) => {
              setFriends(response.data);
          })
          .catch((error) => {
              console.error(error)
          })
    }, []);

    return(
        <div className='friends'>
            <FriendForm setFriends={setFriends} />
            <div>
                {
                    friends.map(friend => (
                        <div key={friend.id}>
                            <p>{friend.name}</p>
                            <p>{friend.age}</p>
                            <p>{friend.email}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FriendList;