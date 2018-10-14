import React from 'react';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import ShowCardList from './components/ShowCardList';

import './styles/style.css';

export default function App() {
    return (
        <div className="app">
            <Landing />
            <ShowCardList />
        </div>
    );
}

// const FourOrFour = () => <h1>404</h1>;

// export default function App() {
//     return (
//         <BrowserRouter>
//             <div className="app">
//                 <Switch>
//                     <Route exact path="/" component={Landing} />
//                     <Route path="/search" component={Search} />
//                     <Route component={FourOrFour} />
//                 </Switch>
//             </div>
//         </BrowserRouter>
//     );
// }
