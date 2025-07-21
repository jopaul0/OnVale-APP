///REACT
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//COMPONENTS
import SafeArea from '../components/SafeArea';
import FileExplorer, { ExplorerNode } from '../components/FileExplorer';

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

export default function HomeScreen() {
  return (
      <FileExplorer data={fakeData} />
  );
}

