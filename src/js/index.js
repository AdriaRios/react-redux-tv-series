import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Route } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import Header from './header/header.component';

//browser history
const history = createBrowserHistory();

//middleware
const middleware = routerMiddleware(history);

//create store
const store = createStore(reducers,
    applyMiddleware(middleware, thunk)
);

import SearchContainer from './search/search.container';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history} >
            <div>
                <Header/>
                <Route exact={true} path="/" component={SearchContainer}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);