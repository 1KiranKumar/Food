import React, { useState } from 'react'

export default function Carousel(props) {
  const [search,setSearch] = useState('');

  const searData=(e)=>{   
    setSearch(e.target.value);
  }

  const submitHandler=()=>{
      props.handleClick(search);
  }
  return (
    <div>
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner" id='carousel'>
  <div class="carousel-caption" style={{zIndex:"10"}}>
        <div className='d-flex justify-content-center'>
          <input className='form-control me-2 bg-black text-white' type="search" aria-label="Search" placeholder='Search' value={search} onChange={searData}></input>
          <button className='btn btn-outline-success bg' type='submit' onClick={submitHandler}>Submit</button>
        </div>
      </div>
    <div class="carousel-item active">
      <img src="https://source.unsplash.com/random/100×100/?burger" class="d-block w-100" alt="..." style={{filter:"brightness(50%)"}}/>
    </div>
    <div class="carousel-item">
      <img src="https://source.unsplash.com/random/100×100/?pastry" class="d-block w-100" alt="..." style={{filter:"brightness(50%)"}}/>
    </div>
    <div class="carousel-item">
      <img src="https://source.unsplash.com/random/100×100/?barbeque" class="d-block w-100" alt="..." style={{filter:"brightness(50%)"}}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
