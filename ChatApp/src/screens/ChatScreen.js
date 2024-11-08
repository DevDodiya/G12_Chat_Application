import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const ChatScreen = ({ route, navigation }) => {
    const { username, profileImage } = route.params;

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome name="arrow-left" size={20} color="white" />
                </TouchableOpacity>
                
                {/* Profile Image */}
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('ProfilePicView', {
                            dpImage: profileImage,
                            groupName: username,
                        })
                    }
                >
                    <Image
                        source={{ uri: profileImage }}
                        style={styles.profilePic}
                    />
                </TouchableOpacity>
                
                {/* Header Text & Icons as a single TouchableOpacity */}
                <TouchableOpacity
                    style={styles.headerContent}
                    onPress={() =>
                        navigation.navigate('Profile', {
                            Image : profileImage,
                            name : username,
                        })
                    }
                >
                    <View style={styles.headerText}>
                        <Text style={styles.profileName}>{username}</Text>
                        <Text style={styles.accountType}>Business Account</Text>
                    </View>
                </TouchableOpacity>
                    
                <View style={styles.headerIcons}>
                    <TouchableOpacity style={styles.videocallButton}>
                        <FontAwesome name="video-camera" size={23} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.audiocallButton}>
                        <FontAwesome name="phone" size={23} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.moreoptButton}>
                        <MaterialIcons name="more-vert" size={23} color="white" />
                    </TouchableOpacity>
                </View>
                
            </View>

            {/* Message Input */}
            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.emojiButton}>
                    <FontAwesome name="smile-o" size={24} color="black" style={styles.emojiIcon} />
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="Message"
                    placeholderTextColor="black"
                />
                <TouchableOpacity>
                    <FontAwesome name="paperclip" size={23} color="black" style={styles.paperclipIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.cameraButton}>
                    <FontAwesome name="camera" size={16} color="white" style={styles.cameraIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.micButton}>
                    <FontAwesome name="microphone" size={20} color="white" style={styles.micIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F3F5',
    },
    header: {
        paddingTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4A90E2',
        padding: 10,
    },
    profilePic: {
        width: 45,
        height: 45,
        borderRadius: 15,
        marginHorizontal: 10,
    },
    headerContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        flex: 1,
    },
    profileName: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    accountType: {
        color: '#DDE6ED',
        fontSize: 14,
    },
    headerIcons: {
        flexDirection: 'row',
    },
    videocallButton: {
        marginHorizontal: 12,
    },
    audiocallButton: {
        marginHorizontal: 5,
    },
    moreoptButton: {
        marginHorizontal: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 8,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    input: {
        flex: 1,
        backgroundColor: '#eaeaea',
        color: '#333333',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 5,
        paddingVertical: 5,
    },
    paperclipIcon: {
        marginHorizontal: 5,
    },
    cameraButton: {
        backgroundColor: 'black',
        padding: 8,
        margin: 5,
        borderRadius: 32,
    },
    micButton: {
        backgroundColor: '#4A90E2',
        padding: 8,
        borderRadius: 32,
    },
    emojiButton: {
        backgroundColor: 'white',
        padding: 0,
        margin: 2,
        borderRadius: 32,
    },
});

export default ChatScreen;
