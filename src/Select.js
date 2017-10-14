
    import React from 'react';

     function Select (props) {
      return (
        <select onChange={props.selectSource}>
          {props.sources.map(s => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>
      );
    }

    export default Select;
