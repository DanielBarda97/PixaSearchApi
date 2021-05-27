import React, { Component } from 'react';
// כל קבצי הסי אס אס שעשינו להם אימפורט בקימפול הסופי הופכים להיות קובץ אחד
import "./css/pixa.css";

class ListPixa extends Component {
  render() {
    let ar = this.props.pics_ar;
    return (
      <div>
        <h2>List of pics:</h2>
        <div className="row">
          {ar.map(item => {
            return (
              <div key={item.id} className="card col-lg-3 p-0" >
                <div className="bg_card" style={{backgroundImage:`url(${item.previewURL})`}}>

                </div>
                {/* <img className="card-img-top" src={item.previewURL} alt="Card image cap" /> */}
                  <div className="card-body">
                    <h5 className="card-title">{item.tags}</h5>
                    <div>Likes: {item.likes}</div>
                    <div>views: {item.views}</div>
                    <a href={item.pageURL} target="_blank" className="btn btn-primary mt-3">Go somewhere</a>
                  </div>
            </div>
            )
          })}
              </div>
      </div>
    )
}
}

export default ListPixa