import React from 'react';
import ReactDOM from 'react-dom';
import AboutArea from './components/AboutArea';
import BannerArea from './components/BannerArea';
import FooterArea from './components/FooterArea';
import NavigationBar from './components/NavigationBar';
import ProjectArea from './components/ProjectArea';
import SeparateComponent from './components/SeparateComponent';
import ServicesArea from './components/ServicesArea';
// import TecnologyArea from './components/TecnologyArea';

const divRoot = document.querySelector("#root");








ReactDOM.render(
    [
        <NavigationBar  />,
        <BannerArea />,
        <ServicesArea />,
        <SeparateComponent />,
        <AboutArea />,
        <SeparateComponent />,
        <SeparateComponent />,
        <ProjectArea />,
        <SeparateComponent />,
        <FooterArea />
    ],divRoot);

