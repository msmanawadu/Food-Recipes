import { StyleSheet, View, Image } from 'react-native';

function Rating({ rating }) {
	const array = [1, 2, 3, 4, 5];
	// 0-1.4 = 1 star
	// 1.5-2.4 = 2 stars
	// 2.5-3.4 = 3 stars
	// 3.5-4.4 = 4 stars
	// 4.5-5 = 5 stars

	const renderStars = () => {
		return array?.map((star) => {
			if (Math.round(rating) >= star) {
				return (
					<Image
						key={star}
						style={styles.star}
						source={require('../../assets/images/star.png')}
					/>
				);
			}

			return (
				<Image
					key={star}
					style={styles.star}
					source={require('../../assets/images/starEmpty.png')}
				/>
			);
		});
	};

	return <View style={styles.row}>{renderStars()}</View>;
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	star: {
		width: 12,
		height: 12,
		margin: 2,
	},
});

export default Rating;
