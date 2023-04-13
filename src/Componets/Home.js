import React, { useEffect, useState } from 'react'

function Home() {
  const [dog, setDog] = useState({})
  console.log(dog.status);

    const fetchDogs = ()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setDog(data)
    
      }).catch( (err)=>{
        console.log(err)
      })
    } 

     useEffect(() => {
        fetchDogs();  
    }, [])

    const handleClick = () =>{
        fetchDogs();
    }

  

    // if(dog.status === "success"){
    //     console.log('him')
    //     }
    
  return (
    <div className='mt-4 container'>
    <h1><b> Helping You Find Your Furever Friend</b></h1>
    <div className='container' style={{width: '30rem', height:'20rem'}}>
       {
        dog.status=== 'success' ? (<div className="card  justify-content-between" style={{width:'25rem', height:'10rem'}}  >
        <img src={dog.message} className="card-img-top" alt=''/>
        <div className="card-body">
       <button className='btn btn-primary' onClick={handleClick}>Next</button>
        </div>
          </div>): (<div className="card  justify-content-between" style={{width:'25rem', height:'10rem'}}  >
            <h2>Sorry! Could Not Load The Image</h2>
         </div>)
       }
    
    </div>
    
    </div>
  )
}

export default Home