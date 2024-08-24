import './App.css';
import TodoWrapper from './Components/TodoWrapper';
import { v4 as idGenerate } from 'uuid';

const INITIAL_STATE = [ //Proğramın başlandıcında atadığımız varsayılan değer.
  { id: idGenerate(), desc: "Toplantı notlarını unutma", completed: false, isEditing: false },
  { id: idGenerate(), desc: "Müşterileri aramayı unutma", completed: false, isEditing: false },
  { id: idGenerate(), desc: "Spor salonundan randevu iptali", completed: true, isEditing: false },
  { id: idGenerate(), desc: "Proje yönetimi görüşmesi", completed: false, isEditing: false },
  { id: idGenerate(), desc: "Javascript konferansını unutma", completed: false, isEditing: false }
];

function App() {

  return (
    <>
      <TodoWrapper tasks={INITIAL_STATE} />
    </>
  );
}

export default App;
