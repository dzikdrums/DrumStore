import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { routes } from 'routes';
import 'normalize.css';
import { store } from 'redux/store';
import MainLayout from 'components/layout/MainLayout';
import Home from 'views/HomePage';
import About from 'views/AboutPage';
import Contact from 'views/ContactPage';
import Cart from 'views/CartPage';
import SingleProduct from 'views/SingleProductPage';
import Drums from 'views/DrumsPage';
import NotFound from 'views/NotFoundPage';
import Login from 'views/LoginPage';
import Cymbals from 'views/CymbalsPage';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route exact path={routes.product} component={SingleProduct} />
          <Route exact path={routes.cart} component={Cart} />
          <Route exact path={routes.contact} component={Contact} />
          <Route exact path={routes.drums} component={Drums} />
          <Route exact path={routes.cymbals} component={Cymbals} />
          <Route exact path={routes.about} component={About} />
          <Route exact path={routes.login} component={Login} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default Root;
