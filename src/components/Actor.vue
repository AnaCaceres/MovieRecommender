<template>
  <div class="actor">
    <div class="face face1">
      <div class="content">
        <img :src="img" :alt="name">
      </div>
    </div>
    <div class="face face2">
      <h2>{{ name }}</h2>
      <span>as {{character}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Actor',
  props: {
    name: String,
    character: String,
    img: String,
  }
}
</script>

<style scoped>
.actor {
  position: relative;
  width: 150px;
  height: 200px;
  margin: 2em;
  border-radius: 15px;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.4);
}
.content,
img {
  max-width: 150px;
  max-height: 200px;
  border-radius: 15px;
}
.actor .face {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.actor .face.face1 {
  box-sizing: border-box;
  padding: 20px;
}

.actor .face.face1 h2 {
  margin: 0;
  padding: 0;
}

.actor .face.face1 .title {
  background-color: #161E1C;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.actor .face.face2 {
  transition: 0.5s;
  background-color:rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  color: #A8FFE5;
  display: flex;
  flex-direction: column;
}

.actor .face.face2 h2 {
  margin: 0;
  padding: 0;
  font-size: 1em;
  transition: 0.5s;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.actor:hover .face.face2 {
  height: 60px;
  border-radius: 15px;
}
.actor:hover .face.face2 h2 {
  font-size: 1em;
}
</style>