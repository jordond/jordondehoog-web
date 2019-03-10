import Vue, { PluginObject } from 'vue'
import axios from 'axios'

const config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

const axiosInstance = axios.create(config)

const Plugin: PluginObject<any> = {
  install: vue => {
    vue.$axios = axiosInstance
  },
}
Plugin.install = vue => {
  vue.$axios = axiosInstance
  window.axios = axiosInstance
  Object.defineProperties(vue.prototype, {
    $axios: {
      get() {
        return axiosInstance
      },
    },
  })
}

Vue.use(Plugin)

export default Plugin
