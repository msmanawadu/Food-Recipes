import { StyleSheet, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function BackButton() {
	const navigation = useNavigation();

	return (
		<Pressable
			onPress={() => {
				navigation.goBack();
			}}
		>
			<Image
				style={styles.backButton}
				source={require('../../assets/images/backButton.png')}
			/>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	backButton: {
		width: 24,
		height: 24,
		margin: 16,
	},
});

export default BackButton;
