<template>
  <div class="row d-flex justify-content-center">
    <img alt="Vue logo" src="./assets/logo-white.png" style="width:35rem;">
    <div class="w-75">
      <div class="input-group m-3 d-flex justify-content-center">
        <input class="custom-input text-white" placeholder="Counter Name" type="text" v-model="input">
        <button class="btn custom-btn-bg text-white rounded-end" type="button" id="button-addon" @click="addCounter()">Add</button>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="accordian w-75" id="mainAccordian">
          <CounterComponent @removeCounter="removeCounter" @updateCounter="updateCounter" v-for="(counter, counterCount) in counters" :key="counterCount" :counter="counter" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CounterComponent from './components/CounterComponent.vue'
import '../scss/custom.scss'
export default {
  name: 'App',
  data(){
    return{
      idIncrement: 'o',
      counters: [],
      input: undefined,
    }
  },
  methods: {
    addCounter(){
      this.counters.push({
        id: this.idIncrement,
        title: this.input,
        count: 0
      })
      this.idIncrement = this.idIncrement + 'o'
      window.localStorage.setItem('storedCounters', JSON.stringify(this.counters))
      this.input = ''
    },
    updateCounter(id, newCount){
      let arrIndex = this.counters.map(function(x){
        return x.id
      }).indexOf(id)
      console.log('old: ' , this.counters[arrIndex].count)
      this.counters[arrIndex].count = newCount 
      console.log('new: ' , this.counters[arrIndex].count)
      window.localStorage.setItem('storedCounters', JSON.stringify(this.counters))
    },
    removeCounter(id){
      let arrIndex = this.counters.map(function(x){
        return x.id
      }).indexOf(id)
      this.counters.splice(arrIndex,1)
      window.localStorage.setItem('storedCounters', JSON.stringify(this.counters))
    }
  },
  components: {
    CounterComponent
  },
  created(){
    // If there is no storedCounters, create storedCounters with empty array
    let temp = window.localStorage.getItem('storedCounters')
    if (temp == null) {
      window.localStorage.setItem('storedCounters', JSON.stringify([]))
      console.log('Created storedCounters: ', window.localStorage.getItem('storedCounters')  )
    } else {
      this.counters = JSON.parse(window.localStorage.getItem('storedCounters'))
      if (this.counters.length>0){
        this.idIncrement = this.counters[this.counters.length - 1].id + 'o'
      }
    }
  }
}
</script>
<style>
html {
  height: 100%;
}
body{
  background: rgb(16,41,61);
  background: linear-gradient(21deg, rgba(16,41,61,1) 0%, rgba(0,0,0,1) 50%);
}
.custom-btn-bg{
  background: rgb(33,26,17);
background: linear-gradient(0deg, rgba(33,26,17,1) 0%, rgba(146,107,63,1) 10%, rgba(152,111,65,1) 53%, rgba(156,117,73,1) 90%, rgba(241,190,93,1) 100%);
}
.custom-input{
  border: none;
  background: rgba(255,255,255, .2);
}

</style>