import React from 'react';
import { View, Image, Text } from 'react-native';

import logoImg from '../../assets/logo.png';

import style from './styles';
import styles from './styles';

export default function Incidents() {
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={style.headerTextBold}> 999 casos</Text>.    
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>
        </View>
    );
}