import { defineMessages } from 'react-intl';

const scope = `editor.components.ip-check`;

export default defineMessages({
  loadingText: {
    id: `${scope}.loadingText`,
    defaultMessage: 'IP Kontrol ediliyor...'
  },
  failedText: {
    id: `${scope}.failedText`,
    defaultMessage: "API'ye erişilirken bir hata yaşandı. Adblock kapatmayı denedin mi? Son kontrol: {time}"
  },
  successText: {
    id: `${scope}.successText`,
    defaultMessage: 'IP Adresin: {ip} - Son kontrol: {time}'
  },
  switchButtonText: {
    id: `${scope}.switchButtonText`,
    defaultMessage: 'Sayfa Değiştir'
  }
});
