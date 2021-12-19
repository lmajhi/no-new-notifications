import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

const Background = (props: any) => {
    return (
        <SafeAreaView style={styles.container}>
            {props.children}
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
export default Background;
