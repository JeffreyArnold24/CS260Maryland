<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="/images/flag.png">
      </router-link>
    </div>
    <div id="side">
      <router-link to="/locations">
        <div class="menu-item browse">
          <img src="/images/bluecrab.png">
          <h2>Locations</h2>
        </div>
      </router-link>
      <router-link to="/plan">
        <div class="menu-item">
          <img src="/images/maryland.png">
          <h2>My Plan</h2>
        </div>
      </router-link>
    </div>
  </div>
  <div class="footer">
  <a href="https://github.com/JeffreyArnold24/CS260Maryland">https://github.com/JeffreyArnold24/CS260Maryland</a>
</div>
  <router-view />
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 50px 100px;
}
#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 20px;
}
#menu a {
  color: #B84901;
}
#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}
#brand img {
  height: 100px;
}
#side {
  grid-area: side;
  display: flex;

}
#side img {
  width: 90px;
}
.menu-item {
  display: flex;
  flex-direction: column;
}
.menu-item p {
  margin: 0px;
}
.browse {
  margin-right: 50px;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: black;

  text-align: center;
}

a {
color: white;
}
</style>
