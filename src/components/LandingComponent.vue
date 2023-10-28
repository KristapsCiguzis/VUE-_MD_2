<template>
  <div class="box">
    <div class="title">
      <h3 class="main-title">WE</h3>
      <h2 class="love">LOVE</h2>
      <h2 class="main-title">MUSIC</h2>
    </div>
    <div class="powered-by">
      <span class="text">POWERED BY</span>
      <span class="spotify-api"> SPOTIFY API</span>
    </div>
  </div>
</template>

<style scoped>
.box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 200px 30px;
  background: url('@/assets/background.jpg')  center/cover no-repeat;
  z-index: -1;
}


.title, .powered-by {
  margin: 0;
  padding: 0;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 50px; 
}

.main-title, .love {
  font-size: 128px;
  font-weight: 900;
  color: #FFF;
  margin-bottom: -20px; 
}

.love {
  color: #E74C3C; 
}

.powered-by {
  display: flex;
  align-items: center;
  margin-top: auto;
  margin-bottom: 50px; 
}

.text, .spotify-api {
  font-size: 20px;
  font-weight: 600;
  color: #544F69;
}

.spotify-api {
  font-weight: 700;
  color: #2ECC71; 
}

</style>
