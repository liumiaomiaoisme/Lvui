<template>
  <div class="button">
    <lj-button type='primary'>primary</lj-button>
    <lj-button type='primary' plain>plain</lj-button>
    <lj-button type='primary' round>round</lj-button>
    <lj-button type='primary' circle>&lt;&lt;</lj-button>
    <div>------</div>
    <lj-button type='primary' autofocus @click='handleClick'>删除</lj-button>
    <lj-button type='primary' :disabled='false' :loading='false' @click='handleClick'>添加</lj-button>
    <lj-button type='primary' :disabled='false' :loading='true'>添加</lj-button>
    
  </div>
</template>

<script>
// @ is an alias to /src
import ljButton from '@/components/button/button.vue'

export default {
  name: 'demo-button',
  components: {
    ljButton
  },
  methods:{
    handleClick(loading,e){
      console.log(loading,e)
    }
  }
}
</script>
