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
    <div v-if="isLoaded" >
        <div
            style="font-weight: bold;
            width:500px"
        >
        <div class="sticky-sm"
             style="width: 400px;
             height: 300px;
             margin: 30px;
             padding: 0px;
             transform: perspective(0px) rotate(0deg);"
        >
            <img :src="product.image" class="card-img-top" :alt="product.title">
        </div>

        <div
            style="font-family: 'TT Norms Pro', sans-serif;
            width: 800px;
            height: 150px;
            transform: translateX(443px) translateY(-274px);
            font-size: 26px;"
        >
            <h2>{{ product.title }}</h2>

        </div>
            <div
                style="font-family: 'TT Norms Pro', sans-serif;
                height: 50px;
                transform: translateX(443px) translateY(-274px);
                margin-bottom: 10px"
            >
             <h4><b>{{product.price}} ₸</b></h4>
            </div>
        <div class="accordion" id="accordionExample"
             style="width:800px;
             transform: translateX(443px) translateY(-274px);"
        >
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Описание
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                    <div class="accordion-body" >
                        {{product.description}}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

    <div v-else>
        ...loading
    </div>





</template>

<style>
@import url('https://fonts.cdnfonts.com/css/tt-norms-pro');
</style>

