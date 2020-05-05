// 注册组件 //config.default.name 组件中的name -  config.default组件
const install=(Vue)=>{
    const requireComponent = require.context('.',true,/\.vue/) 
    requireComponent.keys().forEach(fileName=>{
        const config = requireComponent(fileName)
        Vue.component(config.default.name,config.default)
    });
}
export default {
    install
}

// Vue.use 用install方法注册组件，就可以全局使用