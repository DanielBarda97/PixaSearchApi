import React,{Component} from 'react';

class AppFruitsParams extends Component{
  render(){
    // ככה אוספים פרמטר מהכתובת
    // /fruits/:idFruits
    let paramsFruit = this.props.match.params.idFruits
    return(
      <div className="container">
        <h2>The params is: {paramsFruit}</h2>
        AppFruitsParams
      </div> 
    )
}
}

export default AppFruitsParams