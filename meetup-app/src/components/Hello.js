import React from 'react';

export default function Hello(props) {
  return <h1 style={{ color: 'red', fontSize: '50px'}}>Hello World, {props.name}</h1>
}

export function Ola() {
  return <h1>Ola mundo</h1>
}
