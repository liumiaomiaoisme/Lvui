<template>
   <!--:disabled='disabled || loading' 禁用如果不是true还要检测loading loading时也要禁用 -->
    <button 
      class='el-button' 
      :autofocus='autofocus'
      :disabled='disabled || loading'  
      @click='handleclick(loading,$event)'
      :class='[{
          "is-plain":plain,
          "is-round":round,
          "is-circle":circle
        }]'
      >
        <span v-if='$slots.default'><slot></slot></span>
        <!-- 插槽-->
    </button>
</template> 

<script>
export default {
    name:'lj-button',
    props:{
        type:{
            type:String,
            default:'primary'
        },
        autofocus:Boolean,
        disabled:Boolean,
        loading:Boolean,
        plain:Boolean,
        round:Boolean,
        circle:Boolean,
    },
    methods: {
        // 点击事件传递回父组件，同时传递事件参数对象
        handleclick(loading,e){
            this.$emit('click',loading,e)
            console.log(this.$slots.default)
            // this.$slots.default  是否有默认插槽
        }
    },
}
</script>

<style lang='sass' scoped>
@import "./button.scss"
</style>