import NoNewNotificationLandingScreen from "./screens/NoNewNotificationLandingScreen";

export default {
    name: "No New Notification",
    image: "https://pbcdn1.podbean.com/imglogo/image-logo/9135145/nnn-thumb-cmp.jpg",
    start: () => {
        return <NoNewNotificationLandingScreen/>
    },
    screens : [{
        name: "NoNewNotificationLandingScreen",
        component: NoNewNotificationLandingScreen
    }]
};
