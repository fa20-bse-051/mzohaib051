import { StyleSheet, Dimensions } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerDark: {
        flex: 1,
        backgroundColor: "#000",
    },

    gravityCenter: {
        alignItems: "center",
        justifyContent: "center",
    },
    gravityTopCenter: {
        justifyContent: "flex-start", // Align items at the top
        alignItems: "center", // Center items along the horizontal axis
    },
    gravityTopEnd: {
        justifyContent: "flex-start",
        alignItems: "flex-end",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        alignItems: "center",
        backgroundColor: "green",
        padding: 10,
    },
    link: {
        textDecorationLine: "underline",
        color: "blue",
    },
    input: {
        height: 40,
        width: "80%",
        borderRadius: 12,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        alignSelf: "center",
    },
    inputHeading: {
        color: "grey",
        marginStart: "10%",
    },
    verticalView: {
        width: "100%",
    },
    tinyLogo: {
        width: 100,
        height: 100,
    },

    heading: {
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "#00fa",
        color: 'white',
        padding: 10
    },
    spacing: {
        height: 30,
    },
    tapbutton: {
        padding: 10,
        backgroundColor: "lightgrey",
        borderRadius: 10,
        backgroundColor: "#3AC3C4",
    },
    btnText: {
        color: "white",
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    checkboxLabel: {
        margin: 8,
    },
    textLight: {
        color: "white"
    },
    textDark: {
        color : "black"
    }, 
    highlightGreen: {
        backgroundColor: 'green'
    },
    highlightRed: {
        backgroundColor: 'red'
    },
    listitem: {
        backgroundColor: 'lightgrey',
        with: 120,
        height: 200,
        margin: 10,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    title:{
        backgroundColor: 'red'
    },
    item:{
        backgroundColor: '#aabbcc'
    },
    thumbnail:{
        width: 100, height: 150
    }
});
