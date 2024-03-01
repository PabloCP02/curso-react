// Importar css
import './App.css';
// Importar Card
import Card from "./components/Card";
// Importar ShowHide
import ShowHide from './components/ShowHide';
// Importar vehicle
import vehicles from './data/vehicles';

// Función con el nombre del componente
function App() {
  // Crear lista
  const vehicleList = vehicles.map(v => {
    return <Card title={v.name} description={v.description}/>
  })
  // Retornar la vista con las cards de los vehiculos
  return (
    <div className="App">
      <h1 className='bg-succes'>Vehiculos</h1>
      <div className="container">
        {vehicleList} 
      </div>
    </div>
  );
}
// Para poder exportar la función y otros archivos la puedan importar
export default App
