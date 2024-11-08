// index.js of Reusable Button

import React from 'react';
import { TouchableOpacity, Text,  Dimensions } from 'react-native';
import styles from './style';
import { useState, useEffect } from 'react';
import {ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';

const ReusableButton = ({ text, backgroundColor, textColor, onPress, topval }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Caros-Heavy': require('../../../../assets/fonts/cretype  Caros Heavy.otf'),
        'Caros-Medium': require('../../../../assets/fonts/cretype  Caros Medium.otf'),
        'Caros-Light': require('../../../../assets/fonts/cretype  Caros Light Italic.otf'),
        // ../assets/fonts/cretype Caros Heavy.otf
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#FFFFFF" />;
  }
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor }, {top:topval}]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, {color:textColor}]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ReusableButton;