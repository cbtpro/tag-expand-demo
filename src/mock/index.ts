// Copyright 2021 cbtpro
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import Mockjs from 'mock2js';
import { isDev } from '@/config';

interface IMockOptions {
  timeout?: number;
}
const defaultTimeout = 800;
const defaultMockOptions: IMockOptions = {
  timeout: defaultTimeout,
};
export const initMock = (options: IMockOptions = defaultMockOptions) => {
  return new Promise((resolve, reject) => {
    if (!isDev) {
      reject('不是dev环境，不启用mock');
      return;
    }
    const { timeout = defaultTimeout } = options;
    const promises = [
      import('./api/index/authority'),
      import('./api/index/test'),
      import('./api/index/tags'),
    ];

    Mockjs.setup({
      timeout,
    });
    Promise.allSettled(promises).then(results => {
      console.log(results);
      console.log('mock initial complete!');
      resolve('mock initial complete!');
    });
  });
};
