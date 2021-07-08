import React,{Component} from 'react';
import CarBtn from './carBtn';

class AppCar extends Component{
  cars = [
    {type: "Toyota", value:5000, color:"red"},
    {type: "Mazda", value:650, color:"blue"},
    {type: "Opel", value:10, color:"green"},
    {type: "BMW", value:1200, color:"orange"},
  ]

  state = {cars_ar:this.cars}



  render(){
    return(
      <div className="container">
        <h1>Cars list:</h1>
        <div>
          {this.state.cars_ar.map(item => {
            return(
              <CarBtn key={item.value} item={item} />
            )
          })}
        </div>
      </div> 
    )
}
}

export default AppCar