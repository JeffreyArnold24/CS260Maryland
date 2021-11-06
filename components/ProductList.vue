<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
        <p>{{product.city}}</p>
      </div>
      <div class="image">
        <img :src="'/images/products/'+product.image">
      </div>



      <div class="price">
        <button @click="addToPlan(product)" class="auto">Plan</button>
      </div>

      <div class="dropdown">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <div>About</div>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-card>
              <v-card-text>
                <div>{{product.info}}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>

        </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  methods: {
      addToPlan(product) {
          let exist = false;
          this.$root.$data.cart.forEach(item => {
            if (item.id == product.id) {
                exist = true;
            }
          });
          if (!exist) {
            product.quantity = 1;
            this.$root.$data.cart.push(product);
          }
      }
  }

}
</script>

<style scoped>
.wrapper {

  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 300px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 300px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #F3D42D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
    justify-content: center;

}

.price button {
  height: 50px;
  width: 300px;
  background: #FF2817;
  color: white;
  border: none;
}

.dropdown {

height: 50px;
width: 300px;
background: #FFF;
color: black;
border: none;
}


</style>
