import React, { Component } from 'react';
import InputPixa from './inputPixa';
import ListPixa from './listPixa';
import {sortBy} from "lodash"

class AppPixa extends Component {
  state = {pics_ar:[],sort:"tags"}

  componentDidMount(){
    let url = "https://pixabay.com/api/?key=15489555-318fcca1200a48f374a1ce3ea&q=yellow+flowers&image_type=photo&pretty=true"
    this.doApi(url);
  }

  doApi = async(_url) => {
    let resp = await fetch(_url);
    let data = await resp.json();
    console.log(data.hits);
    this.setState({pics_ar:data.hits});
    // תמיד בחיפוש חדש הולך לפי הסורט שקבענו
    this.sortPicsBy(this.state.sort);
  }

  sortPicsBy = (_sortBy) => {
    // מעדכן את הסטייט בשביל שנעשה בפעם הבאה
    // בקשת איי פי איי כבר מלכתיחלה נסדר את זה
    // לפי הסורט האחרון שהוחלט
    this.setState({sort:_sortBy})
    let temp_ar = sortBy(this.state.pics_ar,_sortBy);
    temp_ar.reverse();
    this.setState({pics_ar:temp_ar});
  }



  render() {
    return (
      <div className="container">
        <InputPixa sortPicsBy={this.sortPicsBy} doApi={this.doApi} />
        <ListPixa pics_ar={this.state.pics_ar} />
      </div>
    )
  }
}

export default AppPixa