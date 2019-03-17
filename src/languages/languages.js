export const EN = 'en';
export const RU = 'ru';
export const UA = 'ua';

/**
 * Buttons
 */
export const LANGUAGE_OPTIONS = {
  SAVE: 'SAVE',
  STOP: 'STOP',
  START: 'START',
  REMOVE: 'REMOVE',
  RESET: 'RESET',
};

const [EN_SAVE, RU_SAVE, UA_SAVE] = ['Save Time', 'Сохранить', 'Збережити'];
const [EN_RESET, RU_RESET, UA_RESET] = ['Reset', 'Сброс', 'Сбросити'];
const [EN_START, RU_START, UA_START] = ['Start', 'Старт', 'Старт'];
const [EN_STOP, RU_STOP, UA_STOP] = ['Stop', 'Стоп', 'Стоп'];
const [EN_REMOVE, RU_REMOVE, UA_REMOVE] = ['Remove All', 'Удалить все', 'Видалити все'];

export const TRANSLATION = {
  [EN]: {
    SAVE: EN_SAVE,
    RESET: EN_RESET,
    START: EN_START,
    REMOVE: EN_REMOVE,
    STOP: EN_STOP,
  },
  [RU]: {
    SAVE: RU_SAVE,
    RESET: RU_RESET,
    START: RU_START,
    REMOVE: RU_REMOVE,
    STOP: RU_STOP,
  },
  [UA]: {
    SAVE: UA_SAVE,
    RESET: UA_RESET,
    START: UA_START,
    REMOVE: UA_REMOVE,
    STOP: UA_STOP,
  },
};

export const getTranslation = (lang, option) => TRANSLATION[lang][option] || option;
