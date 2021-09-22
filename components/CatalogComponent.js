import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { WORDS } from '../shared/words';

function Catalog() {
    const renderWord = ({ item }) => {
        return(
            <Text style={styles.listItem}>
                {item.word}
            </Text>
        );
    };

    return(
        <FlatList
            style={styles.flatList}
            data={WORDS}
            renderItem={renderWord}
            keyExtractor={item=>item.id.toString()}
        />
    );
}

const styles = StyleSheet.create({
    listItem: {
        color: '#1d466d',
        fontSize: 20,
        padding: 5
    },
    flatList: {
        marginTop: 50,
        marginRight: 50,
        marginBottom: 5,
        marginLeft: 50,
        backgroundColor: 'white'
    }
});

export default Catalog;