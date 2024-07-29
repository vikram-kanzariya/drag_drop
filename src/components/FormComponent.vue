<script setup>
import { ref } from "vue";
import { draggable } from "vuedraggable";

const text=ref('');

const item1 = { id: 1, text: `<input type='text' placeholder='Enter text here' />` };
const item2 = { id: 2, text: `<input type='number' placeholder='Enter Number here' />` };

const container1 = ref([item1, item2]);
const container2 = ref([]);

const handleDragStart = (event, itemData) => {
  event.dataTransfer.setData("application/json", JSON.stringify(itemData));
};

const handleDrop = (event, targetContainer) => {
  const itemData = JSON.parse(event.dataTransfer.getData("application/json"));

  if (targetContainer === container1.value) {
    container2.value = container2.value.filter((i) => i.id !== itemData.id);
  } else if (targetContainer === container1.value) {
    container1.value = container1.value.filter((i) => i.id !== itemData.id);
  }
  targetContainer.push(itemData);
  console.log(targetContainer.length)
};
</script>

<template>
  <div>
    <h3 class="text-center">Form Component</h3>

    <!-- <draggable class="draggable-list" v-model="list2">
      <div class="list-item" v-for="text in list2" :key="element">
        {{ text }}
      </div>
    </draggable> -->

    <!-- <div class="input-lists">
  
      <div draggable="true" class="text">
        <label for="">Text</label>
        <input v-model="text" type="text" placeholder="Enter Text">
      </div>
      
      <div draggable="true" class="number">
        <label for="">Number</label>
        <input v-model="number" type="number" placeholder="Enter Number">
      </div>
      
      <div draggable="true" class="check">
        <label for="">Agree</label>
        <input v-model="check" type="checkbox" placeholder="Check Value">
      </div>
      
      <div draggable="true" class="radio">
        <label for="">Male:</label><input v-model="select" type="radio" name="gender" value="male" placeholder="Check Value">
        <label for="">Female</label><input v-model="select" type="radio" name="gender" value="female" placeholder="Check Value">
      </div>

      <div draggable="true" class="date">
        <label for="">Date: </label>
        <input v-model="date" type="date" placeholder="Enter Date">
      </div>

    </div> -->

    <div class="drag-container">
      <div
        class="container-one"
        v-on:dragover.prevent
        v-on:drop="handleDrop($event, container1 , tag='input')"
      >
        <div class="item"
          v-for="item in container1" :key="item.id"
          @dragstart="handleDragStart($event , item)"
          draggable="true"
        >
        {{ item.text }}
      </div>
      </div>

      <div class="container-two"
      v-on:dragover.prevent
        v-on:drop="handleDrop($event, container2)">
        <div class="item"
        v-for="item in container2" :key="item.id"
          @dragstart="handleDragStart($event , item)"
          draggable="true">

          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.drag-container {
  display: flex;
}

.container-one,
.container-two {
  border: 1px solid #1a1a1a;
  height: 800px;
  width: 600px;
  padding: 10px;
}

.item {
  background: black;
  color: white;
  padding: 10px;
  cursor: pointer;
  width: 90%;
}
</style>
