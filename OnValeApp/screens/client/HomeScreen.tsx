//REACT
import React, { useState, useCallback } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

//COMPONENTS
import FileExplorer, { ExplorerNode } from '../../components/FileExplorer';
import Carousel, { Banner } from '../../components/Carousel';
import Shortcuts from '../../components/Shortcuts';
import useTheme from '../../components/Themes';


//FUNCTION
export default function HomeScreen() {
  //STATE
  const [pathStack, setPathStack] = useState<ExplorerNode[]>([]);

  //STYLE
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background2
    },
    innercontainer: {
      flex: 1,
      backgroundColor: colors.background2
    },
    carouselContainer: {
      overflow: 'hidden'
    },
  });


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
    { id: '1', image: require('../../assets/banner1.jpg'), url: "https://www.instagram.com/p/DMKvuo2st0i/" },
    { id: '2', image: require('../../assets/banner2.jpg'), url: "https://www.instagram.com/p/DMIK8L0MQZM/" },
    { id: '3', image: require('../../assets/banner3.jpeg') },
  ];


  //HANDLES
  const getNodeById = useCallback((id: string, nodes: ExplorerNode[]): ExplorerNode | null => {
    for (const n of nodes) {
      if (n.id === id) return n;
      if (n.children) {
        const found = getNodeById(id, n.children);
        if (found) return found;
      }
    }
    return null;
  }, []);

  const buildPathStack = useCallback((id: string) => {
    const stack: ExplorerNode[] = [];
    function dfs(nodes: ExplorerNode[], targetId: string, trail: ExplorerNode[]) {
      for (const n of nodes) {
        const newTrail = [...trail, n];
        if (n.id === targetId) {
          stack.push(...newTrail.filter(x => x.type === 'folder'));
          return true;
        }
        if (n.children && dfs(n.children, targetId, newTrail)) return true;
      }
      return false;
    }
    dfs(fakeData, id, []);
    return stack;
  }, []);

  const jumpToFolder = useCallback((folderId: string) => {
    const stack = buildPathStack(folderId);
    setPathStack(stack);
  }, [buildPathStack]);

  //JSX
  return (
    <View style={styles.container}>
      <ScrollView  contentContainerStyle={styles.innercontainer}>
        <View style={styles.carouselContainer}>
          <Carousel data={banners} height={300} />
        </View>

        <FileExplorer
          data={fakeData}
          pathStack={pathStack}
          setPathStack={setPathStack}
        />
      </ScrollView>

      <Shortcuts
        onHome={() => setPathStack([])}
        onGoBack={() => setPathStack(s => s.slice(0, -1))}
        onOpenFolderPessoal={() => jumpToFolder('1')}
        onOpenFolderFiscal={() => jumpToFolder('2')}
        onPlus={() => console.log('Clicouuuuu!')}
      />
    </View>
  );

}

