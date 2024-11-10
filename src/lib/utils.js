import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * @param {*} cb //callback function on which we have to apply debounce
 * @param {*} timeout // time in ms
 * @returns
 */
export function debounce(cb, timeout = 300) {
  if (timeout < 0) {
    return;
  }

  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(this, args);
    }, timeout);
  };
}

/**
 * {@language} - string // language to fetch the color
 * {@return} - string // color of few popular languages
 */
export const getColorCode = (language = '') => {
  switch (language?.toLowerCase()) {
    case 'javascript':
      return '#f1e05a';
    case 'typescript':
      return '#3178c6';
    case 'python':
      return '#3572A5';
    case 'c++':
      return '#f34b7d';
    case 'css':
      return '#563d7c';
    case 'html':
      return '#e34c26';
    case 'go':
      return '#00ADD8';
    default:
      return '#ccc';
  }
};
