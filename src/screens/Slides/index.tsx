import React from 'react';
import { SafeAreaView } from 'react-native';
import { TAB_NAVIGATOR } from '../../navigator/routes';
import {
	Slide,
	SlideFooter,
	SlideLogo,
	SlideHeader,
} from 'repeat-please-styles';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import * as actions from '../../actions/actionsCreator/profileActionsCreator';
import { ISlidesProps } from './interface';
import { styles } from './styles';
import { SLIDES_TRANSITION_DURATION } from '../../constants/slides';

export const Slides = ({ navigation }: ISlidesProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const nextScreen = () => {
		dispatch(actions.setProfile({ id: 0, isFirstAccess: false }));
		navigation.navigate(TAB_NAVIGATOR);
	};
	const duration = SLIDES_TRANSITION_DURATION;
	const slidesContent = [
		{
			header: <SlideLogo greeting={t('greeting')} />,
			footer: <SlideFooter text={t('slide01')} />,
		},
		{
			header: <SlideHeader title={t('slide02Title')} />,
			footer: <SlideFooter text={t('slide02')} />,
		},
		{
			header: <SlideHeader title={t('slide03Title')} />,
			footer: <SlideFooter text={t('slide03')} />,
		},
	];

	return (
		<SafeAreaView style={styles.container} data-test="slidesComponent">
			<Slide
				{...{
					slides: slidesContent,
					nextScreen,
					duration,
					labels: {
						skipLabel: t('skipLabel'),
						nextLabel: t('nextLabel'),
						startLabel: t('startLabel'),
						backLabel: t('backLabel'),
					},
				}}
			/>
		</SafeAreaView>
	);
};
