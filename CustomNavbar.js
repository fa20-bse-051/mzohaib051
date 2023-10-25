import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const back = "<";
const CustomNavbar = ({ text }) => {
    return (
        <View style={{
          color: "black",
          backgroundColor: "grey",
          paddingTop: 10,
          paddingBottom: 10,
          flexDirection: 'row',
      }}>
            <TouchableOpacity>
              <Text style={{fontSize: 20, marginEnd: 30}} >{back}</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 20}}>
                {text}
            </Text>
        </View>
    );
};

export default CustomNavbar;
