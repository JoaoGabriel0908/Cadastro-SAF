import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../const/Colors";
import Button from "../components/Button";

const Splash = () => {
  const navigation = useNavigation();

  const navegarCadastro = () => {
    navigation.navigate("Cadastro");
  };

  const navegarListagem = () => {
    navigation.navigate("Listagem");
  };

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.content}>
        <View style={estilos.buttonCadastro}>
          <Button title="Cadastrar" onPress={navegarCadastro} />
        </View>
        <View style={estilos.buttonListagem}>
          <Button title="Pacientes" onPress={navegarListagem} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  container: {
    backgroundColor: COLORS.azulClaro,
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonCadastro:{
    width: 250,
    justifyContent: "center",
    marginBottom: 50,
  },
  buttonListagem:{
    width: 250,
    justifyContent: "center",
  }
});

export default Splash;
