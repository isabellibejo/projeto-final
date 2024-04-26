import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/logo.jpeg')} style={styles.image} />
        </View>
        <TextInput
          style={styles.searchBar}
          placeholder="O que você procura?"
          placeholderTextColor="gray"
        />

      </View>
      <ScrollView>
        <View style={styles.category}>
          <Text style={styles.categoryText}>Feminino</Text>
          {/* Adicione a fileira de fotos para a categoria feminina aqui */}
          <TouchableOpacity style={styles.arrowLeft}>
            {/* Ícone de seta para a esquerda */}
          </TouchableOpacity>
          <ScrollView horizontal>
            {/* Adicione as fotos da categoria feminina aqui */}
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetails1')}>
              <Image source={require('../assets/roupaF.1.jpeg')} style={styles.image} />
            </TouchableOpacity>
            <Image source={require('../assets/roupaF.2.jpeg')} style={styles.image} />
            <Image source={require('../assets/roupaF.3.jpeg')} style={styles.image} />
            <Image source={require('../assets/roupaF.4.jpeg')} style={styles.image} />
            <Image source={require('../assets/roupaF.5.jpeg')} style={styles.image} />
            <Image source={require('../assets/roupaF.6.jpeg')} style={styles.image} />
          </ScrollView>
          <TouchableOpacity style={styles.arrowRight}>
            {/* Ícone de seta para a direita */}
          </TouchableOpacity>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryText}>Masculino</Text>
          {/* Adicione a fileira de fotos para a categoria masculina aqui */}
          <TouchableOpacity style={styles.arrowLeft}>
            {/* Ícone de seta para a esquerda */}
          </TouchableOpacity>
          <ScrollView horizontal>
            {/* Adicione as fotos da categoria masculina aqui */}
            <Image source={require('../assets/roupaM.1.jpeg')} style={styles.image} />
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetails2')}>
              <Image source={require('../assets/roupaM.2.jpeg')} style={styles.image} />
            </TouchableOpacity>
            <Image source={require('../assets/roupaM.3.jpeg')} style={styles.image} />
            <Image source={require('../assets/roupaM.4.jpeg')} style={styles.image} />
            <Image source={require('../assets/roupaM.5.jpeg')} style={styles.image} />
            <Image source={require('../assets/roupaM.6.jpeg')} style={styles.image} />
          </ScrollView>
          <TouchableOpacity style={styles.arrowRight}>
            {/* Ícone de seta para a direita */}
          </TouchableOpacity>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryText}>Calçados</Text>
          {/* Adicione a fileira de fotos para a categoria de calçados aqui */}
          <TouchableOpacity style={styles.arrowLeft}>
            {/* Ícone de seta para a esquerda */}
          </TouchableOpacity>
          <ScrollView horizontal>
            {/* Adicione as fotos da categoria de calçados aqui */}
            <Image source={require('../assets/sapato1.jpeg')} style={styles.image} />
            <Image source={require('../assets/sapato2.jpeg')} style={styles.image} />
            <Image source={require('../assets/sapato3.jpeg')} style={styles.image} />
            <Image source={require('../assets/sapato4.jpeg')} style={styles.image} />
            <Image source={require('../assets/sapato5.jpeg')} style={styles.image} />
            <Image source={require('../assets/sapato6.jpeg')} style={styles.image} />
          </ScrollView>
          <TouchableOpacity style={styles.arrowRight}>
            {/* Ícone de seta para a direita */}
          </TouchableOpacity>
        </View>
      </ScrollView>
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

export default Home;