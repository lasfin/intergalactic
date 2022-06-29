import { createIntl, createIntlCache, IntlShape } from '@formatjs/intl';
import { normalizeLocale } from './locale';
import { translations } from './translations/view/translations';

export type Intl = IntlShape<typeof translations[keyof typeof translations]>;
const messagesCache = createIntlCache();
const intlCache: { [locale: string]: ReturnType<typeof createIntl> } = {};
export const getIntl = (locale: string) => {
  locale = normalizeLocale(locale, translations) ?? 'en';
  intlCache[locale] = createIntl(
    {
      locale: locale,
      defaultLocale: 'en',
      messages: translations[locale],
    },
    messagesCache,
  );
  return intlCache[locale] as Intl;
};
