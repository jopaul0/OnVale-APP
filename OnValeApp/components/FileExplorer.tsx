//REACT
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

//STYLE
import useTheme from './Themes';
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


//TYPES
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

//FUNCTIONS
export default function FileExplorer({
  data,
  pathStack,
  setPathStack,
  onFilePress,
  ...flatListProps
}: FileExplorerProps) {
  //THEME
  const { colors } = useTheme();

  //CONSTANT
  const currentNodes =
    pathStack.length === 0
      ? data
      : pathStack[pathStack.length - 1].children || [];

  //FUNCTIONS
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

  //JSX
  //JSX
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

      {/* Lista sem scroll interno */}
      {currentNodes.map((item, index) => (
        <React.Fragment key={item.id}>
          <TouchableOpacity
            style={[styles.row]}
            onPress={() =>
              item.type === 'folder' ? enterFolder(item) : onFilePress?.(item)
            }
          >
            <Feather
              name={item.type === 'folder' ? 'folder' : 'file'}
              size={24}
              color={item.type === 'folder' ? '#f39c12' : colors.text}
              style={styles.icon}
            />
            <Text style={[styles.name, { color: colors.text }]}>
              {item.name}
            </Text>
          </TouchableOpacity>
          {/* Separador */}
          {index < currentNodes.length - 1 && (
            <View style={[styles.separator, { backgroundColor: colors.border }]} />
          )}
        </React.Fragment>
      ))}
    </View>
  );

}

