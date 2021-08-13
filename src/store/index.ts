import { makeObservable, observable, computed, action } from 'mobx'

const store = makeObservable(
  {
    count: 0,
    get double() {
      return this.count
    },

    increment() {
      this.count += 1
    },

    docrement() {
      this.count -= 1
    }
  },
  {
    count: observable,
    double: computed,
    increment: action,
    docrement: action
  }
)

export const testStore = makeObservable(
  {
    list: (() => {
      const tmp: Array<{id: number, name: string}> = []
      // for (let i = 0; i < 100000; i++) {
      //   tmp.push({
      //     id: i,
      //     name: `第${i}条`
      //   })
      // }
      return tmp
    })(),
    pushData() {
      this.list.push({
        id: 1000000,
        name: '第1000000条'
      })
    },
    delData() {
      this.list.pop()
    }
  },
  {
    list: observable,
    pushData: action,
    delData: action,
  }
)

export default store