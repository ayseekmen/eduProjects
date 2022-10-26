import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    inner_container: {
        margin: 10,
        overflow: "hidden",
        position: "relative",
        borderRadius: 16
    },
    image: {
        width: Dimensions.get("window").width,
        minHeight: 200,
        resizeMode: 'cover',
    },
    title: {
        backgroundColor: "rgba(0,0,0,.5)",
        color: "white",
        position: "absolute",
        width: Dimensions.get("window").width,
        bottom: 0,
        textAlign: "right",
        paddingRight: 30,
        fontSize: 30,
        fontWeight: "bold",
        paddingLeft: 15,
        paddingVertical: 3,
    }
})