<template>
  <div class="filter">
      <p>Sort by: </p>
      <button 
          v-for="filter in filters" 
          :key="filter"
          :class="{ active: activeFilter === filter }" 
          @click="setFilter(filter)">
          {{ filter }}
      </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeFilter: 'None',
      filters: ['None', 'Name', 'Artist']
    };
  },
  methods: {
    setFilter(filter) {
      this.activeFilter = filter;
      this.$emit('filter', filter);
    },
  },
};
</script>

<style scoped>
.filter {
  display: flex;
  margin: 20px 0;
}

button {
  background-color: transparent;
  color: #FFFFFFCC;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  margin-right: 10px;  
}


button:last-child {
  margin-right: 0;
}

.active {
  font-weight: bold;
  color: #940e34;
  background-color: #8b0b2f33;
}
</style>
