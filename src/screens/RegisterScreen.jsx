import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useState } from "react";
import { styles } from "../config/styles";

export default function RegisterScreen({ navigation }) {
    const [repetirSenha, setRepetirSenha] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [logradouro, setLogradouro] = useState("");


  return (
    <View style={styles.container}>
        <View style={styles.innercontainer}>
      <Text>Faça seu Registro</Text>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry // faz com que o campo seja senha com *
      />
      <TextInput
        placeholder="Repita sua senha"
        value={repetirSenha}
        onChangeText={setRepetirSenha}
        secureTextEntry // faz com que o campo seja senha com *
      />
      <TextInput
        placeholder="Digite sua cidade"
        value={cidade}
        onChangeText={setCidade}
      />
        <TextInput
        placeholder="Digite seu Estado"
        value={estado}
        onChangeText={setEstado}
      />
        <TextInput
        placeholder="Digite seu Logradouro"
        value={logradouro}
        onChangeText={setLogradouro}
      />
    
      <Button onPress={() => navigation.navigate("LoginScreen")}>
         Voltar ao Login 
       </Button>
       </View>
    </View>
  );
}