//REACT
import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { StyleProp, ViewStyle } from 'react-native';

//TYPES
type OnValeIconProps = {
  size?: number;
  style?: StyleProp<ViewStyle>;
};

//FUNCTION
export function OnValeIcon({ size = 100, style }: OnValeIconProps) {
  return (
    <Svg
      width={size}
      height={size}
      style={style} // aplicando o style aqui
      viewBox="0 0 1325 1325"
      fill="none"
    >
      <Circle cx="662.5" cy="662.5" r="662.5" fill="#fefefe" />
      <Path
        d="M662.176 36C529.659 36 427.51 77.441 393 98.1615L662.176 870L921 98.1615C889.941 77.441 794.694 36 662.176 36Z"
        fill="#9B1A1E"
      />
      <Path
        d="M1066.25 191.252L1024.84 165.358L745.34 968.087L714.285 869.688L678.053 937.014L745.34 1128.63L1066.25 191.252Z"
        fill="black"
      />
      <Path
        d="M1226.7 937.014C1367.67 654.909 1231.88 346.619 1154.24 289.651L828.155 1258.11C864.386 1258.11 1097.3 1195.96 1226.7 937.014Z"
        fill="black"
      />
      <Path
        d="M284.684 155L248.452 191.252L621.118 1284H678.053L284.684 155Z"
        fill="black"
      />
      <Path
        d="M486.545 1258.11L160.462 289.651C77.6473 372.514 -24.8358 620.065 62.1196 864.509C149.075 1108.95 381.301 1228.76 486.545 1258.11Z"
        fill="black"
      />
    </Svg>
  );
}

export function OnValeIconWhite({ size = 100, style }: OnValeIconProps) {
  return (
    <Svg
      width={size}
      height={size}
      style={style} // aplicando o style aqui
      viewBox="0 0 1325 1325"
      fill="none"
    >
      <Path
        d="M662.176 36C529.659 36 427.51 77.441 393 98.1615L662.176 870L921 98.1615C889.941 77.441 794.694 36 662.176 36Z"
        fill="#f6f6f6"
      />
      <Path
        d="M1066.25 191.252L1024.84 165.358L745.34 968.087L714.285 869.688L678.053 937.014L745.34 1128.63L1066.25 191.252Z"
        fill="#f6f6f6"
      />
      <Path
        d="M1226.7 937.014C1367.67 654.909 1231.88 346.619 1154.24 289.651L828.155 1258.11C864.386 1258.11 1097.3 1195.96 1226.7 937.014Z"
        fill="#f6f6f6"
      />
      <Path
        d="M284.684 155L248.452 191.252L621.118 1284H678.053L284.684 155Z"
        fill="#f6f6f6"
      />
      <Path
        d="M486.545 1258.11L160.462 289.651C77.6473 372.514 -24.8358 620.065 62.1196 864.509C149.075 1108.95 381.301 1228.76 486.545 1258.11Z"
        fill="#f6f6f6"
      />
    </Svg>
  );
}
