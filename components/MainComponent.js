import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Catalog from './CatalogComponent';

const Main = () => {
    return(
        <View style={styles.view}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <Catalog />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    logo: {
        width: '100%',
        resizeMode: 'contain',
        backgroundColor: 'white'
    }
})

export default Main;