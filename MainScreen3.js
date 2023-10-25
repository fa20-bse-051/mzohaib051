import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { FlatList, SectionList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";

import CreateApiHook from "./ApiHook";
import { styles } from "./Styles";
import Database from "./Database";
import { SafeAreaView } from "react-native-safe-area-context";


export default function MainScreen3() {
    const navigation = useNavigation();
    const route = useRoute();

    const { data, getData } = CreateApiHook();

    const data2 = [
        {
            title: "title1",
            data: ['aaa', 'bbb']
        },    
        {
            title: "title1",
            data: ['aaa', 'bbb']
        },       
    ];
    //
    useEffect(() => {
        console.log("use effect");

        getData("https://api.coindesk.com/v1/bpi/currentprice.json");

    }, []);

    return (
        <SafeAreaView style={[styles.container]}>

            <Text>
                Loading data...
            </Text>
            <SectionList
                sections={data2}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.title}>{title}</Text>
                )}
            />
        </SafeAreaView>
    );
}
