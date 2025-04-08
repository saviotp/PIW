const { createApp, ref } = Vue

const app = createApp({
    setup() {
      const count = ref(0)
      const alunos = ref([
      {
        nome: 'Bruno', nota: 10
      }, 
      {
        nome: 'Mateus', nota: 8
      }])
      
      return {
        count,
        alunos
      }
    }
  }).mount('#app')
