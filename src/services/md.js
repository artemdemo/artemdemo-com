import _isString from 'lodash/isString';
import { remark } from 'remark';
import guide from 'remark-preset-lint-markdown-style-guide';
import html from 'remark-html';

export const renderMd = (mdString) =>
  new Promise((resolve, reject) => {
    remark()
      .use(guide)
      .use(html)
      .process(mdString, (err, file) => {
        if (err) {
          return reject(new Error(err));
        }
        if (_isString(file.value)) {
          resolve(file.value);
        }
        reject(
          new Error(
            'Returned "file" does not have `value` property in it, or it\'s not string',
          ),
        );
      });
  });
