<template>
  <v-container>
    <v-layout wrap row>
      <v-flex>
        <table>
          Current Date is :
          {{formattedDate}}
          <br>
          <tr>
            <th>
              <input
                type="text"
                value="username"
                placeholder="User Name"
                v-model="newData.userName"
              >
            </th>

            <th>
              <select v-model="newData.userCity">
                <option value selected>Select Your City</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Jaipur">Jaipur</option>
              </select>
              <!-- <input
                type="text"
                value="usercity"
                placeholder="User City"
                v-model="newData.userCity"
              >-->
            </th>
            <th>
              <select v-model="newData.userHotel">
                <option value selected>Select Your Kitchen</option>
                <option value="Zolo1">Zolo1</option>
                <option value="Zolo2">Zolo2</option>
                <option value="Zolo3">Zolo3</option>
                <option value="Zolo4">Zolo4</option>
              </select>
              <!-- <input
                type="text"
                value="userhotel"
                placeholder="User Hotel"
                v-model="newData.userHotel"
              >-->
            </th>
          </tr>
        </table>
        <br>Add for a day :
        <v-btn @click="addDay">Add Day</v-btn>Add for this week :
        <v-btn @click="addWeek">Add Week</v-btn>
        <br>
        <br>
        <table v-for="iter in tableNum" :key="iter">
          <br>
          <tr>
            <th>
              <input type="date" v-model="newData.selectedDate">
            </th>
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
              <input type="text" value="Breakfast" readonly>
            </th>
            <td v-for="index in 10" :key="index">
              <input class="input" v-model="newData.breakfast[index-1]">
            </td>
          </tr>

          <tr>
            <th>
              <input type="text" value="Lunch" readonly>
            </th>
            <td v-for="index in 10" :key="index">
              <input class="input" v-model="newData.lunch[index-1]">
            </td>
          </tr>

          <tr>
            <td>
              <span>
                <input type="text" value="Dinner" readonly>
              </span>
            </td>
            <td v-for="index in 10" :key="index">
              <input class="input" v-model="newData.dinner[index-1]">
            </td>
          </tr>
        </table>
        <br>
        <v-btn @click="addNewTableElementBreakfast">Add Data</v-btn>Show All Data:
        <v-btn @click="getAllData">Show Data</v-btn>
        <br>
        <br>
        <br>
      </v-flex>

      <v-flex sm12>
        <table v-for="(menu, date, i) in data1" :key="i">
          <!-- menu:{{menu}} -->
          <tr>
            <th>
              <input type="text" :value="menu.date" readonly>
            </th>
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
            <td>
              <input type="text" value="Breakfast" readonly>
            </td>
            <td v-for="index in 10" :key="index">
              <input class="input" v-model="menu.breakfast[index-1]">
            </td>
          </tr>

          <tr>
            <td>
              <input type="text" value="Lunch" readonly>
            </td>
            <td v-for="index in 10" :key="index">
              <input class="input" v-model="menu.lunch[index-1]">
            </td>
          </tr>

          <tr>
            <td>
              <input type="text" value="Dinner" readonly>
            </td>
            <td v-for="index in 10" :key="index">
              <input class="input" v-model="menu.dinner[index-1]">
            </td>
          </tr>
          <br>
          <br>
        </table>
        <v-btn @click="saveAllData">Save All</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
var moment = require("moment");

