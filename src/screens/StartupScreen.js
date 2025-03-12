import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';
import Button from '../components/Button';
import colors from '../constants/colors';

function StartupScreen({ navigation }) {
	return (
		<ImageBackground
			style={styles.background}
			source={require('../../assets/images/startUpScreenBackground.png')}
		>
			<View style={styles.container}>
				<Image
					style={styles.logo}
					source={require('../../assets/images/logo.png')}
				/>
				<Text style={styles.title}>100+ Premium Recipes</Text>
			</View>

			<View style={styles.container}>
				<Text style={styles.bigTitle}>Recipe</Text>
				<Text style={styles.bigTitle}>Book</Text>
				<Text style={styles.subtitle}>Simple way to find Tasty Recipes</Text>

				<Button onPress={() => navigation.navigate('HomeScreen')}>
					Start Cooking
				</Button>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		width: '100%',
		height: '100%',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	container: {
		paddingHorizontal: 15,
		paddingVertical: 60,
	},
	logo: {
		width: 100,
		height: 100,
		alignSelf: 'center',
		marginBottom: 16,
	},
	title: {
		color: colors.white,
		fontSize: 20,
		textAlign: 'center',
		fontWeight: '700',
	},
	bigTitle: {
		fontSize: 60,
		color: colors.white,
		paddingHorizontal: 30,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	subtitle: {
		color: colors.white,
		textAlign: 'center',
		fontSize: 20,
		marginBottom: 64,
		marginTop: 20,
	},
});

export default StartupScreen;
