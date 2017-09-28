import React from 'react';

export default function Dropdown (props) {
  return (
    <select onChange={props.selectSource}>
      {props.sources.map(s => (
        <option key={s.id} value={s.id}>{s.name}</option>
      ))}
    </select>
  );
}