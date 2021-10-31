import { useState, useEffect } from 'react';
import Food from './components/Food';
import './App.css';
import MenuData from './data/MenuData';

const App = () => {

  const [FoodData, setFoodData] = useState([]);
  const [dataInpage, setDataInpage] = useState([])
  const [pageState, setpageState] = useState(0)

  const pagination = () => {
    const foodPerpage = 2
    const pages = Math.ceil(MenuData.length / foodPerpage)

    // for (let i = 0; i < pages; i++) {

    // }

    const paginationData = Array.from({ length: pages }, (data, index) => {
      const start = index * foodPerpage;
      const end = start + foodPerpage;
      return MenuData.slice(start, end)
    })
    return paginationData
  }

  const changePage = (index) => {
    console.log("change page index -> ", index)
    setpageState(index)
    setDataInpage(FoodData[index])
  }

  useEffect(() => {
    const paginationData = pagination();
    setFoodData(paginationData)
    setDataInpage(paginationData[0])
  }, [])

  // useEffect(() => {
  //   console.log("effect change pageState")

  // }, [pageState])



  return (
    <div className="App">
      <h1>FoodCard | Pagination</h1>
      <div className="container">
        {
          dataInpage?.map((item, index) => {
            return <Food key={index} {...item} />
          })
        }
      </div>
      <div className="pagination-container">
        {
          FoodData?.map((item, index) => {
            return <button
              key={index}
              onClick={() => changePage(index)}
              className={"pagination-btn" + (index === pageState ? " pagination-btn-active" : '')}
            >
              {index + 1}
            </button>
          })
        }
      </div>
    </div>
  );
}

export default App;
