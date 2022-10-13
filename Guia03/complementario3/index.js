import { AppRegistry } from 'react-native';
import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
const DATA = [
   {
      id: '1',
      title: 'Pupusas',

      src: require('./src/imgs/pupusas.jpg'),
      des: 'Se trata de tortillas hechas de masa de maíz o de arroz que pueden rellenarse con diferentes alimentos ya sea frijoles con queso, solo queso, etc y se compañan con salsa de tomate y curtido de repollo',
   },
   {
      id: '2',
      title: 'Tamal de elote',
      src: require('./src/imgs/tamales.jpg'),
      des: 'Este tipo de tamal se elabora con los granos de maíz cuando la mazorca aún está tierna. Se le echa a la masa crema de leche, leche, manteca y en ocasiones, azúcar en vez de sal.',
   },
   {
      id: '3',
      title: 'Elotes locos',
      src: require('./src/imgs/eloteslocos.jpg'),
      des: 'Se cocinan los elotes en agua hasta que los granos estén blandos; se les debe insertar un palillo a lo largo de la mazorca para sostenerla fácilmente.Al estar listos, se bañan con salsa mayonesa, se les agrega un poco de mostaza, unas líneas de salsa de tomate y finalmente, otras de salsa negra.Para culminar,el elote se espolvorea con queso rallado',
   },
];
const Item = ({ title, img, des }) => (
   <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.img} source={img} />
      <Text style={styles.title}>{des}</Text>
   </View>
);

const App = () => {
   const renderItem = ({ item }) => (
      <Item title={item.title} img={item.src} des={item.des} />
   );

   return (
      <SafeAreaView style={styles.container}>
         <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
         />
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
   },
   item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      alignItems: 'center'
   },
   title: {
      fontSize: 32,
   },
   img: {
      width: 200,
      height: 125,
      borderWidth: 2,
      borderColor: '#d35647',
      resizeMode: 'contain',
      margin: 8
   }
});
AppRegistry.registerComponent("complementario3", () => App);