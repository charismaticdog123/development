import React from 'react';

import {
  List,
  ListItemText,
  ListItemButton
} from '@mui/material';

export default function MyList(props) {
  const createEntry = (cart) => {
    return (
      <ListItemButton onClick={() => props.remove(cart.key)}>
        <ListItemText>{cart.text}</ListItemText>
      </ListItemButton>
    );
  };
  const mData = props.cart;
  const listM = mData.map(createEntry);
  return <List>{listM}</List>;
}
