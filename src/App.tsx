import { Provider } from 'react-redux';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import WebFont from 'webfontloader';

import Navigation from './components/Navigation';
import store from './store/index';
import ProductsListView from 'views/ProductsListView';
import { useEffect } from 'react';

const App = (): JSX.Element => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Nunito'],
      },
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="viewWrapper">
          <Navigation />

          <div className="componentsWrapper">
            <Routes>
              <Route path="/" element={<Navigate to="/products" />} />
              <Route path="/products" element={<ProductsListView />} />
              {/* <Route path="/products/:id" element={<EventDetails />} />
            <Route path="/add-event" element={<AddEventForm />} /> */}
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
