import React from 'react';

const doneStyle = {
  textDecoration: 'line-through',
  opacity: .5,
};

const TaskList = ({ tasks, toggleTask, deleteTask }) => (
  <ul>
    {tasks.map(({ name, subtitle, done = false }, index) => (
      <li key={index} style={{ display: 'flex', marginTop: '.5em' }}>
        <input
          type="checkbox"
          checked={done}
          onChange={() => toggleTask(name)}
          style={{ marginRight: '.5em' }}
        />

        <div style={done ? doneStyle : {}}>
          {name}
          <div style={{ fontSize: '.65em' }}>{subtitle}</div>
        </div>

        <button
          style={{ marginLeft: 'auto' }}
          onClick={() => deleteTask(name)}
        >Supprimer</button>
      </li>
    ))}
  </ul>
);

export default TaskList;
