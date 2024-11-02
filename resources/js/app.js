import Vue from 'vue';
import axios from 'axios';
import Examen from './components/ComponenteExamenFinal.vue';

new Vue({
    el: '#app', 
    data() {
        return {
            keeps: [] 
        };
    },
    components: {
        Examen
        
    },
    created() {
        this.getKeeps(); 
    },
    methods: {
      
        getKeeps() {
            axios.get('reporte').then(response => {
                this.keeps = response.data;
            });
        }
    }
});