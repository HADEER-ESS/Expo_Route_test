import { Link } from "expo-router";
import { Text } from "react-native";

export default function SettingMainScreen() {
    return (
        <>
            <Text>Welcome in Setting Main Screen</Text>
            <Link href={"/settings/hadeer"}>
                <Text>Go To User Profile</Text>
            </Link>
        </>
    )
}