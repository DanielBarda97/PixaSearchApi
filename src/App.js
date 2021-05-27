import './App.css';
import AppCar from './comps_hw/appCar';
import AppPixa from './comps_hw/appPixa';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppFruitsParams from './comps_hw/appFruitsParams';
import Counter from './comps_hooks/counter';
import AppDate from './comps_hooks/appDate';
import AppTasks from './comps_tasks_hooks/appTasks';
import AppShop from './comps_api/appShop';

function App() {
  return (
    <Router>
      <header className="container-fluid bg-info p-2">
        <div className="container">
          {/* LINK -> דואג ללינק שלא מרפרש את הדפדפן מחליף
          את התגית איי */}
          <Link to="/">Home</Link>
          <Link to="/cars">Cars</Link>
          <Link to="/fruits/banana">Banana</Link>
          <Link to="/fruits/kiwi">Kiwi</Link>
          <Link to="/counter">counter</Link>
          <Link to="/deadline">Dead line</Link>
          <Link to="/tasks">Tasks</Link>
          <Link to="/shop">Shop</Link>
        </div>
      </header>
      <div className="App">
        <Switch>
          {/* exact -> שחייב להיות בדיוק אותה כתותב */}
          <Route exact path="/" component={AppPixa} />
          <Route exact path="/cars" component={AppCar} />
          <Route exact path="/fruits/:idFruits" component={AppFruitsParams} />
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/deadline" component={AppDate} />
          <Route exact path="/tasks" component={AppTasks} />
          <Route exact path="/shop" component={AppShop} />
        </Switch>
        {/* <AppPixa /> */}
        {/* <AppCar /> */}
      </div>
    </Router>
  );
}

export default App;
