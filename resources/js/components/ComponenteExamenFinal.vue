<template>
    <div class="picsum-images">
      <h2>Imágenes de Picsum</h2>
      <ul>
        <li v-for="image in images" :key="image.id">
          <p><strong>Autor:</strong> {{ image.author }}</p>
          <img :src="image.download_url" :alt="image.author" class="image"/>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        images: []
      };
    },
    created() {
      this.fetchImages();
    },
    methods: {
      async fetchImages() {
        try {
          const response = await axios.get('https://picsum.photos/v2/list');
          this.images = response.data.map(image => ({
            id: image.id,
            author: image.author,
            download_url: image.download_url
          }));
        } catch (error) {
          console.error("Error al obtener las imágenes:", error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .picsum-images {
    text-align: center;
  }
  .image {
    width: 100%;
    max-width: 400px;
    height: auto;
    margin-top: 10px;
    border-radius: 8px;
  }
  </style>
  