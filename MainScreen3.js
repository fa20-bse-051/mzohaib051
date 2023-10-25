import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { FlatList } from "react-native";
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
        { rate: 1, symbol: 'b', key: 1 },
        { rate: 22, symbol: 'abc', key: 2 }
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
            <FlatList
                data={Object.values(data)}
                keyExtractor={(item) => item.code}
                renderItem={({ item }) => (
                    <View style={styles.listitem}>
                        <Text>{item.description}</Text>
                        <Text>Code: {item.code}</Text>
                        <Text>Rate: {item.rate}</Text>
                        <Text>Symbol: {item.symbol}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}
