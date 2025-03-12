import { StyleSheet, Pressable, Image } from 'react-native';

function BackButton(props) {
	return (
		<Pressable onPress={props.onPress}>
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
