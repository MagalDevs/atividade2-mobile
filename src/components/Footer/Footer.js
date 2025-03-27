import { View, Text } from 'react-native';

const Footer = () => (
    <View style={styles.footer}>
      <Text>Rodapé</Text>
    </View>
);

const styles = {
    footer: {
        padding: 20,
        backgroundColor: '#f00',
        alignItems: 'center',
      }
}

export default Footer;