import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';

const Home = ({ navigation }) => {
    return(
        <View style={styles.view}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <Button
                title={'Catalog'}
                onPress={() => {navigation.navigate('Catalog')}}
            />
            <Button
                title={'Camera'}
                onPress={() => {navigation.navigate('OCRCamera')}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#1d466d'
    },
    logo: {
        width: '100%',
        resizeMode: 'contain',
        backgroundColor: 'white'
    }
})

export default Home;