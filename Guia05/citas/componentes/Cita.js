import React from "react";
import { Text, StyleSheet, View, TouchableHighlight } from "react-native";
const Cita = ({ item, eliminarClientes }) => {
  const dialogoEliminar = (id) => {
    console.log("eliminando....", id);
    eliminarClientes(id);
  };
  return (
    <View style={styles.cita}>
      <View>
        <Text style={styles.label}>Cliente: </Text>
        <Text style={styles.texto}>{item.Cliente}</Text>
      </View>
      <View>
        <Text style={styles.label}>Propietario: </Text>
        <Text style={styles.texto}>{item.Propietario}</Text>
      </View>
      <View>
        <Text style={styles.label}>Cantidad: </Text>
        <Text style={styles.texto}>{item.Cantidad}</Text>
      </View>
      <View>
        <TouchableHighlight
          onPress={() => dialogoEliminar(item.id)}
          style={styles.btnEliminar}
        >
          <Text style={styles.textoEliminar}> Eliminar &times; </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cita: {
    backgroundColor: "#FFF",
    borderBottomColor: "#e1e1e1",
    borderStyle: "solid",
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  texto: {
    fontSize: 18,
  },
  btnEliminar: {
    padding: 10,
    backgroundColor: "red",
    marginVertical: 10,
  },
  textoEliminar: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default Cita;