<template>
  <v-container fluid>
    <v-layout column>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Menu Manager</h1>
      </v-flex>
       <v-flex>
        <MenuList></MenuList>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MenuList from './MenuList'

export default {
  components: {
    MenuList
    }
}
</script>
