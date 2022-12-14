import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Layout from "../components/Layout";
import COLORS from "../const/Colors";
import Input from "../components/Input";
import Button from "../components/Button";
import apiPaciente from "../service/apiPaciente";

const Cadastro = () => {
    const navigation = useNavigation();

    const [inputs, setInputs] = React.useState({
        // O useState sempre representa essa estrutura
        // Chave = inputs / valor = inputs
        nomePaciente: "",
        telefonePaciente: "",
        celularPaciente: "",
        emailPaciente: "",
        nomeResponsavel: "",
        telefoneResponsavel:"",
    });

    // FUNÇÃO QUE MANIPULA A ENTRADA DE DADOS NA
    // STATE NO MÉTODO OnChangeText
    const handleOnChange = (text, input) => {
        //O setInputs invoca o estado e passa para o prevState
        setInputs(
            (prevState) => (
                console.log(prevState),
                // console.log(input + ` ` + text)

                // Injeção de dados na State
                // Sobrepondo resultado do texto e colocando no prevState
                { ...prevState, [input]: text }
            )
        );
    };

    const [errors, setErrors] = React.useState([]);

    // Função Handler que configura as mensagens de erros na state
    // Pegando as mensagens de erros e onde ocorreu (input)
    const handleErrors = (errorMessage, input) => {
        // Quando usamos um par de parenteses quer dizer que ettamos dando um RETURN
        setErrors((prevState) => ({
            ...prevState,
            [input]: errorMessage,
        }));
    };

    // Função de validação
    const validate = () => {
        let validate = true;

        // Quando máo tem conteúdo o validate ficará falso e aparecerá a mensagem
        if (!inputs.nomePaciente) {
            validate = false;
            handleErrors("Informe o nome do paciente", "nomePaciente");
            // console.log('Título em branco')
        }
        if (!inputs.telefonePaciente) {
            validate = false;
            handleErrors("Informe o telefone do paciente", "telefonePaciente");
            // console.log('Descrição em branco')
        }
        if (!inputs.celularPaciente) {
            validate = false;
            handleErrors("Informe o celular do paciente", "celularPaciente");
            // console.log('Capa em branco')
        }
        if (!inputs.emailPaciente) {
            validate = false;
            handleErrors("Informe o email do paciente", "emailPaciente");
            // console.log('Capa em branco')
        }
        
        if (validate) {
            // Envia os dados para a API cadastrar.
            cadastrar();
            // navigation.navigate("Listagem")
            console.log('Cadastrou')
        }

        console.log(errors)
    };

    // Função que cria o cadastro com o post
    const cadastrar = () => {
        try {
            const response = apiPaciente.post('/cadastrarPaciente', {
                nome_paciente: inputs.nomePaciente,
                telefone_paciente: inputs.telefonePaciente,
                celular_paciente: inputs.celularPaciente,
                email_paciente: inputs.emailPaciente,
                nome_responsavel: inputs.nomeResponsavel,
                telefone_responsavel: inputs.telefoneResponsavel,
            })
            navigation.navigate("Listagem")
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <Layout>
            <View style={estilos.viewForm}>
                <Input
                    placeholder="Nome paciente *"
                    iconName="account"
                    error={errors.nomePaciente}
                    onFocus={() => {
                        // Tirando a mensagem de erro
                        handleErrors(null, "nomePaciente");
                    }}
                    onChangeText={(text) =>
                        handleOnChange(text, "nomePaciente")
                    }
                />
                <Input
                    placeholder="Telefone paciente *"
                    iconName="phone"
                    error={errors.telefonePaciente}
                    onFocus={() => {
                        // Tirando a mensagem de erro
                        handleErrors(null, "telefonePaciente");
                    }}
                    onChangeText={(text) =>
                        handleOnChange(text, "telefonePaciente")
                    }
                />
                <Input
                    placeholder="Celular paciente *"
                    iconName="cellphone"
                    error={errors.celularPaciente}
                    onFocus={() => {
                        // Tirando a mensagem de erro
                        handleErrors(null, "celularPaciente");
                    }}
                    onChangeText={(text) =>
                        handleOnChange(text, "celularPaciente")
                    }
                />
                <Input
                    placeholder="E-mail paciente *"
                    iconName="email"
                    error={errors.emailPaciente}
                    onFocus={() => {
                        // Tirando a mensagem de erro
                        handleErrors(null, "emailPaciente");
                    }}
                    onChangeText={(text) =>
                        handleOnChange(text, "emailPaciente")
                    }
                />
                <Input
                    placeholder="Nome responsável"
                    iconName="account-multiple"
                    // error={errors.nomePaciente}
                    onFocus={() => {
                        // Tirando a mensagem de erro
                        handleErrors(null, "nomeResponsavel");
                    }}
                    onChangeText={(text) =>
                        handleOnChange(text, "nomeResponsavel")}
                />
                <Input
                    placeholder="Telefone responsável"
                    iconName="phone-plus"
                    // error={errors.telefonePaciente}
                    onFocus={() => {
                        // Tirando a mensagem de erro
                        handleErrors(null, "telefoneResponsavel");
                    }}
                    onChangeText={(text) =>
                        handleOnChange(text, "telefoneResponsavel")}
                />
                <View style={estilos.botoes}>
                    <Button title="Registrar-se" onPress={validate}/>
                </View>
            </View>
        </Layout>
    );
};
const estilos = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewForm: {
        flex: 1,
    },
    imagemFundo: {
        justifyContent: "flex-end",
        flex: 3,
    },
    containerForm: {
        backgroundColor: "#FFF",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%",
    },
    botoes: {
        flexDirection: "row",
    },
    login: {
        alignItems: "center",
        textAlign: "center",
        fontSize: 16,
        color: COLORS.offWhite,
    },
});

export default Cadastro;
