import React from 'react';
import './App.css';
import TaskList from './TaskList';

const defaultTaskList = [
  { name: 'Tache 1' },
  { name: 'Tache 2' },
  { name: 'Tache 3', done: true },
  { name: 'Tache 4', done: true },
];

const App = () => {
  const [taskList, setTaskList] = React.useState(defaultTaskList);
  const [name, setName] = React.useState('');
  const [subtitle, setSubtitle] = React.useState('');

  const deleteTask = taskName =>
    setTaskList(taskList.filter(({ name }) => (name !== taskName)));

  const toggleTask = taskName =>
    setTaskList(taskList.map(task => {
      if (task.name === taskName) {
        return { ...task, done: !task.done };
      }
      return task;
    }));

  const isNameValid = Boolean(name);
  const doTaskAlreadyExists = taskList
    .some(({ name: taskName }) => (taskName === name));

  return (
    <div className="App">
      <TaskList
        tasks={taskList}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />

      <button onClick={() => setTaskList(taskList.filter(task => !task.done))}>
        Supprimer les tâches terminées
      </button>

      <hr />

      <form onSubmit={event => {
        event.preventDefault();

        setTaskList([ ...taskList, { name, subtitle } ]);
        setName('');
        setSubtitle('');
      }}>
        <fieldset>
          <legend>Créer un nouvelle tâche</legend>
          <label htmlFor="taskTitle">Titre de la tâche :</label>{' '}
          <input
            id="taskTitle"
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <br />

          <label htmlFor="tasksubtitle">Soustitre :</label>{' '}
          <input
            id="tasksubtitle"
            type="text"
            value={subtitle}
            onChange={event => setSubtitle(event.target.value)}
          />

          <div style={{ textAlign: 'right', marginTop: '.5em' }}>
            <button
              type="submit"
              disabled={!isNameValid || doTaskAlreadyExists}
            >
              Ajouter un tâche
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
