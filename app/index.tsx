import { Link } from "expo-router";
import { Text } from "react-native";

export default function Page() {
    return (
        <>
            <Text>Top-level page</Text>
            <Link href={"/home"}>
                Open Model
            </Link>
        </>

    )
}