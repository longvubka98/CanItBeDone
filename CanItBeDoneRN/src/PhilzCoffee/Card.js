import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')
export const CARD_HEIGHT = (width * 1564) / 974
const styles = StyleSheet.create({
    container: {
        width,
        height: CARD_HEIGHT
    }
})
export default function Card() {
    return (
        <View>
            <Text></Text>
        </View>
    )
}
