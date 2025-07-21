///REACT
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

//COMPONENTS
import FileExplorer, { ExplorerNode } from '../components/FileExplorer';
import Carousel, { Banner } from '../components/Carousel';

//TEST
const fakeData: ExplorerNode[] = [
  {
    id: '1',
    name: 'Departamento Pessoal',
    type: 'folder',
    children: [
      { id: '1-1', name: 'Folha_de_Pagamento.pdf', type: 'file' },
      { id: '1-2', name: 'Registros.csv', type: 'file' },
    ],
  },
  {
    id: '2',
    name: 'Departamento Fiscal',
    type: 'folder',
    children: [
      { id: '2-1', name: 'Nota1.xml', type: 'file' },
      { id: '2-2', name: 'Relatorio.xlsx', type: 'file' },
    ],
  },
  { id: '3', name: 'Manual.pdf', type: 'file' },
];

const banners: Banner[] = [
  { id: '1', image: require('../assets/banner1.jpeg') },
  { id: '2', image: require('../assets/banner2.jpeg') },
  { id: '3', image: require('../assets/banner3.jpeg') },
];

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.carouselContainer}>
        <Carousel data={banners} height={300} />
      </View>
      <FileExplorer data={fakeData} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    margin:16,
    borderRadius: 16,
    overflow: 'hidden',
  },
});

