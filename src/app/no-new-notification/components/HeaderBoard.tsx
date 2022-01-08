import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const HeaderBoard = ({img, title}: {img: string, title: string}) => {

    return <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image style={styles.logo}
            source={{ uri: img}}></Image>
        </View>
        <View style={styles.descriptionContainer}>
            <Text style={styles.desciptionText}>{title}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        marginHorizontal: 12,
        marginTop:10,

        flexDirection: "row",
        alignItems: "center"
    },
    imageContainer: {
        height: 150,
        width: 150,
        borderRadius: 5,
        overflow: "hidden",
        marginHorizontal: 8,
    },
    logo: {
        height: 150,
        width: 150,
    },
    descriptionContainer: {
        height: 100,
        width: 160,
        borderRadius: 5,
    },
    desciptionText: {
        color: "black"
    }
})
export default HeaderBoard;
