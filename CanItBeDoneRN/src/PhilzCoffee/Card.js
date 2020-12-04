import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

import CardHeader from './components/CardHeader'
import Button from './components/Button'

const { width } = Dimensions.get('window')

export const CARD_HEIGHT = (width * 1564) / 974

const Card = ({ product: { color1, title, subtitle } }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.view, { backgroundColor: color1 }]}>
                <View>
                    <CardHeader />
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
                <Button label={`I'll try it`} />
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        width,
        height: CARD_HEIGHT
    },
    view: {
        borderRadius: 16,
        margin: 32,
        flex: 1,
        padding: 16,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        color: "#432406",
        marginBottom: 16,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: "#432406",
        fontWeight: '300'
    }
})
