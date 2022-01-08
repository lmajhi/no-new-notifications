import { useNavigationContainerRef} from "@react-navigation/native";

export const navigationRef = useNavigationContainerRef();

export const navigateTo = (screenName: string)=> {
    return navigationRef.navigate({
        name: screenName});
}