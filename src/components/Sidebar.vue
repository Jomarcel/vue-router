<template>
  <div class="sidebar">
    <div class="title">
      UShip
    </div>
    <div class="menu-items">
      <router-link
        to="/"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">
          <img
            src="https://img.icons8.com/pastel-glyph/2x/purchase-order.png"
          />
          Orders
        </div>
      </router-link>
      <router-link
        to="/Shipments"
        active-class="active"
        tag="button"
        class="side-btn"
      >
        <div class="link-container">
          <img src="https://static.thenounproject.com/png/3157384-200.png" />
          Shipments
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.title {
  color: white;
  font-size: 24px;
  margin-top: 10px;
  color: black;
  margin-top: 20px;
  font-weight: 800;
  text-align: center;
}

.menu-items {
  display: flex;
  flex-direction: column;
  /* margin-top: 30px; */
  margin-left: 6px;
}

.menu-items > * {
  margin-top: 60px;
}

.side-btn {
  border: none;
  padding: 16px 0px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: black;
  background-color: transparent;
}

.side-btn.active {
  background-color: white;
  color: teal;
  font-weight: 600;
}

.link-container {
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
img {
  max-width: 50px;
  margin-right: 10px;
  margin-left: 10px;
}
</style>
