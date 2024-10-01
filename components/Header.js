import React, { useState, useEffect, useRef } from "react";
import { router } from "expo-router";
import { useSelector } from "react-redux";
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Image
} from "react-native";

export function Header ({ style, lightColor, darkColor, children, ...rest }) {
    return (
        <View style={styles.headerContainer}>
            <View>
                <ThemedText style={styles.welcomeText}>Bienvenue {user.firstname}</ThemedText>
                    <Image source={require("../public/logo.png")} style={styles.avatar} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: "#9f4634",
        height: 100,
        text-align: "center",
        text-transform: "uppercase",
        padding: 32px,
        backgroundColor: "#0a0a23",
        color: "#fff",
        borderBottom: "4px solid #fdb347",
        objectFit: "cover",
      },
    avatar: {
        height:150px,
        width:150 px,
      }
});