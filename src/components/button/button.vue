<template>
   <!--:disabled='disabled || loading' 禁用如果不是true还要检测loading loading时也要禁用 -->
    <button 
      class='el-button' 
      :autofocus='autofocus'
      :disabled='disabled || loading'  
      @click='handleclick(loading,$event)'
      :class="[
          type?'el-button-' + type : '', // 有type就添加一个el-button-type的类名
          {
          'is-plain':plain,
          'is-round':round,
          'is-circle':circle
          }
        ]"
      >
        <lj-icon :icon='icon' v-if='icon' class='button-icon'></lj-icon>
        <span v-if='$slots.default'><slot></slot></span>
        <!-- 文字插槽-->
    </button>
</template> 

<script>
export default {
    name:'lj-button',
    props:{
        type:{
            type:String,
            default:''
        },
        autofocus:Boolean,
        disabled:Boolean,
        loading:Boolean,
        plain:Boolean,
        round:Boolean,
        circle:Boolean,
        icon:{
            type:String
        }
    },
    methods: {
        // 点击事件传递回父组件，同时传递事件参数对象
        handleclick(loading,e){
            this.$emit('click',loading,e)
            // console.log(this.$slots.default)
            // this.$slots.default  是否有默认插槽
        }
    },
}
</script>

<style lang='sass' scoped>
@import "./button.scss"
</style>