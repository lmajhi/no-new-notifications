import React from 'react';
import Background from '../components/Background';
import HomePodcastItem from '../components/HomePodcastItem';
import { FlatGrid } from 'react-native-super-grid';

const podcastList = [{
    name: "No New Notification",
    image: "https://pbcdn1.podbean.com/imglogo/image-logo/9135145/nnn-thumb-cmp.jpg",
    start: () => console.log("No new notif")
},{
    name: "No New Notification",
    image: "https://pbcdn1.podbean.com/imglogo/image-logo/9135145/nnn-thumb-cmp.jpg",
    start: ""
},{
    name: "No New Notification",
    image: "https://pbcdn1.podbean.com/imglogo/image-logo/9135145/nnn-thumb-cmp.jpg",
    start: ""
},{
    name: "No New Notification",
    image: "https://pbcdn1.podbean.com/imglogo/image-logo/9135145/nnn-thumb-cmp.jpg",
    start: ""
}];

const HomeScreen = () => {
    return (<Background>
        <FlatGrid
            style={{ marginTop: 10}}
            spacing={10}
            data={podcastList}
            renderItem={({item}) => (<HomePodcastItem item={item}/>)}
        />
    </Background>)
}

export default HomeScreen;
