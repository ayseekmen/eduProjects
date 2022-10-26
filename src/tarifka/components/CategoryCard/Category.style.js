import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        paddingVertical: 7,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: "grey",
        marginBottom: 12,
        alignItems: "center",
        paddingLeft: 10,
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    category_name: {
        color: "black",
        fontSize: 20,
        marginLeft: 10,
    },
})