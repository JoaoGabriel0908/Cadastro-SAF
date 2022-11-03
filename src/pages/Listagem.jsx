import { View, Text } from "react-native";
import React from "react";

const Listagem = ({ route, navigation }) => {
    // Pegando o valor do cod_paciente
    const { cod_paciente } = route.params;
    const [paciente, setPaciente] = useState({
        nome_paciente: "",
        telefone_paciente: '',
        celular_paciente: '',
        email_paciente: '',
        nome_responsavel: '',
        telefone_responsavel: '',
    });

    useEffect(() => {
      apiLivraria.get(`/listarPaciente/${cod_paciente}`).then(paciente => {
        setPaciente(paciente.data[0]);
      });
    }, []);


    return (
        <View>
            <Text>Listagem</Text>
        </View>
    );
};

export default Listagem;
