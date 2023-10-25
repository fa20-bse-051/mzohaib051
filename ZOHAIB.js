import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ZOHAIB = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={{width:80, height:40, backgroundColor:'green'}} onPress={onPress}>
          <Text style={{color: 'white'}}>{text}</Text>
        </TouchableOpacity>
      )
};

export default ZOHAIB;
