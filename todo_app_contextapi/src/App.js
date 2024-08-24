import './App.css';
import TodoWrapper from './Components/TodoWrapper';
import { useId } from 'react';

const INITIAL_STATE = [ //Proğramın başlandıcında atadığımız varsayılan değer.
  { id: useId(), desc: "Toplantı notlarını unutma", completed: false, isEditing: false },
  { id: 2, desc: "Müşterileri aramayı unutma", completed: false, isEditing: false },
  { id: 3, desc: "Spor salonundan randevu iptali", completed: true, isEditing: false },
  { id: 4, desc: "Proje yönetimi görüşmesi", completed: false, isEditing: false },
  { id: 5, desc: "Javascript konferansını unutma", completed: false, isEditing: false }
];

function App() {
  return (
    <>
      <TodoWrapper tasks={INITIAL_STATE} />
    </>
  );
}

export default App;
