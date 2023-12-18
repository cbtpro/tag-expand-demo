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

/**
 * 生成指定范围内的随机数
 * @param min - 最小值，默认为0
 * @param max - 最大值，默认为100
 * @param isFloat - 是否生成浮点数，默认为false
 * @returns 生成的随机数
 */
export function random(min: number = 0, max: number = 100, isFloat: boolean = false): number {
  const array = new Uint32Array(1);
  const maxUint = 0xffffffff;
  const randomNumber = crypto.getRandomValues(array)[0] / maxUint;
  const randomRangeValue = (max - min + 1) * randomNumber + min;
  return isFloat ? randomRangeValue : Math.floor(randomRangeValue);
}

/**
 * 从给定的数组中随机选择指定长度的元素组成新数组
 * @param array - 原数组
 * @param length - 新数组的长度
 * @returns 新数组
 */
export function randomTakeArrayFromArray(array: any[], length: number) {
  const list = [...array];
  var result = [];
  // 组成的新数组初始化
  for (let i = 0; i < length; i++) {
    const index = random(0, list.length - 1);
    let item = list[index];
    result.push(item);
    list.splice(index, 1);
  }
  return result;
}
