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
import { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default function App() {
  const [pontuacaoNos, setPontuacaoNos] = useState(0);
  const [pontuacaoEles, setPontuacaoEles] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.time}>
        <Text style={styles.titulo}>Nós</Text>
        <Text style={styles.numero}>{pontuacaoNos}</Text>
        <Button title="+" onPress={() => setPontuacaoNos(pontuacaoNos + 1)} />
      </View>

      <View style={styles.time}>
        <Text style={styles.titulo}>Eles</Text>
        <Text style={styles.numero}>{pontuacaoEles}</Text>
        <Button title="+" onPress={() => setPontuacaoEles(pontuacaoEles + 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  time: {
    alignItems: "center",
  },
  titulo: {
    fontSize: 24,
  },
  numero: {
    fontSize: 60,
  },
});