import React, { useRef, useState } from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export type Banner = { id: string; image: any };

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

  return (
    <View style={[styles.wrapper, { height }]}>
      <FlatList
        ref={ref}
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled          // ocupa 100% da tela por slide
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width: SCREEN_WIDTH, height }]}>
            <Image source={item.image} style={styles.img} resizeMode={mode} />
          </View>
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
    overflow: 'hidden'
  },
  slide: {
    overflow: 'hidden'
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
    backgroundColor: '#ffffff66',
    marginHorizontal: 4,
  },
  dotActive: { backgroundColor: '#fff' },
});
