import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";

import { useNavigation, useRoute } from "@react-navigation/native";
import {
    View, Text
} from "react-native";


import { styles } from "./Styles";
import Database from "./Database";
import ZOHAIB from "./ZOHAIB";
import CustomNavbar from "./CustomNavbar";

export default function dashboard() {
    

    const navigation = useNavigation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={[styles.container]}>
          <View style={styles.spacing}></View>
          <CustomNavbar text={"Dashboard"}/>
        </View>
    );
}
