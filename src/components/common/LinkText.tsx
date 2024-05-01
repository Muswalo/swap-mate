import React from "react";
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface LinkTextProps {
    text: string;
    onPress: () => void;
}

const LinkText: React.FC<LinkTextProps> = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.linkText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    linkText: {
        color: '#007BFF',
        fontWeight: 'bold',
        fontSize: 18,
    }
});

export default LinkText;
