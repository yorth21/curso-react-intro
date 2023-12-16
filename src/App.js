import { AppUI } from './AppUI';
import { TodoProvider } from './context/todoContext';

function App() {
  

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
