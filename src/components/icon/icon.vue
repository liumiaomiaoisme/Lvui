<template>
    <svg class="lj-icon" :class="{'loading-circle':icon==='loading'}" aria-hidden="true">
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
    fill:#000;
}
.loading-circle{
    animation:circle 2s linear infinite;
}

@keyframes circle{
    0%{transform:rotate(0deg)}
    100%{transform:rotate(360deg)}
}
</style>
