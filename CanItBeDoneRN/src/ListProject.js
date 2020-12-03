import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import StyleGuide from './StyleGuide';

export const examples = [
    {
        screen: "Duolingo",
        title: "🦉 Duolingo",
    },
    {
        screen: "Rainbow",
        title: "🌈 Rainbow",
    },
    {
        screen: "Snapchat",
        title: "👻 Snapchat",
    },
    {
        screen: "PhilzCoffee",
        title: "☕️ Philz Coffee",
    },
    {
        screen: "Chrome",
        title: "🧭 Google Chrome",
    },
]

const styles = StyleSheet.create({
    container: {
        backgroundColor: StyleGuide.palette.background,
    },
    content: {
        paddingBottom: 32,
    },
    thumbnail: {
        backgroundColor: "white",
        padding: StyleGuide.spacing * 2,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: StyleGuide.palette.background,
    },
    title: {
        ...StyleGuide.typography.headline,
    },
});

const ListProject = () => {
    const { navigate } = useNavigation();
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            {examples.map((thumbnail) => (
                <RectButton
                    key={thumbnail.screen}
                    onPress={() => navigate(thumbnail.screen)}
                >
                    <View style={styles.thumbnail}>
                        <Text style={styles.title}>{thumbnail.title}</Text>
                    </View>
                </RectButton>
            ))}
        </ScrollView>
    );
};

export default ListProject;
