
<template>
  <div class="p-block p-mt-6">
    <div class="p-d-flex p-jc-center"><h1 style="height: 4rem;">＄</h1></div>
    
    <div class="p-d-flex p-jc-center p-m-4">
      <div class="p-d-block">
        <span class="p-float-label">
          <InputNumber id="dolar" mode="currency" currency="USD" locale="en-US" v-model="valueDolar"/>
          <label for="dolar">Quantidade em Reais</label>
        </span>
      </div>
      <div class="p-d-flex p-ml-2">
        <InlineMessage severity="error" v-show="result && !valueDolar">Insira o valor em dólares</InlineMessage>
      </div>
    </div>

    <div class="p-d-flex p-jc-center p-m-4">
      <span class="p-float-label">
        <InputNumber id="real" mode="currency" currency="USD" locale="en-US" v-model="cotacao"/>
        <label for="real">Cotação do dolar</label>
      </span>
      <div class="p-d-flex p-ml-2">
        <InlineMessage severity="error" v-show="result && !cotacao">Insira a cotação</InlineMessage>
      </div>
    </div>

    <div class="p-d-flex p-jc-center p-m-4">
      <div class="p-d-inline p-m-2">
        <Button label="Clear" @click="clear"/>
      </div>
      <div class="p-d-inline p-m-2">
        <Button label="Calculate" @click="calculate" />
      </div>
    </div>    

    <div class="p-d-flex p-jc-center p-m-2">
      <p v-show="result && (valueDolar && cotacao)">Com {{cotacao}} reais é possível comprar {{result}} dólares a {{cotacao}} cada</p>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      messages: [
        {severity: 'info', content: 'Dynamic Info Message'},
        {severity: 'success', content: 'Dynamic Success Message'},
        {severity: 'warn', content: 'Dynamic Warning Message'}
      ],
      valueDolar: null,
      cotacao: null,
      result: null,
    }
  },
  methods: {
    clear() {
      this.valueDolar = null
      this.cotacao = null
      this.result = false
    },
    
    calculate() {
      this.result = (this.valueDolar / this.cotacao).toFixed(2)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