moment().format();
export default {
  data() {
    return {
      moment: moment,
      data: {},
      tableNum: 1,
      data1: {
        date: {
          breakfast: ["", ""],
          lunch: [],
          dinner: [],
          userCity: "",
          userName: "",
          userHotel: "",
          date: ""
        }
      },
      newData: {
        breakfast: [],
        lunch: [],
        dinner: [],
        userCity: "",
        userName: "",
        userHotel: "",
        selectedDate: ""
      },
      newData1: {
        breakfast: "",
        lunch: "",
        dinner: "",
        userCity: "",
        userName: "",
        userHotel: "",
        selectedDate: ""
      }
    };
  },
  methods: {
    addDay() {
      this.tableNum = 1;
    },
    addWeek() {
      this.tableNum = 7;
    },
    addNewData() {
      this.data["" + this.newData.selectedDate] = this.newData;
      // this.newData = { breakfast: [], lunch: [], dinner: [],  };
    },
    saveAllData() {
      // localStorage.setItem("data-123", JSON.stringify(this.data));
      localStorage.removeItem("data-123");
    },
    async addNewTableElementBreakfast() {
      // console.log(this.newData.breakfast.length);
      var max = this.newData.lunch.length;
      console.log(this.newData.breakfast.length);
      console.log(this.newData.lunch.length);
      console.log(this.newData.dinner.length);

      if (
        this.newData.breakfast.length >= this.newData.lunch.length &&
        this.newData.breakfast.length > this.newData.dinner.length
      ) {
        max = this.newData.breakfast.length;
      }
      if (
        this.newData.breakfast.length >= this.newData.lunch.length &&
        this.newData.breakfast.length <= this.newData.dinner.length
      ) {
        max = this.newData.dinner.length;
      }
      if (
        this.newData.breakfast.length <= this.newData.lunch.length &&
        this.newData.dinner.length >= this.newData.lunch.length
      ) {
        max = this.newData.dinner.length;
      }
      console.log(max);
      let index = 0;
      for (index = 0; index < max; index++) {
        // console.log(this.newData1);
        console.log(this.newData.breakfast[index]);
        this.newData1 = {
          breakfast: "None",
          lunch: "None",
          dinner: "None",
          userCity: "",
          userName: "",
          userHotel: "",
          selectedDate: ""
        };
        if (index + 1 <= this.newData.breakfast.length) {
          this.newData1.breakfast = this.newData.breakfast[index];
        }
        if (index + 1 <= this.newData.lunch.length) {
          this.newData1.lunch = this.newData.lunch[index];
        }
        if (index + 1 <= this.newData.dinner.length) {
          this.newData1.dinner = this.newData.dinner[index];
        }
        // this.newData1.lunch = this.newData.lunch[index];
        // this.newData1.dinner = this.newData.dinner[index];
        this.newData1.userCity = this.newData.userCity;
        this.newData1.userHotel = this.newData.userHotel;
        this.newData1.userName = this.newData.userName;
        this.newData1.selectedDate = this.newData.selectedDate;
        console.log(this.newData1);
        await axios.post(
          `http://localhost:3000/meals/insert`,

          this.newData1
        );
      }

      // await this.getAllData();
    },
    async getAllData() {
      // const tableSchema = await axios.get(
      //   `http://localhost:3000/breakfast/schema`
      // );
      const tableData = await axios.get(`http://localhost:3000/meals`);
      // this.tableSchema = tableSchema.data;
      this.data1 = tableData.data;

      await this.printTable();
    },
    async printTable() {
      let index = 0;
      let index1 = 0;
      // console.log(this.data1);
      for (index = 0; index < this.data1.length; index++) {
        // this.data1.slice().sort();console.log(this.data1);
        for (index1 = index+1; index1 <this.data1.length; index1++) {
          
          // console.log(index);
          // console.log(index1);
          
          // console.log(this.data1[index].date);
          // console.log(this.data1[index1].date);
          if (this.data1[index].date === this.data1[index1].date) {
            // console.log(this.data1[index1].breakfast);
            // console.log(this.data1[index].breakfast);
            // let meow = this.data1[index+1].breakfast.toString() + "," ;
            this.data1[index].breakfast = this.data1[index].breakfast.toString() + "," + this.data1[index1].breakfast.toString();
            this.data1[index].lunch = this.data1[index].lunch.toString() + "," + this.data1[index1].lunch.toString();
            this.data1[index].dinner = this.data1[index].dinner.toString() + "," + this.data1[index1].dinner.toString();
            // let meow3 = meow + meow2;
            // console.log("hi",this.data1[index].breakfast );
          }
        }
        // index1 = 0;

        this.data1[index].breakfast = this.data1[index].breakfast.split(",");
        this.data1[index].lunch = this.data1[index].lunch.split(",");
        this.data1[index].dinner = this.data1[index].dinner.split(",");
      }
      // for(index )
      // console.log('breakfast', this.data1[index].breakfast, typeof(this.data1[0]));
      // this.data1.breakfast=tableData.data.breakfast.split(',');

      console.log(this.data1);
    }
  },
  created() {
    var currentTime = moment().format("DD MM YYYY");
    console.log("Current Date is ", currentTime);
    const x = localStorage.getItem("data-123");
    if (x) this.data = JSON.parse(x);
    // localStorage.removeItem('data-123');
  },
  computed: {
    formattedDate() {
      return moment().format("DD/MM/YYYY");
    }
  }
};
</script>

<style scoped>
.input {
  max-width: 70px;
}
</style>
