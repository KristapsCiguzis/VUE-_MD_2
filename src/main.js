import './assets/styles.css';
import router from './router/router.js';
import { createApp } from 'vue';
import App from './App.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import NavigationComponent from './components/NavigationComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import AboutMeComponent from './components/AboutMeComponent.vue';
import FormComponent from './components/FormComponent.vue';
import LandingComponent from './components/LandingComponent.vue';
import SongFilterComponent from './components/SongFilterComponent.vue';
import SongListComponent from './components/SongListComponent.vue';

const app = createApp(App);
app.component('HeaderComponent', HeaderComponent);
app.component('NavigationComponent', NavigationComponent);
app.component('HomeComponent', HomeComponent);
app.component('AboutMeComponent', AboutMeComponent);
app.component('FormComponent', FormComponent);
app.component('LandingComponent', LandingComponent);
app.component('SongsFilterComponent', SongFilterComponent);
app.component('SongsListComponent', SongListComponent);

app.use(router).mount('#app');