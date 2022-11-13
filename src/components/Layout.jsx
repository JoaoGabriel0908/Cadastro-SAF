import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../const/Colors";

export default function Layout(props) {

    return (
        <SafeAreaView style={estilos.container}>
            <View style={estilos.imagemFundo}>
            </View>
            <View style={estilos.containerForm}>{props.children}</View>
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        height: "100%",
        backgroundColor: COLORS.azulEscuro,
    },
    imagemFundo: {
        justifyContent: "center",
        flex: 3,
        backgroundColor: COLORS.azulEscuro,
        alignItems: "center",
    },
    containerForm: {
        backgroundColor: COLORS.azulClaro,
        justifyContent: "flex-start",
        height: "80%",
        maxHeight: "100%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%",
        paddingBottom: 30,
        
    },
    text: {
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
    },
    textTitle: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        color: COLORS.offWhite,
        fontWeight: "bold",
        fontSize: 25,
    },
});
