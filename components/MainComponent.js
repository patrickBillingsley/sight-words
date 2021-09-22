import React from 'react';
import { StyleSheet } from 'react-native';
import Catalog from './CatalogComponent';
import { WORDS } from '../shared/words';

const catalogStyle = {
    width: '50%',
    backgroundColor: 'red'
}

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            words: WORDS
        };
    }

    render() {
        return <Catalog style={styles.catalog} words={this.state.words} />;
    }
}

const styles = StyleSheet.create({
    catalog: {
        width: '100',
        backgroundColor: 'green'
    }
})

export default Main;