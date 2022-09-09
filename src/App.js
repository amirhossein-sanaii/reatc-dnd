
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import './App.css';
import DargDrop from './Component/DragDrop';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <DargDrop />
      </div>
    </DndProvider>
  );
}

export default App;
