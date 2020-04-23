<template>
  <div>
    <nav class="navbar navbar-expand-md cus_header">
      <!-- Brand -->
      <a class="navbar-brand" href="#">Betfarm</a>
<!--      <div style="margin-left: 80%">-->
<!--        <button type="button" class="btn" style="background-color: #EF5350; margin-right: 10px">Join Now</button>-->
<!--        <button type="button" class="btn" style="background-color: #575353">Login</button>-->
<!--      </div>-->


      <!-- Toggler/collapsibe Button -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar links -->

    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .cus_header {
    background-color: #F7CB82;
    color: black;
  }
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
