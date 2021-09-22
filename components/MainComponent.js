import React from 'react';
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
            <Catalog words={this.state.words} />
        );  
    }
}

export default Main;