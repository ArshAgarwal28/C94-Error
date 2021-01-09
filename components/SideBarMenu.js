import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';

export default class SideBarMenu extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<DrawerItems {...this.props} />

				<TouchableOpacity onPress={() => {}}>
					<Text> Log Out </Text>
				</TouchableOpacity>
			</View>
		);
	}
}
