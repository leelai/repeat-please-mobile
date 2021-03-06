import React, { useState, useContext, useMemo } from 'react';
import { RegisterForm } from './RegisterForm';
import { AlertsContext } from '../../contexts/AlertsContext';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../reducers/rootReducer';
import { useTranslation } from 'react-i18next';
import * as actions from '../../actions/actionsCreator/signUpActionsCreator';
import { emailIsValid } from '../../utils/validations';

export const SignUp = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { showAlert } = useContext(AlertsContext);
	const dispatch = useDispatch();
	const { isLoading, error } = useSelector((state: AppState) => state.signUp);
	const { t } = useTranslation();

	useMemo(() => {
		if (error) {
			showAlert({ type: 'error', message: error });
		}
	}, [error, showAlert]);

	const handleRegister = async (): Promise<void> => {
		const fields = [name, email, password].filter(field => field === '');
		try {
			if (fields.length) throw new Error(t('errorAllFields'));
			if (!emailIsValid(email)) throw new Error(t('errorEmail'));
			dispatch(actions.signUpRequest({ name, email, password }));
		} catch (err) {
			showAlert({ type: 'error', message: err.message });
		}
	};

	return (
		<RegisterForm
			data-test="register"
			onNameChange={setName}
			onPasswordChange={setPassword}
			onEmailChange={setEmail}
			handleRegister={handleRegister}
			isLoading={isLoading}
		/>
	);
};
