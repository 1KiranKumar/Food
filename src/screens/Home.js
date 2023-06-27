import React, { useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

export default function  Home() {

  const [foodCat,setFoodCat]=useState([]);
  const [foodItem,setFoodItem]=useState([]);
  const [search,setSearch]=useState("");

  const loadData=async()=>{
    let response=await fetch("http://localhost:5000/api/foodData",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      }
    });
    response=await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  }

  useEffect(()=>{
    loadData()
  },[]);

  const change=(da)=>{
    setSearch(da);
  }


  return (
    <div>
        <div><Navbar/></div>
        <div><Carousel handleClick={change}/></div>
        <div className='container'>
          {
            foodCat !==[] ? foodCat.map((data)=>{
                return ( <div className='row mb-3'>
                  <div key={data._id} className='fs-3 m-3'>{data.CategoryName}</div>
                  {foodItem!==[]
                  ?
                  foodItem.filter((item)=>(item.CategoryName === data.CategoryName)&& (item.name.toLowerCase().includes(search.toLowerCase()) )) 
                  .map(filterItems=>{
                    return(
                      <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                        <Card foodItem={filterItems} options={filterItems.options[0]} ></Card>
                      </div> 
                    )
                  }                  
                  ):<div> No such data found </div>}
                  </div>

                  )
            }):""
          }
          </div>
        <div><Footer/></div>
    </div>  
  )
}
