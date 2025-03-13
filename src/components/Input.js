import { Image, Pressable, TextInput, View, StyleSheet } from 'react-native';
import colors from '../constants/colors';

function Input({ showSearchIcon = true, pressable, onPress, style }) {
	const renderInput = () => (
		<View style={[styles.container, style]}>
			{showSearchIcon ? (
				<Image
					style={styles.icon}
					source={require('../../assets/images/search.png')}
				/>
			) : null}
			<TextInput
				editable={!pressable}
				placeholderTextColor={colors.lightGrey}
				style={styles.input}
				placeholder='Search recipe'
			/>
		</View>
	);

	if (pressable) {
		return <Pressable onPress={onPress}>{renderInput()}</Pressable>;
	}

	return renderInput();
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 10,
		borderWidth: 1,
		borderColor: colors.lightGrey,
		padding: 10,
		marginVertical: 16,
	},
	input: {
		color: colors.black,
		fontSize: 14,
		flex: 1,
	},
	icon: {
		width: 16,
		height: 16,
		marginRight: 16,
	},
});

export default Input;
