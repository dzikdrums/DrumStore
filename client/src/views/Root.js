import 'normalize.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from 'views/AboutPage';
import AddReview from 'components/features/Reviews/AddReviewModal';
import Cart from 'views/CartPage';
import Checkout from 'views/CheckoutPage';
import Contact from 'views/ContactPage';
import Cymbals from 'views/CymbalsPage';
import Drums from 'views/DrumsPage';
import Home from 'views/HomePage';
import Login from 'views/LoginPage';
import MainLayout from 'components/layout/MainLayout';
import { ModalProvider } from 'styled-react-modal';
import NotFound from 'views/NotFoundPage';
import Policy from 'views/PrivacyPolicyPage';
import { Provider } from 'react-redux';
import React from 'react';
import { ScrollToTop } from 'utils';
import SingleProduct from 'views/SingleProductPage';
import { routes } from 'routes';
import { store } from 'redux/store';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ModalProvider>
        <ScrollToTop>
          <MainLayout>
            <Switch>
              <Route exact path={routes.home} component={Home} />
              <Route exact path={routes.product} component={SingleProduct} />
              <Route exact path={routes.cart} component={Cart} />
              <Route exact path={routes.contact} component={Contact} />
              <Route path={routes.drumsId} component={Drums} />
              <Route path={routes.drums} component={Drums} />
              <Route path={routes.cymbalsId} component={Cymbals} />
              <Route exact path={routes.cymbals} component={Cymbals} />
              <Route exact path={routes.about} component={About} />
              <Route exact path={routes.login} component={Login} />
              <Route exact path={routes.checkout} component={Checkout} />
              <Route exact path={routes.addReview} component={AddReview} />
              <Route exact path={routes.policy} component={Policy} />
              <Route component={NotFound} />
            </Switch>
          </MainLayout>
        </ScrollToTop>
      </ModalProvider>
    </BrowserRouter>
  </Provider>
);

export default Root;
