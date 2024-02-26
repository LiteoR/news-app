import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface Props {
  text: string;
  onPress: () => void;
  active?: boolean;
  style?: any;
}

const Tab = ({text, onPress, active, style}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.tab, active && styles.tabActive, style]}
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Tab;
