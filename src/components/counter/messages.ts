import { defineMessages } from 'react-intl';

const scope = `editor.components.counter`;

export default defineMessages({
  helloText: {
    id: `${scope}.helloText`,
    defaultMessage: 'Sayaç Örneği'
  },
  switchButtonText: {
    id: `${scope}.switchButtonText`,
    defaultMessage: 'Sayfa Değiştir'
  },
  incrementButtonText: {
    id: `${scope}.incrementButtonText`,
    defaultMessage: 'Arttır'
  },
  decrementButtonText: {
    id: `${scope}.decrementButtonText`,
    defaultMessage: 'Azalt'
  },
  setButtonText: {
    id: `${scope}.setButtonText`,
    defaultMessage: `Tanımla`
  },
  countText: {
    id: `${scope}.countText`,
    defaultMessage: 'Şu an sayı: {count}'
  }
});
