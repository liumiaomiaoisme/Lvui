<template>
    <svg class="lj-icon" aria-hidden="true">
        <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
</template>
<script>
import '@/assets/font/iconfont.js'
export default {
    name:'lj-icon',
    props:{
        icon:{
            type:String,
            require:true
        }
    }
}
</script>
<style lang="scss" scoped>
.lj-icon {
    width:20px;
    height:20px;
    vertical-align:middle;
}
</style>
