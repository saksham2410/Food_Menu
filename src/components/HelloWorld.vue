
<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/zolologo.jpg')" class="my-3" contain height="200"></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Food Menu Creation</h1>
        <p class="subheading font-weight-regular">
          Using this you can create your own menu,
          <br>
        </p>
      </v-flex>
      <v-form>
        <v-container>
          <v-layout>
            <v-flex xs12 md4>
              <v-text-field label="User Name" required></v-text-field>
            </v-flex>

            <v-flex xs12 md4>
              <v-select :items="items" label="User City" required></v-select>
            </v-flex>

            <v-flex xs12 md4>
              <v-select :items="items1" label="User Hotel" required></v-select>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>

      <v-flex xs12>
        <v-date-picker v-model="date_picker" ref="picker" min></v-date-picker>
      </v-flex>

      <v-flex xs12 v-for="index in tables" :key="index">
        {{getIndex(index)}}
        <table class="table">
          <template align="right">
            <tr>
              <th>{{ getDate(date_picker, index) }}</th>
              <th v-for="index in tables1" :key="index">Item {{index}}</th>
            </tr>
            <tr>
              <th :v-model="meals[0]">Breakfast</th>
              <td v-for="index in tables1" :key="index">
                <input
                  :name="index"
                  type="text"
                  class="input"
                  v-model="table.breakfast.item[index-1]"
                >
              </td>
            </tr>

            <tr>
              <th :v-model="meals[1]">Lunch</th>
              <td v-for="index in tables1" :key="index">
                <input :name="index" type="text" class="input" v-model="table.lunch.item[index-1]">
              </td>
            </tr>

            <tr>
              <th :v-model="meals[2]">Dinner</th>
              <td v-for="index in tables1" :key="index">
                <input :name="index" type="text" class="input" v-model="table.dinner.item[index-1]">
              </td>
            </tr>
          </template>
        </table>
        <br>
        <br>
        <br>
      </v-flex>
      <br>
      <button type="button" v-on:click="addNewTask()" class="btn btn-primary btn-block mt-3">Submit</button>
      <br>
    </v-layout>

    <v-btn fab @click="tables++">
      Add Day
      <v-icon>add</v-icon>
    </v-btn>
    <br>

    <v-btn fab @click="tables1++">
      Add Items
      <v-icon>add</v-icon>
    </v-btn>

    <span>{{ date_picker }}</span>
    <br>
    <span>{{ table }}</span>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      meals: ["breakfast", "lunch", "dinner"],
      tables: 1,
      date_picker:'',
      meal_type: "",
      breakfast_item: "",
      lunch_item: "",
      dinner_item: "",
      tables1: 2,
      table: {
        breakfast: {
          item: []
        },
        lunch: {
          item: []
        },
        dinner: {
          item: []
        }
      },

      items: ["Pune", "Bengaluru", "Hyderabad"],
      items1: ["Zolo1", "Zolo2", "Zolo3", "Zolo4"]
    };
  },
  methods: {
    getIndex(index) {
      return index;
    },
    getDate(date, index) {
      return date + " " + (index - 1);
    },
    addNewTask() {
      axios
        .post("/api/menu", {
          meal_type: this.meal_type,
          breakfast_item: this.table.breakfast.item[index - 1],
          lunch_item: this.table.lunch.item[index - 1],
          dinner_item: this.table.dinner.item[index - 1]
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
input {
  width: 100px;
  border: 1px solid #acacac;
  margin: 0;
  padding: 2px;
}
textarea {
  width: 100px;
  height: 100px;
  border: 1px solid #acacac;
}
</style>
