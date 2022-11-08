import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div className="App bg-base-200">
      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
  );
}

export default App;
