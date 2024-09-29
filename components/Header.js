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

export function Header {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity
                style={styles.logoContainer}
                onPress={() => {
                    console.log("pressed");
                    router.navigate("/");
                }}
            >
                <Animated.Image
                    source={require("../public/logo.jpg")}
                    style={[styles.noPestsAllowedLogo, { transform: [{ rotateY }] }]}
                />
            </TouchableOpacity>
            <View style={styles.rightHeader}>
                <ThemedText style={styles.welcomeText}>Bienvenue {user.firstname}</ThemedText>
                <TouchableOpacity style={[styles.avatarContainer, { borderColor }]} onPress={handleAvatarPress}>
                    <Image source={require("../assets/images/avatar1.png")} style={styles.avatar} />
                </TouchableOpacity>
            </View>
            <Modal
                visible={menuVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setMenuVisible(false)}
            >
    
                            <ThemedText style={styles.menuItemText}>Nous contacter </ThemedText>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.menuItem}
                            onPress={() => {
                                setMenuVisible(false);
                                logout();
                            }}
                        >
                            <ThemedText style={styles.menuItemText}>Déconnection</ThemedText>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
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