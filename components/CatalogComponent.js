import React from 'react';
import { View, SectionList, StyleSheet, Text } from 'react-native';

const Item = ({ title }) => (
    <View>
        <Text style = {styles.word}>{title}</Text>
    </View>
);

const Catalog = props => {
    return(
        <SectionList
            style = {styles.catalog}
            sections = {props.words}
            keyExtractor = {(item, index) => item + index}
            renderItem = {({ item }) => <Item title = {item} />}
            renderSectionHeader = {({ section: { title } }) => (
                <Text style = {styles.header}>{title}</Text>
            )}
        />
    );
}

const styles = StyleSheet.create({
    catalog: {
        marginLeft: '10%',
        marginRight: '10%',
        backgroundColor: 'white'
    },
    header: {
        fontSize: 30,
        color: 'white',
        paddingLeft: 20,
        backgroundColor: '#00589e',
        marginBottom: 5
    },
    word: {
        fontSize: 20,
        paddingLeft: 20,
        marginBottom: 5
    }
})

export default Catalog;