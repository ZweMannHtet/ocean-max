<template>
  <nav>
    <div class="nav-section">
      <div class="logo">
        <div class="logo-img">
          <img src="\ocean-max-logo.png" alt="ocean-max" />
        </div>
        <div class="bound"></div>
        <div class="logo-name" @click="goHome">
          <a href="" class="company-name">Ocean Max</a>
          <a href="" class="location">In Myanmar</a>
        </div>
      </div>
      <div class="nav-links">
        <ul class="main-menu">
          <li>
            <div>
              <a @mouseover="showPropertiesMenu">Properties</a>
              <font-awesome-icon
                :icon="['fas', 'chevron-down']"
                class="drop-down"
              />
            </div>
            <div class="sub-menu" v-if="showProperties">
              <ul>
                <li>
                  <router-link to="/">Properties for Rent</router-link>
                </li>
                <li>
                  <router-link to="/">Properties for Sale</router-link>
                </li>
              </ul>
            </div>
          </li>
          <li><router-link :to="{ name: 'Agents' }">Agents</router-link></li>
          <li>
            <router-link :to="{ name: 'Services' }">Our Services</router-link>
          </li>
          <li>
            <div>
              <a @mouseover="showCommericalMenu">Commerical</a>
              <font-awesome-icon
                :icon="['fas', 'chevron-down']"
                class="drop-down"
              />
            </div>
            <div class="sub-menu" v-if="showCommerical">
              <ul>
                <li><router-link to="/">Commerical for Rent</router-link></li>
                <li><router-link to="/">Commerical for Sale</router-link></li>
              </ul>
            </div>
          </li>
          <li><router-link :to="{ name: 'About' }">About Us</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";

let route = useRouter();
let showProperties = ref(false);
let showCommerical = ref(false);

const showPropertiesMenu = () => {
  showProperties.value = true;
  showCommerical.value = false;
};

const showCommericalMenu = () => {
  showCommerical.value = true;
  showProperties.value = false;
};

const closeMenu = (event) => {
  const nav = document.querySelector("nav");

  if (nav && !nav.contains(event.target)) {
    showProperties.value = false;
    showCommerical.value = false;
  }
};
onMounted(() => {
  document.addEventListener("click", closeMenu);
});

onUnmounted(() => {
  document.removeEventListener("click", closeMenu);
});

let goHome = () => {
  route.push("/");
};
</script>

<style scoped>
nav {
  position: fixed;
  padding: 12px;
  background: #052820;
  width: 100vw;
  height: 100px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
  box-shadow: 0px 10px 10px rgba(61, 45, 45, 0.5);
}
.nav-section {
  margin: 0 auto;
  max-width: 1500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.bound {
  width: 2px;
  background: #fff;
  height: 65px;
  margin: 0 5px;
  border-radius: 50%;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-img {
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.logo-name {
  display: flex;
  flex-direction: column;
}
.logo-name p {
  text-decoration: none;
}
.logo-name .company-name {
  font-family: "Raleway", sans-serif;
  color: #fff;
  font-size: 40px;
  font-weight: 600;
  text-decoration: none;
}
.logo-name .location {
  color: #fff;
  font-size: 15px;
  font-style: italic;
  text-decoration: none;
  text-align: right;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.main-menu {
  display: inline-flex;
  height: 100%;
}
.drop-down {
  text-align: center;
  color: #fff;
  margin-left: 5px;
  transition: all 0.5s ease;
}
.main-menu li:hover .drop-down {
  transform: rotate(180deg);
}
.sub-menu {
  position: absolute;
  top: 100px;
  right: 10px;
  background: #052820;
  line-height: 20px;
  border-radius: 5px;
  transition: all 0.5 ease-in-out;
}
.sub-menu::before {
  content: "";
  position: absolute;
  height: 20px;
  width: 20px;
  background: #052820;
  right: 10px;
  top: -5px;
  transform: rotate(45deg);
}
.sub-menu li {
  width: 220px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-menu li {
  position: relative;
  list-style: none;
  padding: 20px;
  margin: auto 10px;
  height: 100%;
}
li a {
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
}
li .router-link-exact-active:hover {
  color: rgba(255, 255, 255, 0.5);
}
.sub-menu li::before {
  border-bottom: none;
}
li::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  border-bottom: 1px solid transparent;
  transition: border-bottom-color 0.3s ease;
}

li:hover::before {
  border-bottom-color: #f4e68a;
}
@media (max-width: 1100px) {
  nav {
    height: 80px;
  }
  nav .nav-section {
    max-width: 100%;
    padding: 0 30px;
  }
  nav .nav-section .logo-img {
    width: 50px;
    height: 50px;
  }
  .bound {
    height: 50px;
  }
  .logo-name .company-name {
    font-size: 30px;
    font-weight: 500;
  }
  .main-menu li {
    padding: 10px;
    margin: 5px;
  }
}
@media (max-width: 860px) {
  nav .nav-section {
    width: 100%;
  }
}
</style>
