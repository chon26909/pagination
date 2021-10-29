import { useState } from 'react';
import Food from './components/Food';
import './App.css';
import MenuData from './data/MenuData';

const App = () => {

  const [foodData, setFoodData] = useState(MenuData);

  return (
    <div className="App">
      <h1>FoodCard | Pagination</h1>
      {
        foodData.map((item, index) => {
          return <Food key={index} {...item} />
        })
      }
    </div>
  );
}

export default App;
