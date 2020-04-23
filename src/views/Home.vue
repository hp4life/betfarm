<template>
  <div class="home">

    <HelloWorld />
    <SecondaryHeader />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SecondaryHeader from '../components/SecondaryHeader.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    SecondaryHeader
  }
}
</script>
