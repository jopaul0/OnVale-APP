//REACT
import React from 'react';
import {
  View, Text, StyleSheet, FlatList, TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export type ExplorerNode = {
  id: string;
  name: string;
  type: 'folder' | 'file';
  children?: ExplorerNode[];
};

type FileExplorerProps = {
  data: ExplorerNode[];
  pathStack: ExplorerNode[];
  setPathStack: React.Dispatch<React.SetStateAction<ExplorerNode[]>>;
};

export default function FileExplorer({
  data,
  pathStack,
  setPathStack
}: FileExplorerProps) {

  const currentNodes =
    (pathStack.length === 0
      ? data
      : pathStack[pathStack.length - 1].children) || [];

  function enterFolder(node: ExplorerNode) {
    if (node.type === 'folder') {
      setPathStack(stack => [...stack, node]);
    }
  }

  function goBack() {
    setPathStack(stack => stack.slice(0, -1));
  }

  function renderItem({ item }: { item: ExplorerNode }) {
    return (
      <TouchableOpacity
        style={styles.row}
        onPress={() =>
          item.type === 'folder'
            ? enterFolder(item)
            : console.log('Abrir arquivo', item.name)
        }
      >
        <Feather
          name={item.type === 'folder' ? 'folder' : 'file'}
          size={24}
          color={item.type === 'folder' ? '#f39c12' : '#333'}
          style={styles.icon}
        />
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.breadcrumb}>
        {pathStack.length > 0 && (
          <TouchableOpacity onPress={goBack} style={styles.backButton}>
            <Feather name="arrow-left" size={20} color="#333" />
          </TouchableOpacity>
        )}
        <Text style={styles.pathText}>
          {pathStack.length === 0
            ? 'Raiz'
            : pathStack.map(n => n.name).join(' / ')}
        </Text>
      </View>

      <FlatList
        data={currentNodes}
        keyExtractor={n => n.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  breadcrumb: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f0f0f0',
  },
  backButton: { marginRight: 8 },
  pathText: { fontWeight: 'bold', fontSize: 16 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  icon: { marginRight: 12 },
  name: { fontSize: 16, flexShrink: 1 },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginLeft: 52,
  },
});
