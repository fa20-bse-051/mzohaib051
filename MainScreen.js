import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";

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

import { styles } from "./Styles";
import Database from "./Database";

export default function MainScreen() {
    const navigation = useNavigation();
    const route = useRoute();

    //extract the info
    const { user } = route.params;
    const [mode, setMode] = useState(user.mode);

    console.log("Entering mode: "+mode);

    function onPressSignout(){
        Database.signout(()=>{
            navigation.navigate("Signin");
        });
    }

    function flipMode() {
        
        const newMode =(mode+1) % 2;
        setMode(newMode);
        user.mode = newMode;
        console.log(JSON.stringify(user));
        Database.saveUserInfo(user);
    }

    return (
        <View style={mode == 1? styles.container : styles.containerDark}>
            <View style={[styles.gravityTopEnd, { marginTop: 40, marginEnd: 10}]}>
                <TouchableOpacity onPress={onPressSignout}>
                    <Text style={styles.link}> Sign out </Text>
                </TouchableOpacity>
            </View>
            
            <View style={[styles.container, styles.gravityCenter]}>
            <Text style={[styles.heading, mode == 1? styles.textDark : styles.textLight]}>Welcome!</Text>
            <Image
                style={styles.tinyLogo}
                source={require("./assets/reactlogo.png")}
            />
            <Text style={[styles.heading,  mode == 1? styles.textDark : styles.textLight]}>{user.username}</Text>
            <View style={styles.spacing}></View>
            <TouchableOpacity
                style={styles.tapbutton}
                onPress={flipMode}>
                <Text style={styles.btnText}>{mode == 1? "Dark Mode": "Light Mode"}</Text>
            </TouchableOpacity>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}
