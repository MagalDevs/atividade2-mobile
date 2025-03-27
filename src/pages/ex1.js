import React, { Component } from 'react'
import { View, Text } from 'react-native';
import Header from '../components/Header/header';
import Footer from '../components/Footer/Footer';

export class Ex1 extends Component {
  render() {
    return (
        <View style={styles.mainContent}>
            <Header/>
            <Text>Conteúdo Principal</Text>
            <Footer/>
        </View>
    )
  }
}

const styles = {
    mainContent: {
        padding: 20,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
      }
}

export default Ex1
