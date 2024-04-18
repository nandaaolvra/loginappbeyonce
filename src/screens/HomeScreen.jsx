import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Bem vinda(o) ao nosso app</Text>
      <text>
        .
      </text>
      <Button
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
        mode="contained"
      
      >
        Login
      </Button>
    </View>
  );
}
