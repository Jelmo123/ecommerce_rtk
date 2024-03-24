// App.js
import React from 'react';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';

const App = () => {
  return (
 
      <div>
        <h1>E-Commerce Application</h1>
        <ProductList />
        <ShoppingCart />
      </div>

  );
};

export default App;