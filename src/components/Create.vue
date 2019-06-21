<template>
  <v-app id="inspire">
    <v-content>
      <v-container column wrap align-center>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-card-text>
              <v-form>
                <v-container grid-list-md>
                  <v-layout row wrap>
                    
                    <v-flex sm12 md4>
                      <v-text-field label="Filled By: " v-model="newData[0].userName" outline></v-text-field>
                    </v-flex>
                    <v-flex sm12 md4>
                      <v-select
                        v-model="newData[0].userCity"
                        :items="cityNew"
                        reuired
                        @input="kitchenSelect"
                        label="User City"
                        outline
                      ></v-select>
                    </v-flex>
                    <v-flex sm12 md4>
                      <v-select
                        v-model="newData[0].userHotel"
                        :items="kitchenName"
                        required
                        label="User Kitchen"
                        outline
                      ></v-select>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-form>
            </v-card-text>
            <v-layout row wrap>
              <v-flex sm12 md4>
                Add for this week :
                <v-menu v-model="menu1" :close-on-content-click="false" full-width max-width="290">
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      :value="computedDateFormattedMomentjs"
                      clearable
                      label="Select a date"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" @change="fun1"></v-date-picker>
                </v-menu>
                <v-btn v-on:click="visible = !visible" @click="setNewDate()">Add for this Week</v-btn>
              </v-flex>
              <v-flex sm6 md2></v-flex>
              <v-flex sm12 md4>
                Add for a day :
                <v-menu v-model="menu2" :close-on-content-click="false" full-width max-width="290">
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      :value="computedDateFormattedMomentjs"
                      clearable
                      label="Select a date"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" @change="fun2"></v-date-picker>
                </v-menu>
                <v-btn v-on:click="visible = true">Add Day</v-btn>
              </v-flex>
            </v-layout>

            <br>
            <table v-if="visible" class="elevation-4">
              <tr justify-center>
                <th>Date : {{newData[0].selectedDate}}</th>
                <th>Item 1</th>
                <th>Item 2</th>
                <th>Item 3</th>
                <th>Item 4</th>
                <th>Item 5</th>
                <th>Item 6</th>
                <th>Item 7</th>
                <th>Item 8</th>
                <th>Item 9</th>
                <th>Item 10</th>
              </tr>
              <tr>
                <th>
                  <input type="text" v-model="meal_type[0]" readonly>
                </th>
                <td v-for="index in 10" :key="index">
                  <input class="input" v-model="newData[0].meal_type.breakfast.items[index-1]">
                </td>
              </tr>

              <tr>
                <th>
                  <input type="text" v-model="meal_type[1]" readonly>
                </th>
                <td v-for="index in 10" :key="index">
                  <input class="input" v-model="newData[0].meal_type.lunch.items[index-1]">
                </td>
              </tr>

              <tr>
                <th>
                  <input type="text" v-model="meal_type[2]" readonly>
                </th>
                <td v-for="index in 10" :key="index">
                  <input class="input" v-model="newData[0].meal_type.dinner.items[index-1]">
                </td>
              </tr>
              <!-- </template> -->
            </table>
            <v-flex v-if="!visible">
              <table v-for="day in 7" :key="day">
                <br>
                <tr>
                  <th>Date: {{newData[day-1].selectedDate}}</th>
                  <th>Item 1</th>
                  <th>Item 2</th>
                  <th>Item 3</th>
                  <th>Item 4</th>
                  <th>Item 5</th>
                  <th>Item 6</th>
                  <th>Item 7</th>
                  <th>Item 8</th>
                  <th>Item 9</th>
                  <th>Item 10</th>
                </tr>

                <tr>
                  <th>
                    <input type="text" v-model="meal_type[0]" readonly>
                  </th>
                  <td v-for="index in 10" :key="index">
                    <input
                      class="input"
                      v-model="newData[day-1].meal_type.breakfast.items[index-1]"
                    >
                  </td>
                </tr>

                <tr>
                  <th>
                    <input type="text" v-model="meal_type[1]" readonly>
                  </th>
                  <td v-for="index in 10" :key="index">
                    <input class="input" v-model="newData[day-1].meal_type.lunch.items[index-1]">
                  </td>
                </tr>

                <tr>
                  <th>
                    <input type="text" v-model="meal_type[2]" readonly>
                  </th>
                  <td v-for="index in 10" :key="index">
                    <input class="input" v-model="newData[day-1].meal_type.dinner.items[index-1]">
                  </td>
                </tr>
              </table>
              <br>
              <br>
              <br>
            </v-flex>
            <br>
            <v-btn @click="setNewDate();getAllData();">Add Data</v-btn>
            {{successtext}}
            <v-btn @click="updateState" v-if="this.successtext==='Added'">OK</v-btn>
            <br>
            <br>
            <br>
            <br>
            <v-flex>
              <br>
              <br>
              <v-flex>
                <v-img :src="require('../assets/zolo-logo.png')" class="my-3" contain height="50"></v-img>
              </v-flex>
              <br>
              <br>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; Zolostays 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import axios from "axios";
