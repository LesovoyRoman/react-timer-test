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
  CLOSE: 'CLOSE',
  COMMENT: 'COMMENT',
};

const [EN_SAVE, RU_SAVE, UA_SAVE] = ['Save Time', 'Сохранить', 'Збережити'];
const [EN_RESET, RU_RESET, UA_RESET] = ['Reset', 'Сброс', 'Сбросити'];
const [EN_START, RU_START, UA_START] = ['Start', 'Старт', 'Старт'];
const [EN_STOP, RU_STOP, UA_STOP] = ['Stop', 'Стоп', 'Стоп'];
const [EN_REMOVE, RU_REMOVE, UA_REMOVE] = ['Remove All', 'Удалить все', 'Видалити все'];
const [EN_CLOSE, RU_CLOSE, UA_CLOSE] = ['Close', 'Закрыть', 'Закрити'];
const [EN_COMMENT, RU_COMMENT, UA_COMMENT] = ['Comment..', 'Комментарий..', 'Коментар..'];

export const TRANSLATION = {
  [EN]: {
    SAVE: EN_SAVE,
    RESET: EN_RESET,
    START: EN_START,
    REMOVE: EN_REMOVE,
    STOP: EN_STOP,
    CLOSE: EN_CLOSE,
    COMMENT: EN_COMMENT,
  },
  [RU]: {
    SAVE: RU_SAVE,
    RESET: RU_RESET,
    START: RU_START,
    REMOVE: RU_REMOVE,
    STOP: RU_STOP,
    CLOSE: RU_CLOSE,
    COMMENT: RU_COMMENT,
  },
  [UA]: {
    SAVE: UA_SAVE,
    RESET: UA_RESET,
    START: UA_START,
    REMOVE: UA_REMOVE,
    STOP: UA_STOP,
    CLOSE: UA_CLOSE,
    COMMENT: UA_COMMENT,
  },
};

export const getTranslation = (lang, option) => TRANSLATION[lang][option] || option;
