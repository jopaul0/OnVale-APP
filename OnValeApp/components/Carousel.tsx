import React, { useRef, useState } from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Pressable,
  Linking,
  ImageSourcePropType,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export type Banner = {
  id: string;
  image: ImageSourcePropType;
  url?: string;               
  onPress?: () => void;   
};

type Props = {
  data: Banner[];
  height?: number;
  mode?: 'cover' | 'contain';
};

export default function BannerCarousel({ data, height = 200, mode = 'cover' }: Props) {
  const [active, setActive] = useState(0);
  const ref = useRef<FlatList<Banner>>(null);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const i = Math.round(e.nativeEvent.contentOffset.x / SCREEN_WIDTH);
    if (i !== active) setActive(i);
  };

  const handleOpen = async (item: Banner) => {
    if (item.onPress) return item.onPress();
    if (item.url) {
      try {
        await Linking.openURL(item.url);
      } catch (err) {
        console.warn('Não foi possível abrir o link:', err);
      }
    }
  };

  return (
    <View style={[styles.wrapper, { height }]}>
      <FlatList
        ref={ref}
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <Pressable
            style={[styles.slide, { width: SCREEN_WIDTH, height }]}
            onPress={() => handleOpen(item)}
          >
            <Image source={item.image} style={styles.img} resizeMode={mode} />
          </Pressable>
        )}
      />

      <View style={styles.pagination}>
        {data.map((_, i) => (
          <View key={i} style={[styles.dot, i === active && styles.dotActive]} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    overflow: 'hidden',
  },
  slide: {
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  pagination: {
    position: 'absolute',
    bottom: 8,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000066',
    marginHorizontal: 4,
  },
  dotActive: { backgroundColor: '#9B1A1E' },
});
