import React, { memo }  from  'react';
import useFetch from '../../effects/use-fetch.effect';
import User from '../user/userComponent';
import './usersGallery.css';

function UsersGallery(){

  const users = useFetch(
      `http://localhost:3000/clientes`
  );

  const renderUsers = (user) => {
    return(<User user={user} key={user.id} />)
  }

  return(
      <div className='container'>
        {Array.isArray(users) && users.map(renderUsers)}
      </div>
    )
}

export default memo(UsersGallery);