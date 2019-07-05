<template>
  <v-layout row wrap style="margin: 50px">
    <v-flex sm12 md4>
      <v-select
        v-model="userCity"
        :items="cityNew"
        reuired
        @input="kitchenSelect"
        label="User City"
        outline
      ></v-select>
    </v-flex>
    <!-- <v-flex sm12 md4>
      <v-select v-model="userKitchen" :items="kitchenName"  required label="User Kitchen" outline></v-select>
    </v-flex>-->
    <v-flex sm12 md4>
      <v-select
        v-model="userKitchen"
        :items="kitchenName"
        required
        label="User Property"
        outline
      ></v-select>
    </v-flex>
    <v-flex sm12 md4>
      <v-menu v-model="menu3" :close-on-content-click="false" full-width max-width="290">
        <template v-slot:activator="{ on }">
          <v-text-field
            :value="computedDateFormattedMomentjs"
            clearable
            label="Select a date"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" @change="fun3"></v-date-picker>
      </v-menu>
    </v-flex>
    <v-flex sm12 md4>
      <v-btn v-on:click="visible = true" @click="showResp()">Show Response</v-btn>
    </v-flex>
    <v-flex sm12 md12>
      <table class="elevation-4">
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
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";
var moment = require("moment");
export default {
  name: "View",
  data() {
    return {
      // newData[0].userCity = '',
      userCity: "",
      cityNew: [],
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
      ],
      meal_type: ["Breakfast", "Lunch", "Dinner"],
      kitchenName: [],
      menu3: false,
      fetchDate: "",
      userKitchen: "",
      date: new Date().toISOString().substr(0, 10),
      baseURl: "http://3.218.108.144:4300/",
    };
  },
  methods: {
    kitchenSelect() {
      this.kitchenName = [];
      this.kitchenData.data.forEach((element, index) => {
        if (this.userCity === element.CITY)
          this.kitchenName.push(element.LOCALNAME);
      });
      console.log(this.kitchenName.length);
    },
    fun3() {
      this.menu3 = false;
      this.fetchDate = this.date;
      this.fetchDate = moment(this.date, "YYYY-MM-DD").format(
        "dddd" + " " + "DD/MM/YYYY"
      );
      console.log(this.fetchDate);
    },
    async setValue() {
      this.newData[0].selectedDate = moment(this.date).format("dddd" + " " + "DD/MM/YYYY")
      this.fetchDate = this.newData[0].selectedDate
      this.kitchenData = await axios.get(this.baseURl + "Centers/userdata");
      console.log("hi", this.kitchenData);
      this.kitchenData.data.forEach((element, index) => {
        this.cityNew.push(element.CITY);
      });
    },
    showResp() {
      this.newData =  [
        {
          meal_type: {
            breakfast: { type: "breakfast", items: [] },
            lunch: { type: "lunch", items: [] },
            dinner: { type: "dinner", items: [] }
          },
          userCity: "",
          userName: "",
          userHotel: "",
          selectedDate: this.fetchDate
        }
      ];
      const self = this;
      var time1 = this.fetchDate;
      console.log("time1", time1);
      axios
        .post(this.baseURl + "Kitchen_menu/date", {
          todo: this.fetchDate,
          todo1: this.userKitchen
        })
        .then(response => {
          console.log("response", response);
          response.data.forEach((element, index) => {
            if (element.meal_type === "breakfast") {
              self.newData[0].meal_type.breakfast.items.push(element.item_name);
            }
            if (element.meal_type === "lunch") {
              self.newData[0].meal_type.lunch.items.push(element.item_name);
            }
            if (element.meal_type === "dinner") {
              self.newData[0].meal_type.dinner.items.push(element.item_name);
            }
          });
        });
    }
  },
  computed: {
    computedDateFormattedMomentjs() {
      return this.date
        ? moment(this.date).format("dddd" + " " + "DD/MM/YYYY")
        : "";
    }
  },
  mounted() {
    this.setValue();
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
