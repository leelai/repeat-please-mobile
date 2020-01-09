import React from 'react';
import {
	ButtonRounded,
	ButtonTransparent,
	Logo,
	MessageWarning,
	TitleLogo,
} from 'repeat-please-styles';
import { Email, Password } from '../../../components';
import { ScrollView, KeyboardAvoidingView, View } from 'react-native';
import { styles } from './styles';

export interface ILoginFormProps {
	hasError: boolean;
	errorMessage: string;
	email: string;
	onEmailChange: (email: string) => void;
	password: string;
	onPasswordChange: (password: string) => void;
	handleLogin: () => void;
}

export const LoginForm = ({
	hasError,
	errorMessage,
	email,
	onEmailChange,
	password,
	onPasswordChange,
	handleLogin,
}: ILoginFormProps): JSX.Element => (
	<KeyboardAvoidingView style={styles.container} data-test="login">
		<ScrollView>
			<View style={styles.wrapper}>
				<View style={styles.logoContainer}>
					<Logo customStyle={styles.logoStyle} />
					<TitleLogo />
				</View>
				<View style={styles.formStyle}>
					<Email email={email} onEmailChange={onEmailChange} />
					<Password password={password} onPasswordChange={onPasswordChange} />
					{hasError && (
						<MessageWarning
							customStyle={styles.messageStyle}
							data-test="errorMessage">
							{errorMessage}
						</MessageWarning>
					)}
					<ButtonRounded
						onPress={handleLogin}
						customStyle={styles.loginButtonStyle}>
						Login
					</ButtonRounded>
				</View>
				<View>
					<ButtonTransparent customStyle={styles.buttonStyle}>
						Loging with Facebook
					</ButtonTransparent>
					<ButtonTransparent customStyle={styles.buttonStyle}>
						Loging with Google
					</ButtonTransparent>
				</View>
			</View>
		</ScrollView>
	</KeyboardAvoidingView>
);