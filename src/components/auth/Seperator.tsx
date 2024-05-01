import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Widget() {
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <Text style={styles.text}>OR</Text>
            <View style={styles.line} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        marginHorizontal: 20
    },
    line: {
        backgroundColor: '#D3D3D3',
        flex: 1,
        height: 2,
    },
    text: {
        marginHorizontal: 4,
        color: '#666',
        fontSize: 22,
        fontWeight: '700'
    },
});
