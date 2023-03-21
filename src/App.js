
import './App.css';
import { TaskForm } from './components/taskForm';
import { TaskList } from './components/taskList';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList/>}/>
          <Route path ='/create' element={<TaskForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
