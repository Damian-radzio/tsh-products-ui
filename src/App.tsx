import { Provider } from 'react-redux';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import store from './store/index';
import ProductsListView from 'views/ProductsListView';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Router>
        <div className="viewWrapper">
          <div className="navWrapper">
            <Navigation />
          </div>
          <div className="componentsWrapper">
            <Routes>
              <Route path="/" element={<Navigate to="/products" />} />
              <Route path="/products" element={<ProductsListView />} />
              {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
