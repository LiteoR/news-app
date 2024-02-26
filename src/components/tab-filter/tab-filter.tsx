import {View} from 'react-native';
import {styles} from './styles';
import Tab from '@/components/tab';

export interface TabModel {
  name: string;
  value: string;
}

interface Props {
  tabs: TabModel[];
  onPress: (value: string) => void;
  active: string;
  style?: any;
}

const TabFilter = ({tabs, onPress, active, style}: Props) => {
  return (
    <View style={[styles.row, style]}>
      {tabs.map((item, index) => (
        <Tab
          key={item.value}
          style={index === tabs.length - 1 ? undefined : styles.gap}
          text={item.name}
          onPress={() => onPress(item.value)}
          active={item.value === active}
        />
      ))}
    </View>
  );
};

export default TabFilter;
