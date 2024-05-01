import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface ButtonProps {
    color: string;
    text: string;
    onPress: () => void;
    iconName?: any;
}

const CustomButton: React.FC<ButtonProps> = ({ color, text, onPress, iconName }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color }]}>
            <Text style={styles.text}>{text}</Text>
            {iconName && <AntDesign name={iconName} size={24} color="white" style={styles.icon} />}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontWeight: '700',
        fontSize: 18,
        marginRight: 4,
    },
    icon: {
        marginRight: 10,
        marginTop: 2
    }
});

export default CustomButton;
