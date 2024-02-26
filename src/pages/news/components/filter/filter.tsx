import {styles} from './styles';
import {View} from 'react-native';
import TabFilter from '@/components/tab-filter';
import {FilterModel} from '../../news';
import {TabModel} from '@/components/tab-filter/tab-filter';

interface Props {
  list: {[key: string]: TabModel[]};
  handleFilter: (value: {[key: string]: string}) => void;
  activeValues: FilterModel;
}

const Filter = ({list, handleFilter, activeValues}: Props) => {
  const filters = Object.entries(list).map(([key, value]) => ({key, value}));

  return (
    <View style={styles.container}>
      {filters.map(item => (
        <TabFilter
          key={item.key}
          style={styles.row}
          tabs={item.value}
          onPress={(value: string) => handleFilter({[item.key]: value})}
          active={activeValues[item.key]}
        />
      ))}
    </View>
  );
};

export default Filter;
