import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['cs', 'en'],
  defaultLocale: 'cs',
  localePrefix: 'always',
  localeDetection: false,
  localeCookie: false,
  pathnames: {
    '/': '/',
    '/rates': {cs: '/cenik', en: '/rates'},
    '/accommodation': {cs: '/ubytovani', en: '/accommodation'},
    '/services': {cs: '/sluzby', en: '/services'},
    '/surroundings': {cs: '/okoli', en: '/surroundings'},
    '/contact': {cs: '/kontakt', en: '/contact'},
    '/gallery': {cs: '/galerie', en: '/gallery'},
    '/success': {cs: '/uspech', en: '/success'}
  }
});