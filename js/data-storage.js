import { showResultMessage } from './show-send-result';
const PICTURES_DATA_URL = 'https://31.javascript.htmlacademy.pro/kekstagram/data';
/**
  * @typedef {Object} CommentItem
  * @property {number} id
  * @property {string} avatar
  * @property {string} message
  * @property {string} name
  */

/**
  * @typedef {Object} PictureItem
  * @property {number}  id: 123,
  * @property {string}  url: 'photos/{{i}}.jpg',
  * @property {string}  description: 'описание',
  * @property {number}  likes: 9,
  * @property {CommentItem[]}  comments
  */

/**
* @type PictureItem[]
*/
let picturesData = [];

/**
* @type PictureItem[]
*/
let filteredPicturesData = [];

export function fetchPicturesData() {
  return fetch(PICTURES_DATA_URL)
    .then((d) => {
      if (d.ok) {
        return d.json();
      }
      throw(d);
    })
    .then((d) => {
      picturesData = d;
    })
    .catch(() => {
      showResultMessage('error');
    });
}

export function getPicturesData() {
  return picturesData;
}

/**
* @param {PictureItem[]} newData - отфильтрованные данные
*/
export function setFilteredPicturesData(newData) {
  filteredPicturesData = newData;
}

export function getFilteredPicturesData() {
  return filteredPicturesData;
}

