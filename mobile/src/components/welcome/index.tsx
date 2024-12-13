import { Image, Text, View } from "react-native"

import { s } from "./style"

export function Welcome() {
    return (
        <View
            style={{
                flex: 1, padding: 40, gap: 40}}>
            <Welcome />
        </View>
    )
}