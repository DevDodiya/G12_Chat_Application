import React, { useState, useRef } from "react";
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Switch,
  Alert,
} from "react-native";
import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import ReusableButton from "../../atoms/ReusableButton";
import GlobalStyles from "../../globalStyles";
import styles from "./style";

const CreatProfile = () => {
  const [name, setName] = useState("Jhon Abraham");
  const [bio, setBio] = useState("My nickname is Dhruvin Akhaja");
  const [phoneNumber, setPhoneNumber] = useState("(320) 555-0104");
  const [email, setEmail] = useState("jhon.abraham@example.com"); // Static email
  const [profilePic, setProfilePic] = useState(
    "https://t3.ftcdn.net/jpg/06/87/23/04/360_F_687230468_RE94FphpxaiYC0mzkBVflRGg16JC1lNG.jpg"
  );
  const [isOnline, setIsOnline] = useState(true);

  const scrollY = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const profileHeight = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [290, 0],
    extrapolate: "clamp",
  });

  const profileOpacity = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const handleProfilePicChange = () => {
    alert("Profile picture change functionality goes here.");
  };

  const handleEmailFieldPress = () => {
    Alert.alert("Uneditable Field", "This field cannot be edited.", [
      { text: "OK", onPress: () => {} },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Creat Profile</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        scrollEventThrottle={16}
        style={styles.scrollView}
      >
        <Animated.View
          style={[
            styles.profileContainer,
            { height: profileHeight, opacity: profileOpacity },
          ]}
        >
          <View style={styles.profileImageContainer}>
            <Image source={{ uri: profilePic }} style={styles.profileImage} />

            {/* Add Upload DP Button */}
            <TouchableOpacity
              style={styles.uploadButtonOnImage}
              onPress={handleProfilePicChange}
            >
              <Icon name="camera-alt" size={18} color="#fff" />
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.usernameInput}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor="#888"
          />
          <Text style={styles.userHandle}>
            @{name.toLowerCase().replace(" ", "")}
          </Text>

          <View style={styles.statusContainer}>
            <Text style={styles.activityText}>Activity Status</Text>
            <View style={styles.statusToggleContainer}>
              <Text
                style={[
                  styles.statusText,
                  isOnline ? styles.online : styles.offline,
                ]}
              >
                {isOnline ? "Online" : "Offline"}
              </Text>
              <Switch
                value={isOnline}
                onValueChange={() => setIsOnline((prevState) => !prevState)}
                trackColor={{ false: "#f00", true: "#4CAF50" }}
                thumbColor={isOnline ? "#4CAF50" : "#f00"}
              />
            </View>
          </View>
        </Animated.View>

        <View style={styles.whiteBackgroundSection}>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.infoInput}
              value={name}
              onChangeText={setName}
              placeholder="Enter your Name"
              placeholderTextColor="#888"
            />
          </View>

          {/* Email Field - Read-only */}
          <View style={styles.infoCard}>
            <Text style={styles.label}>Email</Text>
            <TouchableOpacity onPress={handleEmailFieldPress}>
              <TextInput
                style={[styles.infoInput, styles.readOnlyEmail]}
                value={email}
                editable={false} // Makes the field uneditable
                placeholderTextColor="#888"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.infoInput}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
              placeholderTextColor="#888"
            />
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Bio</Text>
            <TextInput
              style={styles.infoInput}
              value={bio}
              onChangeText={setBio}
              placeholder="Enter your Bio"
              placeholderTextColor="#888"
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.saveButtonContainer}>
        <ReusableButton
          text="Save Changes"
          backgroundColor={GlobalStyles.SIGNIN1_BUTTON_COLOR}
          textColor="#FFFFFF"
          onPress={() => alert("Changes saved successfully!")}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreatProfile;