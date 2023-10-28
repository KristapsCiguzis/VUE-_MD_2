import { reactive } from 'vue';
import songsInfo from './songsInfo.js';

const user = reactive({
  firstName: "Kristaps",
  lastName: "Ciguzis",
  studentCode: "IT22108",
  loggedInAt: [],
  loggedInStatus: false
});

const logIn = () => {
  user.loggedInStatus = true;
  user.loggedInAt.push(new Date().toLocaleString());
};

const resetValues = () => Object.assign(user, {
  studentCode: "IT22018",
  loggedInAt: [],
  loggedInStatus: false
});

export { songsInfo as all_songs, user, logIn, resetValues };
