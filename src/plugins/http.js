// 开发Vue插件
import axios from 'axios'

const MyHttpServer = {}
MyHttpServer.install =  (Vue) => {
  // 添加实例方法
  Vue.prototype.$http = axios
}

// 导出
export default MyHttpServer
