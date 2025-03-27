import { View, Text} from 'react-native';

const Header = () => (
    <View style={styles.header}>
      <Text>Cabeçalho</Text>
    </View>
  );

const styles = {
    header: {
        padding: 20,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
      }
}

export default Header;