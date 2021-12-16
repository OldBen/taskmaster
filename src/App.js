import './App.css';
import TaskLoader from './TaskLoader';
import TaskView from './TaskView';

function App() {

  let loader = new TaskLoader();

  return (
    <div>
    <TaskView loader={loader}></TaskView>
    </div>
  );
}

export default App;
