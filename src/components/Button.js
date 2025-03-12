import { StyleSheet, Image, Text, Pressable } from 'react-native';
import colors from '../constants/colors';

function Button({ onPress, children }) {
	return (
		<Pressable onPress={onPress} style={styles.container}>
			<Text style={styles.text}>{children}</Text>
			<Image
				style={styles.icon}
				source={require('../../assets/images/arrowRight.png')}
			/>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.green,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		padding: 16,
	},
	text: {
		color: colors.white,
		fontSize: 20,
		fontWeight: '600',
	},
	icon: {
		width: 24,
		height: 24,
		marginLeft: 16,
	},
});

export default Button;
