import { useNavigationContainerRef} from "@react-navigation/native";
import NoNewNotificationEpisode from "../app/no-new-notification/screens/NoNewNotificationEpisode";
import NoNewNotificationLandingScreen from "../app/no-new-notification/screens/NoNewNotificationLandingScreen";
import HomeScreen from "../platform/screens/HomeScreen";

export const navigationRef = useNavigationContainerRef();

export const navigateTo = (screenName: string)=> {
    return navigationRef.navigate({
        name: screenName});
}

export const screenMap = [
    {
      name: "HomeScreen",
      component: HomeScreen
    },
    {
      name: "NoNewNotificationLandingScreen",
      component: NoNewNotificationLandingScreen
    },
    {
      name: "NoNewNotificationEpisode",
      component: NoNewNotificationEpisode
    },
  ]