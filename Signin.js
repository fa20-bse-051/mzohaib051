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
import ZOHAIB from "./ZOHAIB";

export default function Signin() {
    

    const navigation = useNavigation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    Database.getSignedInUser((user)=>{
      if (user != null)
        navigation.navigate("MainScreen", {user});
    });

    function onPressRegister() {
        navigation.navigate("Signup");
    }

    function onPressSignin() {
      const validateMsg = validate();
        if (validateMsg == "ok"){
          Database.signinUser({username, password}, (msg, user)=>{
            if (msg == "ok") {
              navigation.navigate("MainScreen", {user});
            }else{
              alert(msg);
            }
          });
        }else{
          alert(validateMsg);
        }
    }

    function validate() {
      if (username == "")
        return "Enter username";
      if (password.length == 0)
        return "Enter password";
      return "ok";
    }

    return (
        <View style={[styles.container, styles.gravityCenter]}>
            <Image
                style={styles.tinyLogo}
                source={require("./assets/reactlogo.png")}
            />
            <Text style={styles.heading}>Sign In</Text>
            <View style={styles.spacing}></View>
            <View style={styles.verticalView}>
                <Text style={styles.inputHeading}>Username</Text>
                <TextInput
                    style={styles.input}
                    placeholder="user123"
                    onChangeText={(newText) => {
                        setUsername(newText);
                    }}
                />
            </View>

            <View style={styles.verticalView}>
                <Text style={styles.inputHeading}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="*******"
                    secureTextEntry={true}
                    onChangeText={(newText) => {
                        setPassword(newText);
                    }}
                />
            </View>

            <TouchableOpacity
                style={styles.tapbutton}
                onPress={onPressSignin}
            >
                <Text style={styles.btnText}>Sign In</Text>
            </TouchableOpacity>

            <Text>
                Don't have an account?
                <TouchableOpacity onPress={onPressRegister}>
                    <Text style={styles.link}> Register </Text>
                </TouchableOpacity>
            </Text>
            <View>
              <ZOHAIB text={"hello"}/>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
