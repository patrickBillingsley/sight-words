import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Catalog from './CatalogComponent';
import { WORDS } from '../shared/words';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            words: WORDS
        };
    }

    render() {
        console.log(WORDS)
        return(
            <View style={styles.view}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
                <Catalog style={styles.catalog} words={this.state.words} />
            </View>
        );  
    }
}

const styles = StyleSheet.create({
    view: {
        width: '100%'
    },
    logo: {
        width: '100%',
        resizeMode: 'contain',
        backgroundColor: 'white'
    }, 
    catalog: {
        flex: 1
    }
})

export default Main;