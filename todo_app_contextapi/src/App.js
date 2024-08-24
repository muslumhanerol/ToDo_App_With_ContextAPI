import './App.css';
import TodoWrapper from './Components/TodoWrapper';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const INITIAL_STATE = [ //Proğramın başlandıcında atadığımız varsayılan değer.
    { id: useId(), desc: "Toplantı notlarını unutma", completed: false, isEditing: false },
    { id: useId(), desc: "Müşterileri aramayı unutma", completed: false, isEditing: false },
    { id: useId(), desc: "Spor salonundan randevu iptali", completed: true, isEditing: false },
    { id: useId(), desc: "Proje yönetimi görüşmesi", completed: false, isEditing: false },
    { id: useId(), desc: "Javascript konferansını unutma", completed: false, isEditing: false }
  ];


  return (
    <>
      <TodoWrapper tasks={INITIAL_STATE} />
    </>
  );
}

export default App;
