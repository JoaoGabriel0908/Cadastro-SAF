import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import apiPaciente from "../service/apiPaciente";
import COLORS from "../const/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Listagem = () => {
  // Pegando o valor do cod_paciente
  const [paciente, setPaciente] = useState([]);

  useEffect(() => {
    apiPaciente.get("/listarPaciente").then((paciente) => {
      console.log(paciente);
      setPaciente(paciente.data);
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: COLORS.azulEscuro }}>
      <SafeAreaView style={estilos.container}>
        <View style={estilos.containerPaciente}>
          {paciente.map((paciente) => (
            <TouchableOpacity
              key={paciente.cod_paciente}
              style={estilos.post}
              onPress={() =>
                navigation.navigate("Detalhes", {
                  cod_paciente: paciente.cod_paciente,
                })
              }
            >
              <View style={estilos.cardPaciente}>
                {/* <Icon size={70} color={COLORS.branco}/> */}
                <View style={estilos.paciente}>
                  <Icon
                    name="account-circle"
                    size={70}
                    style={{ marginEnd: 18 }}
                  />
                  <View style={{ flex: 1, width: "100%" }}>
                    {/* Nome */}
                    <Text>Nome Paciente</Text>
                    <Text style={estilos.titulo}>{paciente.nome_paciente}</Text>
                    {/* Email */}
                    <View style={estilos.caixaTexto}>
                      <Text>E-mail Paciente</Text>
                      <Text style={estilos.titulo}>
                        {paciente.email_paciente}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{ flexDirection: "row", width: "100%" }}>
                  <View style={[{ marginRight: 50 }, estilos.caixaTexto]}>
                    <Text>Telefone Paciente</Text>
                    <Text style={estilos.titulo}>
                      {paciente.telefone_paciente}
                    </Text>
                  </View>
                  <View style={estilos.caixaTexto}>
                    <Text>Celular Paciente</Text>
                    <Text style={estilos.titulo}>
                      {paciente.celular_paciente}
                    </Text>
                  </View>
                </View>
                <View style={estilos.caixaTexto}>
                  <Text>Nome Respons??vel</Text>
                  <Text style={estilos.titulo}>
                    {paciente.nome_responsavel}
                  </Text>
                </View>
                <View style={estilos.caixaTexto}>
                  <Text>Telefone Respons??vel</Text>
                  <Text style={estilos.titulo}>
                    {paciente.telefone_responsavel}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    marginTop: 100,
  },
  containerPaciente: {
    flex: 1,
    justifyContent: "center",
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  cardPaciente: {
    backgroundColor: COLORS.branco,
    height: 300,
    marginBottom: 30,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  titulo: {
    color: COLORS.azulEscuro,
    borderBottomColor: COLORS.azulEscuro,
    borderBottomWidth: 1,
  },
  paciente: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  caixaTexto: {
    marginTop: 10,
  },
});

export default Listagem;
