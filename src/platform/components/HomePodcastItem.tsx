import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomePodcastItem = ({ item }: { item: any }) => {
    console.log(item)
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={item.start}>
                <Image style={styles.logo}
                    source={{ uri: item.image }} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center"

    },
    logo: {
        height: 180,
        width: 180,
        borderRadius: 10
    }
})
export default HomePodcastItem;
