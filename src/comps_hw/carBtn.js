import React,{Component} from 'react';

class CarBtn extends Component{
  state = {bg:""}

  onBtnClick = () => {
    // בודק אם המאפיין בי ג'י בסטייט שווה לפרופס
    (this.state.bg != this.props.item.color) ?
    this.setState({bg:this.props.item.color}) :
    this.setState({bg:""});
    // if(this.state.bg != this.props.item.color){
    //   this.setState({bg:this.props.item.color})
    // }
    // else{
    //   this.setState({bg:""})
    // }
  }

  render(){
    let item = this.props.item;
    return(
      <button style={{background:this.state.bg}} onClick={this.onBtnClick}>
        {item.type} - {item.value}
      </button> 
    )
}
}

export default CarBtn