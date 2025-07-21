// components/BannerCarousel.tsx
import React, { useRef, useState } from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent
} from 'react-native';

const { width } = Dimensions.get('window');

export type Banner = {
  id: string;
  image: any; // require('../assets/…') ou { uri: string }
};

type BannerCarouselProps = {
  data: Banner[];
  height?: number;
};

export default function Carousel({
  data,
  height = 200
}: BannerCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<FlatList<Banner>>(null);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.round(e.nativeEvent.contentOffset.x / width);
    if (slide !== activeIndex) {
      setActiveIndex(slide);
    }
  };

  return (
    <View style={[styles.container, { height }]}>
      <FlatList
        ref={ref}
        data={data}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <Image
            source={item.image}
            style={[styles.image, { width, height }]}
            resizeMode="cover"
          />
        )}
      />

      {/* Pagination dots */}
      <View style={styles.pagination}>
        {data.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i === activeIndex ? styles.dotActive : undefined
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  image: {
    flex: 1
  },
  pagination: {
    position: 'absolute',
    bottom: 8,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ffffff77',
    marginHorizontal: 4
  },
  dotActive: {
    backgroundColor: '#fff'
  }
});
