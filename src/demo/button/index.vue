<template>
  <div class="button">
    <lj-button>default</lj-button>
    <lj-button type='primary'>primary</lj-button>
    <lj-button type='success'>success</lj-button>
    <lj-button type='fail'>fail</lj-button>
    <lj-button type='warn'>warn</lj-button>
    <lj-button type='info'>info</lj-button>

    <div>------</div>
    <lj-button plain>default</lj-button>
    <lj-button type='primary' plain>primary</lj-button>
    <lj-button type='success' plain>success</lj-button>
    <lj-button type='fail' plain>fail</lj-button>
    <lj-button type='warn' plain>warn</lj-button>
    <lj-button type='info' plain>info</lj-button>

    <div>------</div>
    <lj-button round>default</lj-button>
    <lj-button type='primary' round>primary</lj-button>
    <lj-button type='success' round>success</lj-button>
    <lj-button type='fail' round>fail</lj-button>
    <lj-button type='warn' round>warn</lj-button>
    <lj-button type='info' round>info</lj-button>

    <div>------</div>
    <lj-button type='primary' icon='loading'>plain</lj-button>
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
