<script setup>
  import {useRoute} from "vue-router";
  import axios from "axios";
  import {onMounted, ref} from "vue";

  const route = useRoute()
  const isLoaded = ref(false)
  const product = ref({})
  const fetchProduct = async () => {
      isLoaded.value = false
      const product_req = await axios.get(`http://localhost:8000/api/products/${route.params.id}`)
      product.value = product_req.data
      isLoaded.value = true
  }
  onMounted(async () => {
      await fetchProduct()
  })
</script>

<template>
    <h1>Product </h1>
    <div v-if="isLoaded" >
        <div class="card-body position-absolute top-1 end-0">
            <h2>{{ product.title }}</h2>
            <h4><b>{{product.price}}₸</b></h4>
        </div>
    </div>

    <div v-else>
        ...loading
    </div>

    <div class="sticky-sm" style="width: 17%"><img :src="product.image" class="card-img-top" :alt="product.title"></div>
  <div>
      <div class="accordion" id="accordionExample">
          <div class="accordion-item">
              <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      Описание
                  </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                      {{product.description}}
                  </div>
              </div>
          </div>
      </div>
  </div>


</template>
