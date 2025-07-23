// components/FileExplorer.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  FlatListProps,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import useTheme from './Themes';

export type ExplorerNode = {
  id: string;
  name: string;
  type: 'folder' | 'file';
  children?: ExplorerNode[];
};

type BaseProps = {
  data: ExplorerNode[];
  pathStack: ExplorerNode[];
  setPathStack: React.Dispatch<React.SetStateAction<ExplorerNode[]>>;
  onFilePress?: (file: ExplorerNode) => void;
};

type FileExplorerProps = BaseProps & Partial<FlatListProps<ExplorerNode>>;

export default function FileExplorer({
  data,
  pathStack,
  setPathStack,
  onFilePress,
  ...flatListProps
}: FileExplorerProps) {
  const { colors } = useTheme();

  const currentNodes =
    pathStack.length === 0
      ? data
      : pathStack[pathStack.length - 1].children || [];

  function enterFolder(node: ExplorerNode) {
    if (node.type === 'folder') {
      setPathStack(stack => [...stack, node]);
    }
  }

  function goBack() {
    setPathStack(stack => stack.slice(0, -1));
  }

  function renderItem({ item }: { item: ExplorerNode }) {
    const isFolder = item.type === 'folder';
    return (
      <TouchableOpacity
        style={[styles.row]}
        onPress={() => (isFolder ? enterFolder(item) : onFilePress?.(item))}
      >
        <Feather
          name={isFolder ? 'folder' : 'file'}
          size={24}
          color={isFolder ? '#f39c12' : colors.text}
          style={styles.icon}
        />
        <Text style={[styles.name, { color: colors.text }]}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background2 }]}>
      {/* Breadcrumb */}
      <View style={styles.breadcrumb}>
        {pathStack.length > 0 && (
          <TouchableOpacity onPress={goBack} style={styles.backButton}>
            <Feather name="arrow-left" size={20} color="#fff" />
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
        ItemSeparatorComponent={() => (
          <View style={[styles.separator, { backgroundColor: colors.border }]} />
        )}
        {...flatListProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  breadcrumb: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#9B1A1E',
    padding: 12,
  },
  backButton: {
    marginRight: 8,
  },
  pathText: {
    fontWeight: 'bold',
    fontSize: 16,
    flexShrink: 1,
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  icon: {
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    flexShrink: 1,
  },
  separator: {
    height: 1,
    marginLeft: 52,
  },
});
