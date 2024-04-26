import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Primeiro cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Olá Maria Eduarda</Text>
      </View>

      {/* Segundo cabeçalho - Meus pedidos */}
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>Meus pedidos</Text>
        <View style={styles.iconsContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="cart" size={24} color="black" />
            <Text style={styles.iconText}>Pedidos</Text>
          </View>
          <View style={styles.iconContainer}>
            <Ionicons name="heart" size={24} color="black" />
            <Text style={styles.iconText}>Favoritos</Text>
          </View>
          <View style={styles.iconContainer}>
            <Ionicons name="settings" size={24} color="black" />
            <Text style={styles.iconText}>Configurações</Text>
          </View>
          <View style={styles.iconContainer}>
            <Ionicons name="log-out" size={24} color="black" />
            <Text style={styles.iconText}>Sair</Text>
          </View>
        </View>
      </View>

      {/* Terceiro cabeçalho - Mais serviços */}
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>Mais serviços</Text>
        <View style={styles.iconsContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="card" size={24} color="black" />
            <Text style={styles.iconText}>Pagamento</Text>
          </View>
          <View style={styles.iconContainer}>
            <Ionicons name="gift" size={24} color="black" />
            <Text style={styles.iconText}>Cupons</Text>
          </View>
          <View style={styles.iconContainer}>
            <Ionicons name="help-circle" size={24} color="black" />
            <Text style={styles.iconText}>Ajuda</Text>
          </View>
        </View>
      </View>

      {/* Quarto cabeçalho - Você talvez goste */}
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderTextCenter}>Você talvez goste</Text>
        <View style={styles.imageContainer}>
          {/* Primeira sequência de fotos */}
          <View style={styles.imageRow}>
            <Image source={require('../assets/foto1.jpeg')} style={styles.image} />
            <Image source={require('../assets/foto2.jpeg')} style={styles.image} />
            <Image source={require('../assets/foto3.jpeg')} style={styles.image} />
          </View>
          {/* Segunda sequência de fotos */}
          <View style={styles.imageRow}>
            <Image source={require('../assets/foto4.jpeg')} style={styles.image} />
            <Image source={require('../assets/foto5.jpeg')} style={styles.image} />
            <Image source={require('../assets/WhatsApp Image 2024-04-19 at 09.48.28.jpeg')} style={styles.image} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  icon: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subHeader: {
    marginTop: 50,
  },
  subHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeaderTextCenter: {
    marginTop: -20,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 5,
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  imageRow: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 20,
  },
  image: {
    width: 100,
    height: 100,
    justifyContent: 'space-between',
  },
});

export default Profile;