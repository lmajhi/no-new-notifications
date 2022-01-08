import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";


const HeaderDescription = ({ desc }: { desc: string }) => {
    return <View style={styles.container}>
        <ScrollView>
            <Text style={styles.description}>{desc}</Text>
        </ScrollView>
    </View>
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        marginHorizontal: 12,
        borderRadius: 5,

    },
    description: {
        marginStart: 5,
        marginVertical: 4,
        color: "black"
    }
})
export default HeaderDescription;
