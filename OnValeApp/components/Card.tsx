//REACT
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

//THEMES
import useTheme from './Themes';

//TYPES
type FeatherName = keyof typeof Feather.glyphMap;

type BaseCardProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

type SupportCardProps = {
  icon?: FeatherName;
  trailingIcon?: FeatherName;
  label: string;
  value: string;
  url?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

//FUNCTIONS
export default function BaseCard({ children, style }: BaseCardProps) {
  const { colors } = useTheme();
  const stylesBase = StyleSheet.create({
    card: {
      backgroundColor: colors.background,
      borderRadius: 12,
      paddingHorizontal: 16,
      paddingVertical: 12,
      marginHorizontal: 16,
      marginVertical: 6,
      elevation: 2,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
    },
  });
  return <View style={[stylesBase.card, style]}>{children}</View>;
};

export function SupportCard({
  icon = 'info',
  trailingIcon = 'chevron-right',
  label,
  value,
  url,
  onPress,
  style,
}: SupportCardProps) {
  //STYLE
  const { colors } = useTheme();
  const stylesSupport = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: { fontSize: 14 },
    value: { fontSize: 16, fontWeight: '600' },
  });

  //HANDLE
  const handlePress = () => {
    if (onPress) return onPress();
    if (url) Linking.openURL(url);
  };

  //JSX
  const content = (
    <View style={stylesSupport.row}>
      {icon && (
        <Feather
          name={icon}
          size={22}
          color="#9B1A1E"
          style={{ marginRight: 12 }}
        />
      )}

      <View style={{ flex: 1 }}>
        <Text style={[stylesSupport.label, { color: colors.text }]}>
          {label}
        </Text>
        <Text style={[stylesSupport.value, { color: colors.text }]}>
          {value}
        </Text>
      </View>

      {trailingIcon && (
        <Feather name={trailingIcon} size={20} color={colors.text} />
      )}
    </View>
  );
  if (onPress || url) {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
        <BaseCard style={style}>{content}</BaseCard>
      </TouchableOpacity>
    );
  }
  return <BaseCard style={style}>{content}</BaseCard>;
};
