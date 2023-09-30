<template>
  <div class="slide-text">
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 256 512">
      <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
      />
    </svg>
    <h2>See Your Latest Properties</h2>
  </div>
  <div class="card-slide">
    <div class="previous">
      <button class="previous-one" @click="previousPost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
          />
        </svg>
      </button>
    </div>
    <ul class="slide-content">
      <li
        class="container-warp"
        v-for="displayPost in displayPosts"
        :key="displayPost.id"
      >
        <div class="image-card">
          <div class="card">
            <span class="overlay"></span>
            <div class="img">
              <img :src="displayPost.image_url" alt="home1" class="card-img" />
            </div>
            <div class="favourite">
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 40.508 40.508"
                xml:space="preserve"
              >
                <g>
                  <path
                    style="fill: #010002"
                    d="M3.023,20.822c0.019,0.031,0.042,0.059,0.066,0.083l15.918,16.914
		                    c0.115,0.122,0.271,0.192,0.444,0.197h0.012c0.163,0,0.317-0.062,0.435-0.176L37.28,21.032c0.008-0.006,0.076-0.068,0.117-0.108
		                    c0.034-0.032,0.062-0.065,0.068-0.081c1.962-2.032,3.043-4.702,3.043-7.517c0-5.974-4.86-10.834-10.835-10.834
		                    c-3.91,0-7.498,2.094-9.419,5.48c-1.92-3.387-5.508-5.48-9.419-5.48C4.86,2.492,0,7.352,0,13.326
		                    C-0.001,16.14,1.078,18.808,3.023,20.822z M10.834,3.743c3.875,0,7.346,2.312,8.842,5.891c0.098,0.233,0.324,0.383,0.577,0.383
		                    c0.252,0,0.479-0.15,0.577-0.384c1.497-3.578,4.968-5.89,8.843-5.89c5.285,0,9.585,4.3,9.585,9.584
		                    c0,2.521-0.978,4.904-2.754,6.712c-0.017,0.018-0.032,0.035-0.045,0.053L19.483,36.5l-15.4-16.358
		                    c-0.023-0.037-0.05-0.072-0.082-0.104c-1.775-1.805-2.752-4.188-2.752-6.711C1.249,8.042,5.549,3.743,10.834,3.743z"
                  />
                </g>
              </svg>
            </div>
            <div class="status">
              <p>{{ displayPost.status }}</p>
            </div>
          </div>
          <div class="detail">
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                  />
                </svg>
                <a>PropertyId : {{ displayPost.id }}</a>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path
                    d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"
                  />
                </svg>
                <a>Bedrooms : {{ displayPost.bedrooms }}</a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z"
                  />
                </svg>
                <a>Bathrooms : {{ displayPost.bathrooms }}</a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm96 288H448c17.7 0 32-14.3 32-32V251.8c0-7.6-2.7-15-7.7-20.8l-65.8-76.8c-12.1-14.2-33.7-15-46.9-1.8l-21 21c-10 10-26.4 9.2-35.4-1.6l-39.2-47c-12.6-15.1-35.7-15.4-48.7-.6L135.9 215c-5.1 5.8-7.9 13.3-7.9 21.1v84c0 17.7 14.3 32 32 32z"
                  />
                </svg>
                <a>Area : {{ displayPost.area }}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="description">
          <div class="card-content">
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 384 512"
                >
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                  />
                </svg>
                <a>Location : {{ displayPost.Location }}</a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"
                  />
                </svg>
                <a>Price : {{ displayPost.price }}</a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 384 512"
                >
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"
                  />
                </svg>
                <a>Type : {{ displayPost.type }}</a>
              </li>
            </ul>
          </div>
          <div class="button-container">
            <button class="see-detail">Detail</button>
          </div>
        </div>
      </li>
    </ul>
    <div class="next">
      <button class="next-one" @click="nextPost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

let posts = ref([]);
let error = ref("");
let currentIndex = 0;
const postsPerPage = 3;

let displayPosts = ref([]);

const load = async () => {
  try {
    let response = await fetch("http://localhost:3000/properties");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    let data = await response.json();
    posts.value = data;
    updateDisplayPosts();
  } catch (err) {
    error.value = err.message;
  }
};

