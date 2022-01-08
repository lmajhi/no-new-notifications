import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Background from "../../../platform/components/Background";
import { getTime } from "../../../utils/dates";

const podcastName = "No New Notifications from Kanan & Manek";
const NoNewNotificationEpisode = (props: any) => {
const episode = props.route.params.episode;

    return <Background>
        <ScrollView style={styles.container}>
            <Text style={styles.titleText}>{episode.title[0]}</Text>
            <View style={styles.iconPodcastContainer}>
                <Image style={styles.podcastLogoSmall}
                    source={{ uri: episode.image._href }} />
                <Text style={styles.podcastName}>{podcastName}</Text>
            </View>
            <Text style={styles.publishDate}>{`${getTime(episode.pubDate)} - ${episode.duration.__text}`}</Text>
            <View style={styles.playInfoContainer}>
                <Image style={styles.playButton}
                    source={require("../assets/play.png")} />
            </View>
            <Text style={styles.description}>{episode.description}</Text>
        </ScrollView>
    </Background>
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    titleText: {
        color: "black",
        fontSize: 40,
        fontWeight: "bold",
        marginTop: 20
    },
    iconPodcastContainer: {
        height: 40,
        flexDirection: "row",
        alignItems: "center",
    },
    podcastLogoSmall: {
        height: 35,
        width: 35,
        marginHorizontal: 5
    },
    podcastName: {
        color: "black"
    },
    description: {
        marginTop: 10,
        color: "black"
    },
    publishDate: {
        color: "black",
        marginHorizontal: 8
    },
    playInfoContainer: {
        height: 60,
        justifyContent: "center"
    },
    playButton: {
        height: 50,
        width: 50,
        alignSelf: "flex-end",
        marginHorizontal: 5
    }
})
export default NoNewNotificationEpisode;