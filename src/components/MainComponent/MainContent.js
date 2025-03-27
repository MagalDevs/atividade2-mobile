import { View, Text } from 'react-native';

const MainContent = () => (
    <View style={styles.mainContent}>
      <Text>Conteúdo Principal</Text>
    </View>
);

const styles = {
    mainContent: {
        padding: 20,
        backgroundColor: '#0f0',
        alignItems: 'center',
      }
}

export default MainContent;