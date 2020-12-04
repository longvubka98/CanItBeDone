import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { interpolateColor } from 'react-native-redash'
import Card, { CARD_HEIGHT } from './Card'
import Cards from './components/Cards'
import { products } from './Model'
import Products from './Products'

const { width } = Dimensions.get('window')
const snapToOffsets = [0, CARD_HEIGHT]

const PhilzCoffee = () => {
    const translateX = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            translateX.value = event.contentOffset.x
        }
    })
    const style = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            translateX.value,
            products.map((_, i) => width * i),
            products.map((product) => product.color2),
        )
        return { flex: 1, backgroundColor }
    })
    return (
        <Animated.View style={style}>
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                snapToOffsets={snapToOffsets}
                snapToEnd={false}
                decelerationRate='fast'
            >
                <View style={styles.slider}>
                    <Animated.ScrollView
                        onScroll={onScroll}
                        scrollEventThrottle={16}
                        decelerationRate='fast'
                        snapToInterval={width}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {products.map((product, key) => <Card {...{ product, key }} />)}
                    </Animated.ScrollView>
                    <Products x={translateX} />
                </View>
                <Cards />
            </ScrollView>
        </Animated.View>
    )
}

export default PhilzCoffee

const styles = StyleSheet.create({})
