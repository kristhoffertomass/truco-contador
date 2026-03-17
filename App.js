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
import { useState } from "react";
import { Text, View, Button } from "react-native";

export default function App() {
  const [pontuacao, setPontuacao] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Marcador</Text>
      <Text style={{ fontSize: 60 }}>{pontuacao}</Text>

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
import { Text, View, Button } from "react-native";

export default function App() {
  const [pontuacaoNos, setPontuacaoNos] = useState(0);
  const [pontuacaoEles, setPontuacaoEles] = useState(0);
  const [vitoriaNos, setVitoriaNos] = useState(0);
  const [vitoriaEles, setVitoriaEles] = useState(0);

  const adicionarPontosNos = (p) => {
    let total = pontuacaoNos + p;
    if (total >= 12) {
      setPontuacaoNos(0);
      setPontuacaoEles(0);
      setVitoriaNos(vitoriaNos + 1);
    } else {
      setPontuacaoNos(total);
    }
  };

  const adicionarPontosEles = (p) => {
    let total = pontuacaoEles + p;
    if (total >= 12) {
      setPontuacaoNos(0);
      setPontuacaoEles(0);
      setVitoriaEles(vitoriaEles + 1);
    } else {
      setPontuacaoEles(total);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

      <View style={{ marginBottom: 40, alignItems: "center" }}>
        <Text style={{ fontSize: 24 }}>Nós</Text>
        <Text style={{ fontSize: 50 }}>{pontuacaoNos}</Text>
        <Text>Ganhou: {vitoriaNos}</Text>

        <Button title="+1" onPress={() => adicionarPontosNos(1)} />
      </View>

      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 24 }}>Eles</Text>
        <Text style={{ fontSize: 50 }}>{pontuacaoEles}</Text>
        <Text>Ganhou: {vitoriaEles}</Text>

        <Button title="+1" onPress={() => adicionarPontosEles(1)} />
      </View>

    </View>
  );
}
import { useState } from "react";
import { Text, View, Button } from "react-native";

export default function App() {
  const [pontuacaoNos, setPontuacaoNos] = useState(0);
  const [pontuacaoEles, setPontuacaoEles] = useState(0);
  const [vitoriaNos, setVitoriaNos] = useState(0);
  const [vitoriaEles, setVitoriaEles] = useState(0);

  const adicionarPontosNos = (p) => {
    let total = pontuacaoNos + p;
    if (total >= 12) {
      setPontuacaoNos(0);
      setPontuacaoEles(0);
      setVitoriaNos(vitoriaNos + 1);
    } else {
      setPontuacaoNos(total);
    }
  };

  const adicionarPontosEles = (p) => {
    let total = pontuacaoEles + p;
    if (total >= 12) {
      setPontuacaoNos(0);
      setPontuacaoEles(0);
      setVitoriaEles(vitoriaEles + 1);
    } else {
      setPontuacaoEles(total);
    }
  };

  const reiniciarRodada = () => {
    setPontuacaoNos(0);
    setPontuacaoEles(0);
  };

  const reiniciarJogo = () => {
    setPontuacaoNos(0);
    setPontuacaoEles(0);
    setVitoriaNos(0);
    setVitoriaEles(0);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

      <View style={{ marginBottom: 30, alignItems: "center" }}>
        <Text style={{ fontSize: 24 }}>Nós</Text>
        <Text style={{ fontSize: 50 }}>{pontuacaoNos}</Text>
        <Text>Ganhou: {vitoriaNos}</Text>

        <Button title="+1" onPress={() => adicionarPontosNos(1)} />
        <Button title="TRUCO (3)" onPress={() => adicionarPontosNos(3)} />
      </View>

      <View style={{ marginBottom: 30, alignItems: "center" }}>
        <Text style={{ fontSize: 24 }}>Eles</Text>
        <Text style={{ fontSize: 50 }}>{pontuacaoEles}</Text>
        <Text>Ganhou: {vitoriaEles}</Text>

        <Button title="+1" onPress={() => adicionarPontosEles(1)} />
        <Button title="TRUCO (3)" onPress={() => adicionarPontosEles(3)} />
      </View>

      <View style={{ marginTop: 20 }}>
        <Button title="REINICIAR" onPress={reiniciarRodada} />
        <Button title="NOVO JOGO" onPress={reiniciarJogo} />
      </View>

    </View>
  );
}