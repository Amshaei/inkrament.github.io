<template>
  <div class="custom-class accordian-item">
    <h2 class="accordian-header text-white bg-custom rounded" id="heading">
      <div @click="flag=!flag" class="accordian-button d-flex justify-content-between p-2" type="button" data-bs-toggle="collapse" :data-bs-target="'#'+ counter.id" aria-expanded="true" aria-controls="collapseOne">
        <div>{{ counter.title }}</div> 
        <div v-if="flag">{{ newCount }}</div>
      </div>
    </h2>
    <div :id="counter.id" class="accordion-collapse collapse" aria-labelledby="heading" data-bs-parent="mainAccordian">
      <div class="accordian-body d-flex mb-2 p-2 justify-content-around bg-custom2 rounded"> 
        <div class="p-4 w-50">
          <input class="w-100 text-center" type="number" style="width:100px;height:100px;font-size:35pt;" v-model="newCount"/>
        </div>
        <div class="align-self-center">
          <button @click="incUp()" class="btn mx-1 custom-btn-bg text-white"><img src="../assets/upicon.png" style="width:25px"/></button>
          <button @click="incDown()" class="btn mx-1 custom-btn-bg text-white"><img src="../assets/downicon.png" style="width:25px"/></button>
          <button @click="removeCounter()" class="btn mx-1 custom-btn-bg text-white"><img src="../assets/xicon.png" style="width:25px"/></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CounterComponent',
  props: {
    counter: Object
  },
  data(){
   return{
    newCount: this.counter.count,
    flag: true
   } 
  },
  methods: {
    incUp(){
      this.$emit('updateCounter', this.counter.id, this.newCount+=1)
    },
    incDown(){
      this.$emit('updateCounter', this.counter.id, this.newCount-=1)
    },
    removeCounter(){
      this.$emit('removeCounter', this.counter.id)
    }
  },
  updated(){
    this.$emit('updateCounter', this.counter.id, this.newCount)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bg-custom{
  background-color: #0f1a2c;
}
.bg-custom2 {
  background-color:#1f304e;
}
.bg-custom3{
  background-color: white, 
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type=number]{
    -moz-appearance: textfield;
}

</style>
