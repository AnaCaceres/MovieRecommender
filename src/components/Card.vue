<template>
  <router-link class="card" :to="`/movie/${id}`">
    <div class="face face1">
      <div class="content">
        <img :src="img" :alt="title">
        <h2 class="title">{{ title }}</h2>
      </div>
    </div>
    <div class="face face2">
      <h2>
        <i class="far fa-star"></i>
        {{ rating }}
      </h2>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Card',
  props: {
    id: String,
    img: String,
    title: String,
    rating: String
  }
}
</script>

<style scoped>
.card {
  position: relative;
  width: 300px;
  height: 400px;
  margin: 0 auto;
  background: #D3F6EB;
  border-radius: 15px;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.4);
}

.card .face {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card .face.face1 {
  box-sizing: border-box;
  padding: 20px;
}

.card .face.face1 h2 {
  margin: 0;
  padding: 0;
}

.card .face.face1 .title {
  background-color: #161E1C;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card .face.face2 {
  transition: 0.5s;
  background-color:rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  color: #A8FFE5;
  display: flex;
  flex-direction: column;
}

.card .face.face2 span {
  font-size: 4em;
}

.card .face.face2 h2 {
  margin: 0;
  padding: 0;
  font-size: 6em;
  transition: 0.5s;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.card:hover .face.face2 {
  height: 60px;
  border-radius: 15px;
}
.card:hover .face.face2 h2 {
  font-size: 2em;
}

.card:hover .face.face2 span {
  font-size: 0;
}
</style>
