// Copyright 2023 Peter Chen
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

import Mock from 'mock2js';
import { builder } from '@/mock/build';
import { random, randomTakeArrayFromArray } from '@/utils';

const mockTags = [
  {
    label: '老板娘',
    value: '老板娘',
  },
  {
    label: '孙悟空',
    value: '孙悟空',
  },
  {
    label: '高级程序猿',
    value: '高级程序猿',
  },
  {
    label: '如来佛祖玉皇大帝观音菩萨指定取西经特派使者花果山水帘洞齐天大圣孙悟',
    value: '如来佛祖玉皇大帝观音菩萨指定取西经特派使者花果山水帘洞齐天大圣孙悟',
  },
  {
    label: '环太平洋机甲驾驶员左驾',
    value: '环太平洋机甲驾驶员左驾',
  },
  {
    label: '环太平洋机甲驾驶员右驾',
    value: '环太平洋机甲驾驶员右驾',
  },
  {
    label: '物质空间转移管理师',
    value: '物质空间转移管理师',
  },
  {
    label: '资深固体废弃物资源再利用管理师',
    value: '资深固体废弃物资源再利用管理师',
  },
  {
    label: '前台',
    value: '前台',
  },
  {
    label: '保洁',
    value: '保洁',
  },
  {
    label: '保安',
    value: '保安',
  },
  {
    label: '盛饭员',
    value: '盛饭员',
  },
  {
    label: '宿管阿姨',
    value: '宿管阿姨',
  },
  {
    label: '做饭阿姨',
    value: '宿管阿姨',
  },
  {
    label: '泊车小弟',
    value: '泊车小弟',
  },
];

const response = (options: IMockRequestOptions) => {
  debugger;
  return builder<ITag[]>(randomTakeArrayFromArray(mockTags, random(3, mockTags.length)));
};
debugger;
Mock.mock(/\/api\/index\/tags/, 'get', response);
