import React, { useState, useEffect } from 'react';
import './styles.css';

function Sidemenu() {
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    const getColumns = async () => {
      const res = await fetch('https://plotter-task.herokuapp.com/columns');
      const data = await res.json();
      setColumns(data);
    };
    getColumns();
  }, [columns]);
  return (
    <div className="sidemenu">
      <aside>
        <h2>Columns</h2>
        <ul>
          {columns.map((item, index) => (
            <li key={index} draggable="true">
              {item.name}
              <span className="type">{item.function.toUpperCase()}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export default Sidemenu;
