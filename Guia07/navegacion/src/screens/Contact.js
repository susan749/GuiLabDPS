import React from 'react';

import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Button } from 'react-native';
const DATA = [
    {
        id: '1',
        title: 'Gato Britanico',
        src: require('./img/gato4.jpg'),
    },
    {
        id: '2',
        title: 'Himalayo',
        src: require('./img/gato7.jpg'),
    },
    {
        id: '3',
        title: 'Americano',
        src: require('./img/gato6.jpg'),
    },
    {
        id: '4',
        title: 'Bengala',
        src: require('./img/gato3.jpg'),
    },

];

const Item = ({ title, img, des }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Image style={styles.img} source={img} />
        <Text style={styles.title}>{des}</Text>
    </View>
);
export default function Contact(props) {
    const { navigation } = props;
     const renderItem = ({ item }) => (
      <Item title={item.title} img={item.src} des={item.des} />);
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
        backgroundColor: '#E6B0A',
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