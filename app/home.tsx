import { Platform, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Link } from "expo-router";

export default function HomeMainScreen() {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text>Welcome in Home Main Screen ...</Text>
            <Link href={"/settings"}>
                Go To Profile
            </Link>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>

    )
}