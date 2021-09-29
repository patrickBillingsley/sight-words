import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Catalog from './CatalogComponent';
import { WORDS } from '../shared/words';

const Main = () => {
    const [words, setWords] = useState(WORDS);

    return(
        <View>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <Catalog words={words} />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        resizeMode: 'contain',
        backgroundColor: 'white'
    }
})

export default Main;