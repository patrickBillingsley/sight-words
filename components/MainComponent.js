import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './HomeComponent';
import Catalog from './CatalogComponent';
import OCRCamera from './CameraComponent';

const navigationStack = createStackNavigator({
    Home: {
        screen: Home
    },
    Catalog: {
        screen: Catalog
    },
    OCRCamera: {
        screen: OCRCamera
    }
});

const AppNavigator = createAppContainer(navigationStack);

const Main = () => {
    return(
        <AppNavigator />
    )
};

export default Main;