import { StyleSheet, FlatList, Text, Pressable } from 'react-native';
import colors from '../constants/colors';

function Categories({ categories, selectedCategory, onCategoryPress }) {
	return (
		<FlatList
			horizontal
			data={categories}
			keyExtractor={(item) => String(item)}
			showsHorizontalScrollIndicator={false}
			style={{ marginHorizontal: -24, marginTop: 24 }}
			renderItem={({ item, index }) => {
				const selected = selectedCategory === item;
				const displayName = item?.replace('_', ' ');

				return (
					<Pressable
						onPress={() => onCategoryPress(item)}
						style={[
							styles.itemContainer,
							selected ? styles.selectedItemContainer : {},
							index === 0 ? { marginLeft: 24 } : {},
						]}
					>
						<Text style={[styles.item, selected ? styles.selectedItem : {}]}>
							{displayName}
						</Text>
					</Pressable>
				);
			}}
		/>
	);
}

const styles = StyleSheet.create({
	item: {
		fontSize: 12,
		color: colors.green,
		fontWeight: 'bold',
		padding: 8,
		paddingHorizontal: 12,
		textTransform: 'capitalize',
	},
	selectedItem: {
		color: colors.white,
	},
	itemContainer: {
		marginRight: 8,
		marginBottom: 14,
	},
	selectedItemContainer: {
		backgroundColor: colors.green,
		borderRadius: 10,
	},
});

export default Categories;
