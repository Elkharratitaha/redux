import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import { TestProvider } from './components/TestContext'; 
import DetailPost from './components/DetailPost';
import Posts from './components/Posts';
import {Provider} from "react-redux";
import store from "./redux/store.jsx";
import Page from "./components/Page.jsx";

function App() {
  return (
    //<TestProvider>
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<TestProvider><Home /></TestProvider> } />
            <Route path="/add" element={<TestProvider><Add /></TestProvider> }/>
          <Route path="/detail" element={<DetailPost />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/page" element={<Page />} />
        </Routes>
      </BrowserRouter>
    {/*</TestProvider>*/}
</Provider>
  );
}

export default App;
