import React, { useState, useEffect, useRef } from "react";
import { router } from "expo-router";
import { useSelector } from "react-redux";
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image,
    Alert,
    Animated,
    Easing,
    Platform,
    Modal,
} from "react-native";

export function Header ({ style, lightColor, darkColor, children, ...rest }) {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.rightHeader}>
                <ThemedText style={styles.welcomeText}>Bienvenue {user.firstname}</ThemedText>
                <TouchableOpacity style={[styles.avatarContainer, { borderColor }]} onPress={handleAvatarPress}>
                    <Image source={require("../public/logo.png")} style={styles.avatar} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: "#9f4634",
        height: 100,
    }
});