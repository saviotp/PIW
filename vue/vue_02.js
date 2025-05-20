const { createApp, ref } = Vue

const app = createApp({
    setup() {
      const marcado = ref(false)
      const count = ref(0)
      const novaNota = ref(0)
      const alunos = ref([
      {
        nome: 'Bruno', nota: 10
      }, 
      {
        nome: 'Mateus', nota: 8
      }])

      function lancarNota() {
        alunos.value.push({
          nome: 'Fulano',
          nota: novaNota.value
        })
        novaNota.value = null
      }
      
      return {
        count,
        alunos,
        novaNota,
        lancarNota,
        marcado
      }
    }
  }).mount('#app')
