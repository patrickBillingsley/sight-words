import React, { useEffect, useRef, useState } from 'react';
import { View, SectionList, StyleSheet, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';

const Item = ({ title }) => (
    <View>
        <Text style = {styles.word}>{title}</Text>
    </View>
);  

const Catalog = props => {
    const listRef = useRef();

    const [data, setData] = useState(props.words);
    const [searchText, setSearchText] = useState(null);

    const searchFilterFunction = text => {
        setSearchText(text);

        const entries = Object.entries(data);
        entries.forEach((entry, index) => {
            const section = entry[1].title;
            const list = entry[1].data;

            if(!text) {
                return;
            }

            if(text.toUpperCase().slice(0, 1) === section) {
                listRef.current.scrollToLocation({
                    itemIndex: 0,
                    sectionIndex: index
                })
            }
        })
    }

    return(
        <React.Fragment>
            <SearchBar
                placeHolder = 'Search'
                value = {searchText}
                lightTheme
                round
                onChangeText = {text => searchFilterFunction(text)}
                autoCorrect = {false}
            />
            <SectionList
                style = {styles.catalog}
                ref = {listRef}
                sections = {data}
                keyExtractor = {(item, index) => item + index}
                renderItem = {({ item }) => <Item title = {item} />}
                renderSectionHeader = {({ section: { title, data } }) => {
                    if(data.length) {
                        return <Text style = {styles.header}>{title}</Text>
                    } else {
                        return;
                    }
                }}
                stickySectionHeadersEnabled = {true}
            />
        </React.Fragment>
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