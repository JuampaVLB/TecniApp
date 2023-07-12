import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [showOtherView, setShowOtherView] = useState(false);

  const handleViewPress = () => {
    setShowOtherView(true);
  };

  return (
    <ImageBackground
      source={require("./assets/img/fondo.png")}
      style={styles.backgroundImage}
    >
      {showOtherView ? (
        <View style={styles.container_options}>
          <View style={styles.titulo}>
            <Text style={styles.tituloTexto}>Que Buscas</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setShowOtherView(false)}
          >
            <Text style={styles.text2}>ELECTRICISTA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text2}>GASISTA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text2}>PLOMERO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text2}>REFRIGERACION</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text2}>PINTOR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text2}>DURLOCKISTA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text2}>ALBANIL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text2}>CARPINTERIA</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <TouchableOpacity style={styles.columnRegister}>
            <Text style={styles.text}>REGISTRO</Text>
          </TouchableOpacity>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.column} onPress={handleViewPress}>
              <Text style={styles.text}>Cliente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.column} onPress={handleViewPress}>
              <Text style={styles.text}>Tecnico</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // Vistas_Principales

  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  container_options: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    width: "100%",
    height: "50%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  column: {
    width: 250,
    height: 100,
    backgroundColor: "#24508d",
    alignItems: "center",
    justifyContent: "center",
  },
  columnRegister: {
    width: 200,
    height: 80,
    backgroundColor: "#24508d",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: -200,
  },
  text: {
    fontSize: 35,
    color: "white",
    fontWeight: "bold",
  },

  // Vistas_Secundarias

  titulo: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    borderColor: "#000",
    borderWidth: 10,
    marginBottom: 40,
    paddingBottom: 5,
    paddingTop: 5,
  },
  tituloTexto: {
    fontSize: 40,
    whiteSpace: "nowrap",
    minWidth: "50%",
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "80%",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "red",
    marginBottom: 10,
    color: "black",
    backgroundColor: "#fff",
    marginVertical: 10,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  text2: {
    fontSize: 30,
  },
});
