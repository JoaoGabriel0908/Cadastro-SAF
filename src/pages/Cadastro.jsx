import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import COLORS from "../const/Colors";
import Input from "../components/Input";
import Button from "../components/Button";

const Cadastro = () => {
    const [inputs, setInputs] = React.useState({
        // O useState sempre representa essa estrutura
        // Chave = inputs / valor = inputs
        nomePaciente: "",
        telefonePaciente: "",
        celularPaciente: "",
        emailPaciente: "",
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
        // Quando usamos um par de parenteses quer dizer que estamos dando um RETURN
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
            console.log("Cadastrou");
        }
    };

    // Função que cria o cadastro com o post
    const cadastrar = () => {
        try {
            console.log('Cadastrado');
        } catch (error) {}
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
                        handleErrors(null, "nomePaciente");
                    }}
                    onChangeText={(text) =>
                        handleOnChange(text, "nomePaciente")
                    }
                />
                <Input
                    placeholder="Nome responsável"
                    iconName="account-multiple"
                />
                <Input
                    placeholder="Telefone responsável"
                    iconName="phone-plus"
                />
                <View style={estilos.botoes}>
                    <Button title="Registrar-se" onPress={validate}/>
                </View>
                <Text style={estilos.login}>Já tem uma conta?Login</Text>
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
