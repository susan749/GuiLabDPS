import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Modal, Button, TouchableHighlight } from 'react-native';

const App = () => {
  const [modalVisiblePlaya, setModalVisiblePlaya] = useState(false);
  const [modalVisiblePlatillos, setModalVisiblePlatillos] = useState(false);
  const [modalVisibleRutas, setModalVisibleRutas] = useState(false);

  return (
    <>
      <ScrollView>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisiblePlaya}
          onRequestClose={() => { alert('Modal has been closed'); }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Tipos de habitaciones del hotel</Text>
              <Text>Se cuentan con diversos tipos de habitaciones, entre ellas lujo, individual, suite nupcial, suite luna de miel, suite junior .</Text>
              <Button title="Cerrar" onPress={() => (setModalVisiblePlaya(!modalVisiblePlaya))}></Button>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisiblePlatillos}
          onRequestClose={() => { alert('Modal has been closed'); }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Servicios de hotel</Text>
              <Text>Entre algunos de los servicios que el hotel le brinda a sus huespedes estan el acceso a piscinas, Wifi, Bufet, limpieza.</Text>
              <Button title="Cerrar" onPress={() => (setModalVisiblePlatillos(!modalVisiblePlatillos))}></Button>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleRutas}
          onRequestClose={() => { alert('Modal has been closed'); }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Rutas cercanas</Text>
              <Text>El hotel cuenta con muchas opciones de sitios turisticos para poder visitar y disfrutar.</Text>
              <Button title="Cerrar" onPress={() => (setModalVisibleRutas(!modalVisibleRutas))}></Button>
            </View>
          </View>
        </Modal>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.banner}
            source={require('./src/imagen/sa.jpg')}
          />
        </View>

        <View styles={styles.contenedor}>
          <Text style={styles.titulo}>Tipos de habitaciones del hotel</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight onPress={() => { setModalVisiblePlaya(!modalVisiblePlaya) }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/imagen/H1.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/imagen/H2.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/imagen/h3.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/imagen/h4.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/imagen/h5.jpg')}
              />
            </View>
          </ScrollView>

          <Text style={styles.titulo}>Servicios</Text>
          <View>
            <View>
              <TouchableHighlight onPress={() => { setModalVisiblePlatillos(!modalVisiblePlatillos) }}>
                <Image
                  style={styles.mejores}
                  source={require('./src/imagen/servicio3.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require('./src/imagen/servicio1.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require('./src/imagen/servicio2.jpg')}
              />
            </View>
          </View>

          <Text style={styles.titulo}>Lugares de interes cercanos</Text>
          <View style={styles.listado}>

            <View style={styles.listaItem}>
              <TouchableHighlight onPress={() => { setModalVisibleRutas(!modalVisibleRutas) }}>
                <Image
                  style={styles.mejores}
                  source={require('./src/imagen/coatepeque.jpg')}
                />
              </TouchableHighlight>
            </View>

            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require('./src/imagen/sebas.jpg')}
              />
            </View>

            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require('./src/imagen/izalco.jpg')}
              />
            </View>

            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require('./src/imagen/planes.jpg')}
              />
            </View>
          </View>

        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 150,
    flex: 1
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10
  },
  contenedor: {
    marginHorizontal: 10
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  listaItem: {
    flexBasis: '49%'
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1
  },
  Modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center'
  }
});

export default App;