import React, { useEffect, useState } from 'react';

function AppShop(props){
  let [ar,setAr] = useState([]);


  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    let url = "http://fs1.co.il/bus/shop.php";
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data);
    setAr(data);
  }
 
  return(
    <div className="container">
      <h2>List of products:</h2>
      <div className="row">
        {ar.map(item => {
          return(
            <div key={item.id} className="col-lg-6 border p-2">
              <div className="badge bg-info float-end">{item.cat}</div>
              <h2>{item.name}</h2>
              <div>Price: {item.price} NIS</div>
            </div>
          )
        })}
      </div>
    </div> 
  )
}

export default AppShop