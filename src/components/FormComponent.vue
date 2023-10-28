<template>
	<div class="form-component">
	  <label for="first-name" class="form-label">First name</label>
	  <input id="first-name" class="input-field" v-model="user.firstName" :disabled="!editMode" />
	  <label for="last-name" class="form-label">Last name</label>
	  <input id="last-name" class="input-field" v-model="user.lastName" :disabled="!editMode" />
	  <label for="student-code" class="form-label">Student code</label>
	  <input id="student-code" class="input-field" v-model="user.studentCode" :disabled="!editMode" />
	</div>
	<div class="logged-in-at">
	  <label id="logged-in-at" class="logged-in-label">Logged in at</label>
	  <div v-for="timestamp in reversedLoggedInAt" :key="timestamp" class="timestamp">
		{{ timestamp }}
	  </div>
	</div>
</template>
  
<script>
import { user } from "@/store.js";

export default {
  props: {
    editMode: Boolean,
  },
  data() {
    return {
      user,
    };
  },
};
</script>

  
<style scoped>
.form-component, .logged-in-at {
  position: fixed;
  left: 400px;
  display: flex;
  flex-direction: column;
}

.form-component {
  top: 204px;
}

.input-field {
  width: 366px;
  height: 42px;
  background-color: #22202B;
  color: #FFF;
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 40px;
}

.input-field:disabled {
  color: rgba(255, 255, 255, 0.70);
}

.input-field:not(:disabled) {
  background-color: #464157;
}

.form-label, .logged-in-label {
  color: rgba(255, 255, 255, 0.50);

  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
}

.logged-in-at {
  top: 520px;
}

.logged-in-label {
  margin-bottom: 20px;
}

.timestamp {
  color: #544F69;
 
  font-size: 18px;
  font-weight: 700;
}
</style>
