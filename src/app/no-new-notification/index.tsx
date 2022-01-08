import NoNewNotificationLandingScreen from "./screens/NoNewNotificationLandingScreen";
import NoNewNotificationEpisode from "./screens/NoNewNotificationEpisode";

export default {
    name: "No New Notification",
    image: "https://pbcdn1.podbean.com/imglogo/image-logo/9135145/nnn-thumb-cmp.jpg",
    start: () => {
        return <NoNewNotificationLandingScreen /> //call navigateTo here

    },
    screens: [{
        name: "NoNewNotificationLandingScreen",
        component: NoNewNotificationLandingScreen
    }, {
        name: "NoNewNotificationEpisode",
        component: NoNewNotificationEpisode
    }]
};
