<template>
  <div class ='mb-30'>
        <p id = 'wallet'> Wallet Balance : {{balance}} THB</p>
        <div>Transaction</div>
        <div>
            <label for="Date">Date :</label>
            <input class="d" type="date" v-model="form.date"><br>
            
            <label for="category">Category :</label>

            <input type="radio" id="expenses" name="transaction" value="expenses" v-on:click="setExpenses" checked>
            <label style="color:#FF4343" for="expenses">Expenses </label>

            <input type="radio" id="income" name="transaction" value="income" v-on:click="setIncome">
            <label style="color:green" for="income">Income </label> 

            <select class = "category" name="category" id="category" v-model="form.category">
                <option v-if="isExpenses" value="Food & Drink">Food & Drink</option>
                <option v-if="isExpenses" value="Shopping">Shopping</option>
                <option v-if="isExpenses" value="Transport">Transport</option>
                <option v-if="isExpenses" value="Bills">Bills</option>
                <option v-if="isExpenses" value="Healthcare">Healthcare</option>
                <option v-if="isExpenses" value="Education">Education</option>

                <option v-if="!isExpenses" value="Salary">Salary</option>
                <option v-if="!isExpenses" value="Business">Business</option>
                <option v-if="!isExpenses" value="Gifts">Gifts</option>
            </select><br>
            
            <label for="amounts">Amounts :</label>
            <input class="amount" type="number" v-model="form.amounts">THB 
        </div>
        <div>
            <button class="add" v-on:click="addTransacsion">Add Transacsion</button>
        </div>
  </div>
</template>

<script>
import Wallet from '../store/Wallet'
export default {
    data(){
        return{
            isExpenses: true,
            balance: 0,
            form: {
                date: '',
                category: '',
                amounts: 0
            }
        }
    },
    created(){
        Wallet.dispatch('fetchWallet')
        this.fetchBalance()
    },
    methods: {
        setExpenses(){
            this.isExpenses = true
        },
        setIncome(){
            this.isExpenses = false
        },
        clearForm(){
            this.form = {
                date: '',
                category: '',
                amounts: 0
            }
        },
        addTransacsion(){
            let payload = {
                date: this.form.date,
                category: this.form.category,
                amounts: this.form.amounts
            }
            if (this.isExpenses) {
                payload.amounts *= -1
            }
            Wallet.dispatch('addTransacsion', payload)
            console.log(payload)
            this.clearForm()
            this.fetchBalance()
        },
        fetchBalance(){
            this.balance = Wallet.getters.balance
        }
    },
}
</script>
<style scoped lang='scss'>
.mb-30{
    margin: 30px;
}
.add{
    background-color: #4CAF50;
    border: none;
    border-radius: 4px;
    color: white;
    padding: 10px 24px;
    text-align: center;
    margin: 4px 4px;
    font-size: 16px;
}
.wallet{
    color: red;
}
.category{
    width: 110px;
    height: 25px;
    border-radius: 4px;
    margin: 5px;
}
.d{
    width: 125px;
    height: 25px;
    border-radius: 4px;
    margin: 5px;
}
.amount{
    width: 120px;
    height: 20px;
    border-radius: 4px;
    margin: 5px;
}
</style>