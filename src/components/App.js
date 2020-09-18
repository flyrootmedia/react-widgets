import './App.scss';

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import WidgetList from './WidgetList';
import AccordionDemo from './AccordionDemo';
import InlineAlertDemo from './InlineAlertDemo';
import MenuDemo from './MenuDemo';
import ModalDemo from './ModalDemo';
import StyledFormDemo from './StyledFormDemo';
import GlobalHeader from './GlobalHeader';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <GlobalHeader />
                <Route path="/" exact component={WidgetList} />
                <Route path="/accordion" exact component={AccordionDemo} />
                <Route path="/inline-alert" exact component={InlineAlertDemo} />
                <Route path="/menu" exact component={MenuDemo} />
                <Route path="/modal" exact component={ModalDemo} />
                <Route path="/styled-form" exact component={StyledFormDemo} />
            </BrowserRouter>

        </div>
    );
};

export default App;