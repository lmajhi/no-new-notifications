import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { navigateTo } from "../../../utils/naviagtion"

const EpisodeListItem = (episode) => {

    return <TouchableOpacity onPress={() => navigateTo("NoNewNotificationEpisode",{episode: episode.item})}>
    <View style={styles.container}>
        <View style={styles.infoContainer}>
            <View style={styles.episodeImageNameContainer}>
                <Image style={styles.episodeImage} source={{ uri: episode.item.image["_href"]}}></Image>
                <Text style={styles.episodeTile}>{episode.item.title[0]}</Text>
            </View>
            <Text numberOfLines={3} style={styles.descText}>{episode.item.description}</Text>
        </View>
        <View style={styles.playContainer}>
            <Image style={styles.playIcon}
            source={require("../assets/play.png")}/>
        </View>
    </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#A4A4A4",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 8
    },
    infoContainer: {
        height: "85%",
        width: "100%",
    },
    playContainer: {
        height: "15%",
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    episodeImageNameContainer: {
        height: 60,
        flexDirection: "row",
        alignItems: "center",
    },
    episodeImage: {
        height: 50,
        width: 50,
        marginHorizontal: 5,
        borderRadius: 5
    },
    descText: {
        marginHorizontal: 5,
        marginVertical: 5,
        color: "black"
    },
    episodeTile: {
        color: "black"
    },
    playIcon: {
        height: 22,
        width: 22,
        marginHorizontal: 10
    }
})
export default EpisodeListItem;
