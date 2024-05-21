import { useLocale, useTranslations } from 'next-intl';
import { locales } from '@/config';
import { DropdownMenuRadioItem } from '@/components/ui/dropdown-menu';
import { LocaleSwitcherSelect } from './LocaleSwitcherSelect';

export const LocaleSwitcher = () => {
	const t = useTranslations('LocaleSwitcher');
	const locale = useLocale();

	return (
		<LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
			{locales.map(cur => (
				<DropdownMenuRadioItem key={cur} value={cur}>
					{t('locale', { locale: cur })}
				</DropdownMenuRadioItem>
			))}
		</LocaleSwitcherSelect>
	);
};
