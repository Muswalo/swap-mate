import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const AuthButton = () => {
    const onAuth = () => {
        console.log('emmanuel is awesome')
    }
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onAuth}>
            <View style={styles.buttonContent}>
                <Image source={require('../../../assets/images/google-logo.png')} resizeMode='cover' style={styles.googlelogo}/>
                <Text style={styles.buttonText}>Login with Google</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create ({
    buttonContainer: {
        backgroundColor: '#fff',
        paddingVertical: 5,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#999',
        borderStyle: 'solid',
        borderRadius: 6
    },
    googlelogo: {
        height: 30,
        width: 30,
        marginRight: 7
    },
    buttonText: {
        fontWeight: '700',
        color: '#444',
        fontSize: 17,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default AuthButton;
