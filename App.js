import { useState } from "react";
import { Text, View, Button } from "react-native";

export default function App() {
  const [pontuacao, setPontuacao] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Marcador</Text>
      <Text>{pontuacao}</Text>

      <Button title="+" onPress={() => setPontuacao(pontuacao + 1)} />
      <Button
        title="-"
        onPress={() =>
          setPontuacao(pontuacao > 0 ? pontuacao - 1 : 0)
        }
      />
    </View>
  );
}