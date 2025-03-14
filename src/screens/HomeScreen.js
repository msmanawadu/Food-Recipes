import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import Input from '../components/Input';
import Title from '../components/Title';

function HomeScreen({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<Input pressable onPress={() => navigation.navigate('SearchScreen')} />
			<Title text='Healthy Recipes' />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 16,
	},
});

export default HomeScreen;
