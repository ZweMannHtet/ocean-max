<template>
  <div class="container">
    <section>
      <div class="img"></div>
      <div class="center">
        <div class="message">
          <div class="logo-text">
            <p class="normal">Create Your Dream House</p>
            <p class="big">Here!</p>
            <button>Join with Us</button>
          </div>
          <div class="logo-img">
            <img src="../../public/images/mainpage/family.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="card">
      <PropertyCard />
    </section>
    <section></section>
    <section></section>
  </div>
</template>

<script setup>
import PropertyCard from "@/components/PropertyCard.vue";
</script>

<style scoped>
.img {
  background: url("../../public/images/mainpage/sunview.jpg") no-repeat;
  height: 1000px;
  width: 100vw;
  background-position: center;
  background-size: cover;
  position: relative;
}
.img::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
}
.center {
  position: absolute;
  top: 40%;
  left: 70%;
  width: 100%;
  transform: translate(-50%, -50%);
  padding: 0 20px;
  text-align: center;
}
.message {
  display: flex;
  align-items: center;
  justify-content: center;
}
.message .logo-img {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
.logo-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  opacity: 0.85;
  box-shadow: #283747;
}
.logo-text {
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  padding: 0 10px;
}
.logo-text button {
  height: 40px;
  border-radius: 10px;
  width: 120px;
  border: 2px solid #fff;
  font-size: 17px;
  font-weight: 500;
  padding: 0 10px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  color: #fff;
  background: none;
}
.logo-text button:hover {
  background: #fff;
  color: #000;
}
.logo-text .normal {
  color: #283747;
  font-size: 45px;
  margin-bottom: 5px;
  font-family: "FreightBig";
}
.logo-text .big {
  color: #283747;
  opacity: 0.9;
  font-size: 65px;
  font-weight: 600;
  text-align: left;
  font-family: "Poppins", sans-serif;
  margin-bottom: 10px;
}
</style>
