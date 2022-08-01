import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UsersGallery from './components/UsersGallery/usersGallery.component';
import Globalstyle from './estilo';



const App = props => {
  return (
    <div className='App'>
      <Header />
      <Globalstyle />
      <UsersGallery />
      <Footer />
    </div>
  );
};
export default App;
