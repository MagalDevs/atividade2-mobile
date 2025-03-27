import React, { Component } from 'react'
import { View, Text } from 'react-native';
import Header from '../components/Header/header';
import Footer from '../components/Footer/Footer';
import MainContent from '../components/MainComponent/MainContent';

export class Ex1 extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Header/>
            <MainContent />
            <Footer/>
        </View>
    )
  }
}

const styles = {
    container: {
        flex: 1,
    }
}

export default Ex1