var moment = require("moment");
export default {
  name: "Create",
  data() {
    return {
      menu1: false,
      menu2: false,
      menu3: false,
      date: new Date().toISOString().substr(0, 10),
      baseURl: "http://3.218.108.144:4300/",
      kitchenNew: [],
      todaydate: "",
      kitchenName: ['Please select a City First'],
      cityNew: [],
      day: "",
      successtext: "",
      fetchDate: "",
      visible: true,
      moment: moment,
      data: {},
      meow2: [],
      breakdata: [],
      lunchdata: [],
      dinnerdata: [],
      items: { breakfast: [], lunch: [], dinner: [] },
      meal_type: ["Breakfast", "Lunch", "Dinner"],
      data1: {
        meal_type: "",
        item_name: "",
        userCity: "",
        userName: "",
        userHotel: "",
        selectedDate: ""
      },
      kitchenData: [],
      newData: [
        {
          meal_type: {
            breakfast: { type: "breakfast", items: [] },
            lunch: { type: "lunch", items: [] },
            dinner: { type: "dinner", items: [] }
          },
          userCity: "",
          userName: "",
          userHotel: "",
          selectedDate: new Date().toISOString().substr(0, 10)
        }
      ]
    };
  },
  props: {
    source: String
  },

  methods: {
    kitchenSelect() {
      this.kitchenName = [];
      this.kitchenData.data.forEach((element, index) => {
        if (this.newData[0].userCity === element.CITY) this.kitchenName.push(element.LOCALNAME);
      });
      console.log(this.kitchenName.length);
    },
    fun1() {
      this.menu1 = false;
      this.newData[0].selectedDate = this.date;
      this.setNewDate();
    },
    fun2() {
      this.menu2 = false;
      this.newData[0].selectedDate = this.date;
      this.setNewDate();
    },
    fun3() {
      this.menu3 = false;
      this.newData[0].selectedDate = this.date;
      this.fetchDate = this.date;
      this.setNewDate();
    },
    testFun(element1, element2) {
      var newData1 = {
        meal_type: "",
        item_name: "",
        userCity: "",
        userName: "",
        userHotel: "",
        selectedDate: ""
      };
      newData1.meal_type = element2;
      newData1.item_name = element1;
      newData1.userCity = this.newData[0].userCity;
      newData1.userName = this.newData[0].userName;
      newData1.userHotel = this.newData[0].userHotel;
      newData1.selectedDate = this.newData[0].selectedDate;
      return newData1;
    },
    updateState() {
      this.successtext = "";
    },
    addNewTableElementBreakfast() {
      // if (this.visible) {
        this.newData.forEach((element, index) => {
          element.meal_type.breakfast.items.forEach(element1 => {
            var response = this.testFun(
              element1,
              element.meal_type.breakfast.type
            );
            console.log(response);
            axios.post(this.baseURl + "Kitchen_menu/insert", response);
          });
          element.meal_type.lunch.items.forEach(element1 => {
            var response = this.testFun(element1, element.meal_type.lunch.type);
            console.log(response);
            axios.post(this.baseURl + "Kitchen_menu/insert", response);
          });
          element.meal_type.dinner.items.forEach(element1 => {
            var response = this.testFun(
              element1,
              element.meal_type.dinner.type
            );
            console.log(response);
            axios.post(this.baseURl + "Kitchen_menu/insert", response);
          });
        });
      this.successtext = "Added";
    },
    async updateData() {
      this.meow2.forEach((element, index) => {
        if (this.newData[0].selectedDate === element) {
          axios
            .delete(this.baseURl + "Kitchen_menu/delete", {
              data: { id: this.newData[0].selectedDate }
            })
            .then(response => {});
        }
      });
      await this.addNewTableElementBreakfast();
    },
    async getAllData() {
      const self = this;
      await axios
        .get(this.baseURl + "Kitchen_menu/getdistinct")
        .then(response => {
          response.data.forEach(element => {
            self.meow2.push(element.daily_date);
          });
          console.log(self.meow2);
        });

      await this.updateData();
    },
    setDate() {},
    setNewDate() {
      var time = this.newData[0].selectedDate;
      for (var i = 0; i < 7; i++) {
        this.newData[i].selectedDate = moment(time, "YYYY-MM-DD")
          .add(i, "day")
          .format("dddd" + " " + "DD/MM/YYYY");
      }
    },
    async getKitchenData() {
      this.kitchenData = await axios.get(this.baseURl + "Centers/userdata");
      console.log("hi", this.kitchenData);
      this.kitchenData.data.forEach((element, index) => {
        this.cityNew.push(element.CITY);
      });
      this.todaydate = moment().format("YYYY-MM-DD");
      for (var index = 0; index < 6; index++) {
        this.newData.push({
          meal_type: {
            breakfast: { type: "breakfast", items: [] },
            lunch: { type: "lunch", items: [] },
            dinner: { type: "dinner", items: [] }
          },
          userCity: "",
          userName: "",
          userHotel: "",
          selectedDate: "Date"
        });
      }
      console.log("length of newData", this.newData.length);
      // axios.get(this.baseURl + "Zolo_city/userdata").then(response => {
      //   var items = [];
      //   response.data.forEach(element => {
      //     items.push(element.CITY);
      //     this.kitchenName.push(element.LOCALNAME);
      //   });
      //   this.cityNew = Array.from(new Set(items));
      // });
      this.newData[0].selectedDate = this.date;
    }
  },
  created() {},
  beforeMount() {
    this.getKitchenData();
  },
  computed: {
    formattedDate() {
      return moment().format("YYYY-MM-DD");
    },
    computedDateFormattedMomentjs() {
      return this.date
        ? moment(this.date).format("dddd" + " " + "DD/MM/YYYY")
        : "";
    }
  }
};
</script>
<style scoped>
.test {
  color: white;
  /* background: white; */
}
table {
  width: 750px;
  border-collapse: collapse;
  margin: 20px auto;
  overflow: scroll;
}
.input-group__input * {
  color: white;
}
.v-overflow-btn {
  color: white;
}
.inputdate {
  background: #bcbfc2;
  color: rgb(3, 3, 3);
}
.input {
  max-width: 70px;
  border: 0.1px solid rgb(68, 70, 95);
}
/* tr:nth-of-type(odd) {
	background: rgb(207, 38, 38);
	} */

th {
  background: #bcbfc2;
  /* color: rgb(3, 3, 3); */
  font-weight: bold;
}

td,
th {
  padding: 1px;
  border: 1px solid rgb(77, 78, 95);
  text-align: left;
  font-size: 18px;
}

@media only screen and (max-width: 760px),
  (min-device-width: 300px) and (max-device-width: 1024px) {
  body {
    background-color: black;
  }

  table {
    width: 250px;
    /* overflow: scroll; */
  }
  .input {
    max-width: 70px;
    border: 0.1px solid rgb(68, 70, 95);
  }
}

/*
Max width before this PARTICULAR table gets nasty
This query will take effect for any screen smaller than 760px
and also iPads specifically.
*/
</style>