import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { FlatList, SectionList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
    Text,
    View,
} from "react-native";

import { styles } from "./Styles";
import { SafeAreaView } from "react-native-safe-area-context";


export default function MainScreen3() {
    const navigation = useNavigation();
    const route = useRoute();

    const { bookTitle, chapters } = route.params;


    return (
        <SafeAreaView style={[styles.container]}>

            <Text style={styles.heading}>
                Chapters from {bookTitle}
            </Text>
            <FlatList
                data={chapters}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={{ margin: 10 }}>
                        <Text>{(index + 1).toString()}.  {item}</Text>
                    </View>
                )}

                showsHorizontalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}
