import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import EpisodeListItem from "./EpisodeListItem";
import episodeData from "../assets/episode.json";
let episodes = episodeData.rss.channel.item;

const EpisodeList = () => {
    return <View style={styles.container}>
        <FlatList data={episodes}
        renderItem={EpisodeListItem}
        keyExtractor={item => item.guid["__text__"]}/>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginVertical:10,
        marginHorizontal: 12,
    }
})
export default EpisodeList;
