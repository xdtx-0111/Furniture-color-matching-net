import { defineStore } from 'pinia'
//  interface State { //定义类型
//   list1: Object,
//   list: Array<any>
// }
export const useStore = defineStore('main', {
  state: () => {
    return {
      list1: {},
      list2: []
    }
  },
  getters: {
    doubleCount: (state) => state.list1 * 2,
  },
  actions: {
    fn1(item) {
      this.list1 = item
    },
    fn2(item) {
      let flag = this.list2.find(cur => cur.text == item.text)		//查找一下传入的id和数组中的id是否相同
      if (!flag) {
        this.list2.push(item)		// 如果没有就直接push
      } else {
        alert("配色选择重复")
      }
    },
    //删除逻辑
    fn2Det(index) {

      let newList2 = JSON.parse(JSON.stringify(this.list2))
      let list2Filter = []
      list2Filter = newList2.filter((item, i) => {
        return i !== index
      })
      this.list2 = list2Filter
    }
  },
})
