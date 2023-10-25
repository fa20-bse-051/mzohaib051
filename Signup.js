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
import { Button, Checkbox } from "react-native-paper";

import Database from "./Database";

export default function Signup() {
    const navigation = useNavigation();
    const [checked, setChecked] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassowrd, setConfirmPassword] = useState("");

    function onPressSignin() {
        navigation.navigate("Signin");
    }

    

    function onPressRegister() {
      
        const validateMsg = validate();
        if (validateMsg == "ok"){
          Database.addUser({username, password, mode:0}, (msg)=>{
            if (msg == "ok"){
              alert("Registration Successful!");
            }else{
              alert(msg);
            }
          });
        }else{
          alert(validateMsg);
          console.log(validateMsg);
        }
    }

    function validate() {

      if (username == "")
        return "Enter username!";
      if (password.length == 0)
        return "Enter password";
      if(password != confirmPassowrd)
        return "Passwords Don't match";
      if (!checked)
        return "Agree to terms & conditions to continue"
      return "ok";
    }

    return (
      <View style={[styles.container, styles.gravityCenter]}>
            <Image
                style={styles.tinyLogo}
                source={require("./assets/reactlogo.png")}
            />
            <Text style={styles.heading}>Register User</Text>
            <View style={styles.spacing}></View>
            <View style={styles.verticalView}>
                <Text style={styles.inputHeading}>Username</Text>
                <TextInput style={styles.input} 
                placeholder="user123"
                onChangeText={(newText)=>setUsername(newText)}
                />
            </View>

            <View style={styles.verticalView}>
                <Text style={styles.inputHeading}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="*******"
                    secureTextEntry={true}
                    onChangeText={(newText)=>setPassword(newText)}
                />
            </View>

            <View style={styles.verticalView}>
                <Text style={styles.inputHeading}>Confirm Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="*******"
                    secureTextEntry={true}
                    onChangeText={(newText)=>setConfirmPassword(newText)}
                />
            </View>

            <View style={styles.checkboxContainer}>
                <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    color="#3AC3C4"
                    onPress={() => {
                        setChecked(!checked);
                    }}
                />

                <Text style={styles.checkboxLabel}>
                    I agree to terms and conditions
                </Text>
            </View>

            <TouchableOpacity
                style={styles.tapbutton}
                onPress={onPressRegister}>
                <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>

            <Text>
                Already have an account?
                <TouchableOpacity onPress={onPressSignin}>
                    <Text style={styles.link}> Sign in </Text>
                </TouchableOpacity>
            </Text>

            <StatusBar style="auto" />
        </View>
    );
}
