import React from 'react';

import Card from '../card/cardComponent';

const User = ({ user }) => {
  return (
    <Card id={user.id}>
      {user ? (
        
        <div>
          <div class="card-img-top" >
          <img src={user.src} alt="logo" />
          </div>

          <div class="dados">
            
          <p> Nome: {user.nome}</p>
          <p> idade: {user.idade}</p>
          <p> temFilhos: {true == user.temFilhos ? 'Sim' : 'Nao'}</p>
         
        </div>
        </div>
      ) : (
        <p>Usuário não encontrado</p>
      )}
    </Card>
  );
};

export default User;
