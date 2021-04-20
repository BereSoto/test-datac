<template>
  <div class="grid grid-cols-3 gap-4">
    <div>
      <span>Hecho o agresión</span>
      <select v-model="selected" class="selection">
        <option v-for="crimen in crimenes" :key="crimen.id">
          {{ crimen.text }}
        </option>
      </select>
    </div>
    <div>
      <span>Estado</span>
      <select
        v-model="selected"
        class="selection"
        @click="showData = !showData"
      >
        <option v-for="entidad in entidades" :key="entidad.id">
          {{ entidad.text }}
        </option>
      </select>
    </div>
    <div>
      <span>Municipio</span>
      <select v-model="selected" class="selection">
        <option v-for="municipio in municipios" :key="municipio.id">
          {{ municipio.text }}
        </option>
      </select>
    </div>
    <div v-if="showData">
      <div v-if="result" class="content">
        <p>{{ result.data }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  name: 'TheData',
  data: () => {
    return {
      result: null,
      showData: false,
      crimenes: [{ text: 'Investigación por trafico de menores', value: 'A' }],
      entidades: [{ text: 'Aguascalientes', value: 'A' }],
      municipios: [{ text: 'San Pedro Cholula', value: 'A' }],
    }
  },
  created() {
    axios
      .post('https://spotlight-unfpa.datacivica.org/api/v1/timeline', {
        id_crime: 15,
        id_ent: 21,
        id_mun1: 140,
      })
      .then((result) => {
        console.log(result)
        this.result = result.data
      })
  },
})
</script>
<style>
.selection {
  border: 2px solid #495057;
  border-radius: 5px;
  width: 90%;
}
</style>
