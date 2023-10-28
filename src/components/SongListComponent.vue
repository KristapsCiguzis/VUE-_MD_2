<template>
  <div class="song-list">
    <SongFilterComponent @filter="updateFilter" />
    <div class="box">
      <table class="table">
        <thead>
          <tr>
            <th class="name">Name</th>
            <th class="artist">Artist</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(song, index) in sortedSongs" :key="index">
            <td>{{ song.song }}</td>
            <td>{{ song.artist }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import SongFilterComponent from '@/components/SongFilterComponent.vue';
import songsInfo from '@/songsInfo.js';

export default {
  components: {
    SongFilterComponent,
  },
  data() {
    return {
      filter: 'None',
      songsInfo,
    };
  },
  computed: {
    sortedSongs() {
      return this.sortSongs(this.filter);
    },
  },
  methods: {
    updateFilter(newFilter) {
      this.filter = newFilter;
    },
    sortSongs(filter) {
      const songs = [...this.songsInfo];
      if (filter === 'Name') {
        return songs.sort((a, b) => a.song.localeCompare(b.song));
      } else if (filter === 'Artist') {
        return songs.sort((a, b) => a.artist.localeCompare(b.artist));
      }
      return songs;
    },
  },
};
</script>

<style scoped>
.box {
  background-color: transparent;
}
table {
  width: 100%;
}
th.name, th.artist {
  width: 50%;
  text-align: left;
}
thead::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #464157;
}
</style>