const updateDisplayPosts = () => {
  if (Array.isArray(posts.value) && posts.value.length > 0) {
    const start = currentIndex % posts.value.length;
    displayPosts.value = posts.value.slice(start, start + postsPerPage);
  } else {
    displayPosts.value = [];
  }
};

const nextPost = () => {
  currentIndex += 3;
  currentIndex %= posts.value.length;
  updateDisplayPosts();
};

const previousPost = () => {
  currentIndex -= 3;
  if (currentIndex < 0) {
    currentIndex = posts.value.length - 1;
  }
  updateDisplayPosts();
};
const autoPlay = () => {
  setInterval(() => {
    nextPost();
  }, 5000);
};
autoPlay();

onMounted(() => {
  load();
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.slide-text {
  width: 100%;
  margin: 70px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slide-text h2 {
  font-size: 50px;
  font-weight: 500;
  color: #000;
  opacity: 0.8;
  letter-spacing: 3px;
  font-family: "Raleway", sans-serif;
}
.slide-text svg {
  font-size: 70px;
  opacity: 0.4;
  margin-right: 20px;
}
.card-slide {
  background: linear-gradient(to top, #c7c5c5, #fff);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.previous .previous-one,
.next .next-one {
  width: 50px;
  height: 50px;
  background: #e1dbdb;
  border-radius: 50%;
  border: none;
  box-shadow: 5px 5px 5px rgba(149, 124, 124, 0.7);
}
.previous .previous-one:hover,
.next .next-one:hover {
  background: #fff;
}
.next,
.previous {
  margin: 30px;
}
.previous .previous-one svg,
.next .next-one svg {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 300;
  color: #494747;
}
.slide-content {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
}
.container-warp {
  margin: 30px;
  display: flex;
  flex-direction: column;
  width: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 5px 5px rgba(79, 49, 49, 0.7);
  transition: all 0.5 ease-in-out;
}
.card {
  display: flex;
  position: relative;
}
.img {
  width: 300px;
  height: 150px;
  position: relative;
}
.image-card {
  display: flex;
  width: 100%;
  height: 100%;
  background: #094336;
}
.card-img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 0 130px 0;
  border-radius: 1px solid #000;
}
.favourite {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.8);
  margin: 5px 0 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.favourite svg {
  padding: 5px;
  color: #000;
  cursor: pointer;
}
.status {
  position: absolute;
  right: 5px;
  top: 5px;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 14px;
  padding: 3px 10px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
}
.overlay::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 170px;
  height: 130px;
  width: 130px;
  background-color: #094336;
}
.overlay::after {
  border-radius: 0 0 130px 0;
  background-color: #fff;
}
.detail ul {
  padding: 10px 0 0 5px;
}
.detail li {
  display: flex;
  padding: 4px;
  list-style: none;
  align-items: center;
}
.detail li a {
  margin-left: 3px;
  color: #fff;
  font-family: "Poppins", sans-serif;
}
.detail li svg {
  width: 25px;
  height: 25px;
  margin-right: 5px;
  color: #fff;
  font-size: 25px;
}
.description {
  display: flex;
  flex-direction: column;
}
.card-content li a {
  margin-left: 7px;
  font-family: "Poppins", sans-serif;
}
.card-content li {
  margin: 10px;
  display: flex;
  list-style: none;
  align-items: center;
}
.card-content li svg {
  font-size: 20px;
}
.redirect p {
  display: flex;
  align-items: center;
  padding: 4px;
}
.redirect span {
  font-size: 25px;
}
.redirect a {
  margin-left: 3px;
  font-family: "Poppins", sans-serif;
}
button {
  padding: 5px;
  width: 100px;
  background: #07352b;
  color: #fff;
  border-radius: 8px;
  font-size: 12px;
  border: none;
  cursor: pointer;
}
.button-container {
  display: flex;
  justify-content: flex-end;
  margin: 0 20px 10px 0;
}
button:hover {
  background: #0a4c3e;
  transition-duration: 1s;
}
</style>
