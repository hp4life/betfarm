<template>
  <div class="container-fluid" style="min-height: 100vh; background-color: #F3EAC6; position: relative;width: 100%;">
      <div style="padding-bottom: 2.5rem;width: 100%; min-height: 100vh">
          <CategoryNavigation />
          <router-view/>
      </div>

      <Footer />
  </div>
</template>
<script lang="ts" src="./App.ts"></script>
