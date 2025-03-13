import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import Input from '../components/Input';

function HomeScreen({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<Input pressable onPress={() => navigation.navigate('SearchScreen')} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 16,
	},
});

export default HomeScreen;
