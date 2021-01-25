import { Caption1, GridList, Subtitle1 } from '@class101/ui';
import React from 'react';
import MenuList from 'components/starbucks/MenuList';
import CartList from './starbucks/CartList';

const templateStyle = {
  display: 'flex',
};

function App() {
  return (
    <div style={templateStyle}>
      <MenuList />
      <CartList />
    </div>
  );
}

export default App;
