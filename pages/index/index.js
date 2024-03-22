// index.js
// 获取应用实例
const app = getApp()
import {getTimeNow} from '../../utils/index'

Page({
  data: {
      banner:['../../img/banner.png'],
      time:getTimeNow()
  },
  
  onLoad(){
  }
})
