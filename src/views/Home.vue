<template>
  <div>
    <h1>Cash Wallet</h1>
    <transaction></transaction>
    <transacsion></transacsion>
  </div>
</template>

<script>
import Transaction from '../components/Transaction.vue'
import Transacsion from '../components/Transacsion.vue'
export default {
  components: {
    Transaction,
    Transacsion
  }
}
</script>
