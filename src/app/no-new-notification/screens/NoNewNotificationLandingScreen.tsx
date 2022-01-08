import React from "react";
import Background from "../../../platform/components/Background";
import EpisodeList from "../components/EpisodeList";
import HeaderBoard from "../components/HeaderBoard";
import HeaderDescription from "../components/HeaderDescription";
const img =  "https://pbcdn1.podbean.com/imglogo/image-logo/9135145/nnn-thumb-cmp.jpg";
const podcastName = "No New Notifications from Kanan & Manek";
const desc = "Comedian-designer duo Kanan Gill & Manek D'Silva are finally giving the least important topics in the world the attention they rightfully deserve in this brand new podcast. Funny stories, experiments & questionnaires, all wrapped up in the feeling of checking your phone after many hours and still having no new notifications."
const NoNewNotificationLandingScreen = () => {
    return <Background>
        <HeaderBoard img={img} title={podcastName}/>
        <HeaderDescription desc={desc}/>
        <EpisodeList/>
    </Background>
};

export default NoNewNotificationLandingScreen;

