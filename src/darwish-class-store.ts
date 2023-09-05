/**
 * 状态管理
 *
 *
 * 状态更新
 *
 *
 * 状态订阅
 *
 *
 * 状态通知
 */

import deepEqual from './functions/deepEqual';

export default class Store<T> {
  state = {} as T;
  constructor(initialState: T) {
    /**
     * 创建store
     */
    this.state = initialState;
  }

  /**
   * 获取 state
   */
  getState = () => {
    return Object.defineProperty(this.state, 'getState', {
      get() {
        console.log('state change2', this.age);
        return this.state;
      },
      set(newValue) {
        this.state = newValue;
      },
      enumerable: true,
      configurable: true,
    });
  };

  /**
   * 更新state
   */
  setState = (update: any) => {
    let tempObj = {} as T;
    if (typeof update === 'function') {
      tempObj = update(this.state);
    } else {
      tempObj = {
        ...this.state,
        ...update,
      };
    }

    /**
     * store是否发生变化，
     * 如果发生变化了，就render
     * 反之就不做任何动作
     */
    if (this.hasChange(tempObj)) {
      this.notifySubscribers();
      this.state = tempObj;
    }
  };

  /**
   * state是否变化了
   */
  hasChange = (compValue: T) => {
    return !deepEqual(compValue, this.state);
  };

  /**
   * state变化，通知信息
   */
  notifySubscribers = () => {
    console.log(this.state);

    console.log('state change');
    this.getState();
  };
}

// /**
//  * 创建一个State
//  */
// const store = new Store({
//   name: 'darwish',
//   age: 25,
// });
// store.setState({
//   name: 'cat',
// });
// const b = store.getState();
// console.log('b', b);

// store.setState((prev: typeof store.state) => {
//   return {
//     ...prev,
//     age: prev.age + 1,
//   };
// });

// const a = store.getState();
// console.log('a', a);
