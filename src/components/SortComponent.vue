<template>
  <div class="d-flex">
    <div class="list">
      <div class="drag1">
        <h2>Select Input Type</h2>
        <draggable
          class="d-flex flex-sm-row"
          v-model="availableInputs"
          group="availableInputs"
          tag="ol"
          @change="handleChange($event)"
          :disabled="submittedForm"
        >
          <template #item="{ element: data }">
            <li>
              <label class="selectinp" for="">{{ data.type }} </label>
            </li>
          </template>
        </draggable>
      </div>

      <div class="drag2">
        <h2>Form</h2>

        <form action="" ref="form" @submit.prevent="submitForm">
          <draggable
            class="d-flex flex-sm-row"
            v-model="demoInputs"
            group="availableInputs"
            @change="handleDrag($event)"
          >
            <template #item="{ element: data, index }">
              <div class="submitForm">
                <label>{{ data.type }}-{{ index + 1 }} </label>

                <input
                  v-if="data.type == 'text'"
                  :type="data.type"
                  v-model="data.value"
                  :name="'text-' + index"
                  :placeholder="'Enter ' + data.type"
                  :required="data.required"
                  :disabled="submittedForm"
                />

                <input
                  v-if="data.type == 'number'"
                  :type="data.type"
                  v-model="data.value"
                  :name="'number-' + index"
                  :placeholder="'Enter ' + data.type"
                  :required="data.required"
                  :disabled="submittedForm"
                />


                <input
                  v-if="data.type == 'date'"
                  :type="data.type"
                  v-model="data.value"
                  :name="'date-' + index"
                  :placeholder="'Enter ' + data.type"
                  :required="data.required"
                  :disabled="submittedForm"
                />

                <input
                  v-if="data.type == 'checkbox'"
                  :label="data.type"
                  :type="data.type"
                  :name="'  checkbox-' + index"
                  v-model="data.value"
                  :placeholder="'Enter ' + data.type"
                  :required="data.required"
                  :disabled="submittedForm"
                />

                <input
                  v-if="data.type == 'radio'"
                  :type="data.type"
                  :name="'radio-' + index"
                  v-model="data.value"
                  :placeholder="'Enter ' + data.type"
                  :required="data.required"
                  :disabled="submittedForm"
                />

                <v-switch
                  :disabled="submittedForm"
                  label="required"
                  @change="data.required = !data.required"
                  :v-model="data.required"
                ></v-switch>

                <!-- <button type="submit" class="submit">SUBMIT</button> -->
              </div>
            </template>
          </draggable>

          <button v-if="demoInputs.length > 0" type="submit" class="submit">
            SUBMIT
          </button>
        </form>
      </div>

      <div class="formdata">
        <h2>Output</h2>

        <div class="output" v-if="outputArray.length > 0">
          <li class="outputli" v-for="value in outputArray" :key="value.id">
            {{ value }}
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
ol {
  font-weight: bold;
}
.selectinp {
  margin-left: 5px;
  font-weight: bold;
}
.submitForm {
  display: flex;
  flex-direction: row;
}

.submit {
  background-color: rgb(102, 238, 102);
  padding: 10px;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  border-radius: 6px;
  margin-left: 45%;
}

.drag1,
.drag2,
.formdata {
  border: 1px solid black;
  border-radius: 4px;
  margin: 10px;
}
.outputli {
  list-style: none;
}
.formdata {
  width: 500px;
}

.drag2 {
  width: 600px;
  height: auto;
}

.drag1 {
  width: 300px;
}

.drag2 input,
label {
  padding: 5px;
  margin: 5px;
}

button {
  margin-top: 10%;
}

.drag2 input {
  width: 250px;
}

.list {
  display: flex;
}

li,
input,
label {
  padding: 3px;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
}

h2 {
  text-align: center;
}

.output {
  text-align: center;
  padding: 5px;
  font-weight: bold;
  box-sizing: border-box;
}
</style>

<script setup>
import { ref } from "vue";
import draggable from "vuedraggable";

const availableInputs = ref([
  {
    id: 1,
    type: "number",
    required: false,
    placeholder: "",
    value: null,
  },
  {
    id: 2,
    type: "text",
    required: false,
    placeholder: "",
    value: null,
  },
  {
    id: 3,
    type: "date",
    required: false,
    placeholder: "",
    value: null,
  },
  {
    id: 4,
    type: "radio",
    required: false,
    placeholder: "",
    value: null,
  },
  {
    id: 5,
    type: "checkbox",
    required: false,
    placeholder: "",
    value: null,
  },
]);

const demoInputs = ref([]);

const handleChange = (e) => {
  console.log("Event is: ", e);

  if (e.removed) {
    availableInputs.value = [
      {
        id: 1,
        type: "number",
        required: false,
        placeholder: "",
        value: null,
      },
      {
        id: 2,
        type: "text",
        required: false,
        placeholder: "",
        value: null,
      },
      {
        id: 3,
        type: "date",
        required: false,
        placeholder: "",
        value: null,
      },
      {
        id: 4,
        type: "radio",
        required: false,
        placeholder: "",
        value: null,
      },
      {
        id: 5,
        type: "checkbox",
        required: false,
        placeholder: "",
        value: null,
      },
    ];

    console.log("Before-Length: ", demoInputs.value.length);
  } else if (e.added) {
    console.log("eeeeeeeee", e);
    availableInputs.value = [
      {
        id: 1,
        type: "number",
        required: false,
        placeholder: "",
        value: null,
      },
      {
        id: 2,
        type: "text",
        required: false,
        placeholder: "",
        value: null,
      },
      {
        id: 3,
        type: "date",
        required: false,
        placeholder: "",
        value: null,
      },
      {
        id: 4,
        type: "radio",
        required: false,
        placeholder: "",
        value: null,
      },
      {
        id: 5,
        type: "checkbox",
        required: false,
        placeholder: "",
        value: null,
      },
    ];
    console.log("After-Length: ", demoInputs.value.length);
  }
};

let form = ref("");
let fd = ref(null);

let outputArray = ref([]);
let submittedForm = ref(false);


const submitForm = () => {
  fd.value = new FormData(form.value);

  outputArray.value = demoInputs.value;
  let valueArr = [];
  console.log("FormData: ", fd.value);

  fd.value.forEach((data) => {
    valueArr.push(data);
  });

  console.log("valueArr: ", valueArr);

  valueArr.forEach((element, i) => {
    outputArray.value[i].value = element;
  });

  if (fd.value) {
    submittedForm.value = true;
  }
};

const handleDrag = (e) => {
  console.log("event: " , e)

  if(e.added){
    e.added.element.id = Date.now();
  }
}
</script>
