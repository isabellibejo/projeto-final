import React from 'react';
import Image1 from '../assets/roupaM.2.jpeg'
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const ProductDetails2 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
           <View style={styles.header}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/logo.jpeg')} style={styles.image} />
                </View>
                <View style={{flexDirection: 'row', gap: 16, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons name="keyboard-arrow-left" size={32} color="white" />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.searchBar}
                        placeholder="O que você procura?"
                        placeholderTextColor="gray"
                    />
                </View>
            </View>
            <Image style={{ height: 300, width: '100%' }} source={Image1} />
            <View style={{ marginHorizontal: 16 }}>
                <Text style={{ color: 'red', fontWeight: '600', fontSize: 20, marginTop: 8 }}>R$45,90</Text>
                <Text style={{ fontSize: 16, marginTop: 8 }}>Esportivo</Text>
                <Text style={{ marginTop: 8 }} >Tamanhos</Text>
                <View style={{ flexDirection: 'row', gap: 16, marginTop: 8, }}>
                    <TouchableOpacity ><Text style={{ padding: 16, borderWidth: 1, borderColor: '#212121', borderRadius: 8 }}>M</Text></TouchableOpacity>
                    <TouchableOpacity ><Text style={{ padding: 16, borderWidth: 1, borderColor: '#212121', borderRadius: 8 }}>G</Text></TouchableOpacity>
                    <TouchableOpacity ><Text style={{ padding: 16, borderWidth: 1, borderColor: '#212121', borderRadius: 8 }}>GG</Text></TouchableOpacity>
                    <TouchableOpacity ><Text style={{ padding: 16, borderWidth: 1, borderColor: '#212121', borderRadius: 8 }}>G1</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        backgroundColor: '#6d56f9',
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    searchBar: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
        height: 40,
        borderRadius: 20,
        flex:1,
    },
    category: {
        marginVertical: 20,
    },
    categoryText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        marginLeft: 20,
        marginBottom: 10,
    },
    arrowLeft: {
        position: 'absolute',
        left: 10,
        top: '50%',
        transform: [{ translateY: -15 }],
    },
    arrowRight: {
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: [{ translateY: -15 }],
    },
    image: {
        marginLeft: 30,
        width: 120,
        height: 120,
        marginRight: 10,
        borderRadius: 8,
    },
});

export default ProductDetails2;