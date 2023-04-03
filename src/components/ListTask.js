import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';

function ListTask() {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch({
      type: 'SET_FILTER',
      payload: event.target.value,
    });
  };

  const filteredTasks =
    filter === 'done'
      ? tasks.filter((task) => task.isDone)
      : filter === 'not'
      ? tasks.filter((task) => !task.isDone)
      : tasks;

  return (
    <>
      <div>
        <input
          type="radio"
          name="filter"
          value="all"
          checked={filter === 'all'}
          onChange={handleFilter}
        />
        <label>All</label>
        <input
          type="radio"
          name="filter"
          value="done"
          checked={filter === 'done'}
          onChange={handleFilter}
        />
        <label>Done</label>
        <input
          type="radio"
          name="filter"
          value="not"
          checked={filter === 'not'}
          onChange={handleFilter}
        />
        <label>Not Done</label>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </ul>
    </>
);
}

export default ListTask;