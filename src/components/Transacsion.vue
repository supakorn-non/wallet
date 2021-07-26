<template>
  <div>
      <table >
          <thead>
              <tr>
                  <th>Date</th>
                  <th>| Category</th>
                  <th>| Amounts</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(transacsion, index) in wallets" :key="index">
                  <td>{{ transacsion.date }}</td> 
                  <td>{{ transacsion.category }}</td> 
                  <td>{{ transacsion.amounts}} </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import Wallet from '../store/Wallet'
export default {
    data() {
        return {
            wallets: []
        }
    },
    created(){
        this.fetchWallet()
    },
    methods: {
        fetchWallet(){
            Wallet.dispatch("fetchWallet")
            this.wallets = Wallet.getters.wallets
        }
    }
}
</script>

<style lang="scss">

</style>