import React, { useState, useEffect, useRef } from "react";
import { router } from "expo-router";
import { useSelector } from "react-redux";
import {
    StyleSheet,
    View,
    Image
} from "react-native";

        const Header = ({ date }) => {
            return (
                <header className={styles.header}>
                    <div className={styles.logoContainer}>
                        <Image source={require("../public/logo.png")} style={styles.avatar} />
                        <Moment className={styles.date} date={date} format="MMM Do YYYY" />
                        <h1 className={styles.title}>3Degrees</h1>
                    </div>
                </header>
            );
        };
        const styles = {
            header: {
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "105ba6",
            },
            logoContainer: {
                display: "flex",
            },
            avatar: {
                width: 150, 
                height: 150, 
            },
            date: {
                color:black
            },
            title: {
                // Add title styles
            },
        };
        export default Header;
