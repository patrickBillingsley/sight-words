import React, { useState } from 'react';
import { View, SectionList, StyleSheet, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';

const Item = ({ title }) => (
    <View>
        <Text style = {styles.word}>{title}</Text>
    </View>
);  

const Catalog = props => {
    const [data, setData] = useState(props.words);
    let [searchText, setSearchText] = useState('');

    const searchFilterFunction = text => {
        searchText = setSearchText(text);

        const entries = Object.entries(data);
        entries.forEach(entry => {
            const letter = entry[1].title;
            const wordList = entry[1].data;

            if(!text) {
                setData(props.words);
                return;
            }

            if(text.toUpperCase().slice(0, 1) === letter) {
                setData([{
                    title: letter,
                    data: wordList
                }]);
            }
        })

        // const newData = data.forEach(letter => {
            // letter.filter(item => {
            //     const itemData = `${item.toUpperCase()}`
            //     const textData = text.toUpperCase()
    
            //     return itemData.indexOf(textData) > -1;
            // })
        // })
        // setData(newData);
    }

    return(
        <View>
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
                sections = {data}
                keyExtractor = {(item, index) => item + index}
                renderItem = {({ item }) => {
                    return <Item title = {item} />;
                }}
                renderSectionHeader = {({ section: { title } }) => (
                    <Text style = {styles.header}>{title}</Text>
                )}
                stickySectionHeadersEnabled = {true}
            />
        </View>
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