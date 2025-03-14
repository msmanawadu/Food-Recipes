import { StyleSheet, Text } from 'react-native';
import colors from '../constants/colors';
function Title({ text = 'Title', style }) {
	return <Text style={[styles.title, style]}>{text}</Text>;
}

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		color: colors.black,
		fontWeight: 'bold',
	},
});

export default Title;
