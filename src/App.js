
import './App.css';
import { TaskForm } from './components/taskForm';
import { TaskList } from './components/taskList';

function App() {
  return (
    <div className="App">
      <TaskForm/>
      <TaskList/>
    </div>
  );
}

export default App;
