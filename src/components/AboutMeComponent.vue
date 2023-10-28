<template>
  <div class="box">
    <div class="title">
      <h1>ABOUT ME</h1>
      <div class="separator"></div>
      <button class="button" @click="editMode = !editMode">
        {{ editMode ? 'CANCEL' : 'EDIT FORM' }}
      </button>
    </div>
    <FormComponent :editMode="editMode"/>
  </div>
</template>

<script>
import FormComponent from '@/components/FormComponent.vue';

export default {
  components: {
    FormComponent,
  },
  data() {
    return {
      editMode: false,
    };
  },
};
</script>

<style scoped>
  .title {
    display: flex;
    align-items: center;
  }
  .separator {
    width: 1px;
    height: 39px;
    background-color: #120d20;
    margin: 0 20px;
  }
  .box {
    top: 100px;
    left: 370px;
    position: fixed;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-left: 30px;
  }
  .button {
    padding: 10px 25px;  
    border: none;  
    border-radius: 50px;
    color: #FFFFFF;
    background-color: #8645E8;
    cursor: pointer;  
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  
    transition: background-color 0.3s, color 0.3s;  
    outline: none;  
}

.button.active {
    color: #D7B8FF;
    background-color: #391372;
}

</style>
