import React,{Component} from 'react';

class InputPixa extends Component{
  searchRef = React.createRef();
  sortRef = React.createRef();

  onSearchClick = () => {
    let input = this.searchRef.current.value;
    let urlSearch = `https://pixabay.com/api/?key=15489555-318fcca1200a48f374a1ce3ea&q=${input}&image_type=photo&pretty=true`;
    this.props.doApi(urlSearch);
  }

  onSelectChange = () => {
    let select = this.sortRef.current.value;
    this.props.sortPicsBy(select)
  }

  // עובד תמיד שלוחצים על המקלדת על כל מקש
  // ולכן נבדוק בו שאכן לחצנו על מקש אנטר
  onKeyClick = (ev) => {
    // console.log(ev);
    if(ev.code == "Enter"){
      this.onSearchClick();
    }
  }

  render(){
    return(
      <header className="bg-warning p-2">
        <div className="row">
          <div className="d-flex col-lg-6">
            <input onKeyDown={this.onKeyClick} ref={this.searchRef} type="search" className="form-control" />
            <button onClick={this.onSearchClick}>search</button>
          </div>
          <div className="col-lg-4 d-flex">
            <label className="col-form-label me-2">Sort:</label>
            <select onChange={this.onSelectChange} ref={this.sortRef} className="form-select">
              <option value="tags">tags</option>
              <option value="views">views</option>
              <option value="likes">likes</option>
            </select>
          </div>
        </div>
      </header> 
    )
}
}

export default InputPixa