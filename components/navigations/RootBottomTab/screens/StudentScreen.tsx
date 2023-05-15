import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export const StudentScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>This is the Student screen.</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
