<template>
  <v-container>
    <v-layout wrap row>
      <v-flex>
        <!-- header Constant b-table -->

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
        <v-btn v-on:click="visible = !visible">Add Week</v-btn>
        <br>
        <br>

        <!-- Table in which we enter the data -->

        <table v-show="visible">
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
              <input type="text" v-model="meal_type[0]" readonly>
            </th>
            <td v-for="index in 10" :key="index">
              <input class="input" v-model="newData.meal_type.breakfast.items[index-1]">
            </td>
          </tr>

          <tr>
            <th>
              <input type="text" v-model="meal_type[1]" readonly>
            </th>
            <td v-for="index in 10" :key="index">
              <input class="input" v-model="newData.meal_type.lunch.items[index-1]">
            </td>
          </tr>

          <tr>
            <td>
              <span>
                <input type="text" v-model="meal_type[2]" readonly>
              </span>
            </td>
            <td v-for="index in 10" :key="index">
              <input
                class="input"
                id="newData.meal_type.dinner.type"
                v-model="newData.meal_type.dinner.items[index-1]"
              >
            </td>
          </tr>
        </table>

        <!-- Show Data For a week -->

        <v-flex v-show="!visible">
          <table>
            <br>
            <tr>
              <th>
                <input type="date" v-model="newData0.selectedDate">
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
                <input type="text" v-model="meal_type[0]" readonly>
              </th>
              <td v-for="index in 10" :key="index">
                <input class="input" v-model="newData0.meal_type.breakfast.items[index-1]">
              </td>
            </tr>

            <tr>
              <th>
                <input type="text" v-model="meal_type[1]" readonly>
              </th>
              <td v-for="index in 10" :key="index">
                <input class="input" v-model="newData0.meal_type.lunch.items[index-1]">
              </td>
            </tr>

            <tr>
              <td>
                <span>
                  <input type="text" v-model="meal_type[2]" readonly>
                </span>
              </td>
              <td v-for="index in 10" :key="index">
                <input
                  class="input"
                  id="newData.meal_type.dinner.type"
                  v-model="newData0.meal_type.dinner.items[index-1]"
                >
              </td>
            </tr>
          </table>
          <br>
          <br>
          <table>
            <br>
            <tr>
              <th>
                <input type="date" v-model="newData2.selectedDate">
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
                <input type="text" v-model="meal_type[0]" readonly>
              </th>
              <td v-for="index in 10" :key="index">
                <input class="input" v-model="newData2.meal_type.breakfast.items[index-1]">
              </td>
            </tr>

            <tr>
              <th>
                <input type="text" v-model="meal_type[1]" readonly>
              </th>
              <td v-for="index in 10" :key="index">
                <input class="input" v-model="newData2.meal_type.lunch.items[index-1]">
              </td>
            </tr>

            <tr>
              <td>
                <span>
                  <input type="text" v-model="meal_type[2]" readonly>
                </span>
              </td>
              <td v-for="index in 10" :key="index">
                <input
                  class="input"
                  id="newData.meal_type.dinner.type"
                  v-model="newData2.meal_type.dinner.items[index-1]"
                >
              </td>
            </tr>
          </table>
          <br>
          <br>
          <table>
            <br>
            <tr>
              <th>
                <input type="date" v-model="newData3.selectedDate">
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
                <input type="text" v-model="meal_type[0]" readonly>
              </th>
              <td v-for="index in 10" :key="index">
                <input class="input" v-model="newData3.meal_type.breakfast.items[index-1]">
              </td>
            </tr>

            <tr>
              <th>
                <input type="text" v-model="meal_type[1]" readonly>
              </th>
              <td v-for="index in 10" :key="index">
                <input class="input" v-model="newData3.meal_type.lunch.items[index-1]">
              </td>
            </tr>

            <tr>
              <td>
                <span>
                  <input type="text" v-model="meal_type[2]" readonly>
                </span>
              </td>
              <td v-for="index in 10" :key="index">
                <input
                  class="input"
                  id="newData.meal_type.dinner.type"
                  v-model="newData3.meal_type.dinner.items[index-1]"
                >
              </td>
            </tr>
          </table>
          <br>
          <br>
          <table>
            <br>
            <tr>
              <th>
                <input type="date" v-model="newData4.selectedDate">
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
                <input type="text" v-model="meal_type[0]" readonly>
              </th>
              <td v-for="index in 10" :key="index">
                <input class="input" v-model="newData4.meal_type.breakfast.items[index-1]">
              </td>
            </tr>

            <tr>
              <th>
                <input type="text" v-model="meal_type[1]" readonly>
              </th>
              <td v-for="index in 10" :key="index">
                <input class="input" v-model="newData4.meal_type.lunch.items[index-1]">
              </td>
            </tr>

            <tr>
              <td>
                <span>
                  <input type="text" v-model="meal_type[2]" readonly>
                </span>
              </td>
              <td v-for="index in 10" :key="index">
                <input
                  class="input"
                  id="newData.meal_type.dinner.type"
                  v-model="newData4.meal_type.dinner.items[index-1]"
                >
              </td>
            </tr>
          </table>
          <br>
          <br>
          <table>
            <br>
            <tr>
              <th>
                <input type="date" v-model="newData5.selectedDate">
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
                <input type="text" v-model="meal_type[0]" readonly>
              </th>
              <td v-for="index in 10" :key="index">
                <input class="input" v-model="newData5.meal_type.breakfast.items[index-1]">
              </td>
            </tr>

            <tr>
              <th>
                <input type="text" v-model="meal_type[1]" readonly>
              </th>
              <td v-for="index in 10" :key="index">
                <input class="input" v-model="newData5.meal_type.lunch.items[index-1]">
              </td>
            </tr>

            <tr>
              <td>
                <span>
                  <input type="text" v-model="meal_type[2]" readonly>
                </span>
              </td>
              <td v-for="index in 10" :key="index">
                <input
                  class="input"
                  id="newData.meal_type.dinner.type"
                  v-model="newData5.meal_type.dinner.items[index-1]"
                >
              </td>
            </tr>
          </table>
          <br>
          <br>
          <table>
            <br>
            <tr>
              <th>
                <input type="date" v-model="newData6.selectedDate">
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
                <input type="text" v-model="meal_type[0]" readonly>
              </th>
              <td v-for="index in 10" :key="index">
                <input class="input" v-model="newData6.meal_type.breakfast.items[index-1]">
              </td>
            </tr>

            <tr>
              <th>
                <input type="text" v-model="meal_type[1]" readonly>
              </th>
              <td v-for="index in 10" :key="index">
                <input class="input" v-model="newData6.meal_type.lunch.items[index-1]">
              </td>
            </tr>

            <tr>
              <td>
                <span>
                  <input type="text" v-model="meal_type[2]" readonly>
                </span>
              </td>
              <td v-for="index in 10" :key="index">
                <input
                  class="input"
                  id="newData.meal_type.dinner.type"
                  v-model="newData6.meal_type.dinner.items[index-1]"
                >
              </td>
            </tr>
          </table>
          <br>
          <br>
          <table>
            <br>
            <tr>
              <th>
                <input type="date" v-model="newData7.selectedDate">
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
                <input type="text" v-model="meal_type[0]" readonly>
              </th>
              <td v-for="index in 10" :key="index">
                <input class="input" v-model="newData7.meal_type.breakfast.items[index-1]">
              </td>
            </tr>

            <tr>
              <th>
                <input type="text" v-model="meal_type[1]" readonly>
              </th>
              <td v-for="index in 10" :key="index">
                <input class="input" v-model="newData7.meal_type.lunch.items[index-1]">
              </td>
            </tr>

            <tr>
              <td>
                <span>
                  <input type="text" v-model="meal_type[2]" readonly>
                </span>
              </td>
              <td v-for="index in 10" :key="index">
                <input
                  class="input"
                  id="newData.meal_type.dinner.type"
                  v-model="newData7.meal_type.dinner.items[index-1]"
                >
              </td>
            </tr>
          </table>
          <br>
          <br>
        </v-flex>

        <!-- Footer Buttons -->

        <br>
        <v-btn @click="getAllData">Add Data</v-btn>Show All Data:
        <v-btn @click="getAllData">Show Data</v-btn>
        <br>
        <br>
        <br>
      </v-flex>

      <!-- Display Data Table -->

      <!-- <v-flex sm12>
        <table v-for="(menu, i) in data1" :key="i">
          menu:{{menu}}
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
      </v-flex>-->
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
      visible: true,
      moment: moment,
      data: {},
      meow2: [],
      items: { breakfast: [], lunch: [], dinner: [] },
      meal_type: ["breakfast", "lunch", "dinner"],
      data1: {
        meal_type: "",
        item_name: "",
        userCity: "",
        userName: "",
        userHotel: "",
        selectedDate: ""
      },
      newData0: {
        meal_type: {
          breakfast: { type: "breakfast", items: [] },
          lunch: { type: "lunch", items: [] },
          dinner: { type: "dinner", items: [] }
        },
        userCity: "",
        userName: "",
        userHotel: "",
        selectedDate: ""
      },
      newData2: {
        meal_type: {
          breakfast: { type: "breakfast", items: [] },
          lunch: { type: "lunch", items: [] },
          dinner: { type: "dinner", items: [] }
        },
        userCity: "",
        userName: "",
        userHotel: "",
        selectedDate: ""
      },
      newData3: {
        meal_type: {
          breakfast: { type: "breakfast", items: [] },
          lunch: { type: "lunch", items: [] },
          dinner: { type: "dinner", items: [] }
        },
        userCity: "",
        userName: "",
        userHotel: "",
        selectedDate: ""
      },
      newData4: {
        meal_type: {
          breakfast: { type: "breakfast", items: [] },
          lunch: { type: "lunch", items: [] },
          dinner: { type: "dinner", items: [] }
        },
        userCity: "",
        userName: "",
        userHotel: "",
        selectedDate: ""
      },
      newData5: {
        meal_type: {
          breakfast: { type: "breakfast", items: [] },
          lunch: { type: "lunch", items: [] },
          dinner: { type: "dinner", items: [] }
        },
        userCity: "",
        userName: "",
        userHotel: "",
        selectedDate: ""
      },
      newData6: {
        meal_type: {
          breakfast: { type: "breakfast", items: [] },
          lunch: { type: "lunch", items: [] },
          dinner: { type: "dinner", items: [] }
        },
        userCity: "",
        userName: "",
        userHotel: "",
        selectedDate: ""
      },
      newData7: {
        meal_type: {
          breakfast: { type: "breakfast", items: [] },
          lunch: { type: "lunch", items: [] },
          dinner: { type: "dinner", items: [] }
        },
        userCity: "",
        userName: "",
        userHotel: "",
        selectedDate: ""
      },
      newData: {
        meal_type: {
          breakfast: { type: "breakfast", items: [] },
          lunch: { type: "lunch", items: [] },
          dinner: { type: "dinner", items: [] }
        },
        userCity: "",
        userName: "",
        userHotel: "",
        selectedDate: ""
      },
      newData1: {
        meal_type: "",
        item_name: "",
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
    async modifyData(DataType) {
      console.log("Datatyle", DataType);
      let index = 0;
      for (index; index < DataType.meal_type.breakfast.items.length; index++) {
        this.newData1.meal_type = DataType.meal_type.breakfast.type;
        this.newData1.item_name = DataType.meal_type.breakfast.items[index];
        this.newData1.userCity = this.newData.userCity;
        this.newData1.userName = this.newData.userName;
        this.newData1.userHotel = this.newData.userHotel;
        this.newData1.selectedDate = DataType.selectedDate;
        // console.log("hey1", DataType.meal_type);
        // console.log("hey2", DataType.item_name);
        await axios.post(`http://localhost:3000/meals2/insert`, this.newData1);
      }
      index = 0;
      for (index; index < DataType.meal_type.lunch.items.length; index++) {
        this.newData1.meal_type = DataType.meal_type.lunch.type;
        this.newData1.item_name = DataType.meal_type.lunch.items[index];
        this.newData1.userCity = this.newData.userCity;
        this.newData1.userName = this.newData.userName;
        this.newData1.userHotel = this.newData.userHotel;
        this.newData1.selectedDate = DataType.selectedDate;
        // console.log("hey1", DataType.meal_type);
        // console.log("hey2", DataType.item_name);
        await axios.post(`http://localhost:3000/meals2/insert`, this.newData1);
      }
      index = 0;
      for (index; index < DataType.meal_type.dinner.items.length; index++) {
        this.newData1.meal_type = DataType.meal_type.dinner.type;
        this.newData1.item_name = DataType.meal_type.dinner.items[index];
        this.newData1.userCity = this.newData.userCity;
        this.newData1.userName = this.newData.userName;
        this.newData1.userHotel = this.newData.userHotel;
        this.newData1.selectedDate = DataType.selectedDate;
        // console.log("hey1", DataType.meal_type);
        // console.log("hey2", DataType.item_name);
        await axios.post(`http://localhost:3000/meals2/insert`, this.newData1);
      }
    },
    async addNewTableElementBreakfast() {
      // console.log(this.newData.breakfast.length);
      // var max = this.newData.lunch.length;
      console.log(this.newData.meal_type.breakfast.items.length);

      if (this.visible) {
        this.modifyData(this.newData);
      }
      if (!this.visible) {
        await this.modifyData(this.newData0);
        console.log("newData", this.newData1);
        await this.modifyData(this.newData2);
        console.log("newData", this.newData1);
        await this.modifyData(this.newData3);
        console.log("newData", this.newData1);
        await this.modifyData(this.newData4);
        console.log("newData", this.newData1);
        await this.modifyData(this.newData5);
        console.log("newData", this.newData1);
        await this.modifyData(this.newData6);
        console.log("newData", this.newData1);
        await this.modifyData(this.newData7);
        console.log("newData", this.newData1);
      }

      // console.log(this.newData.lunch.length);
      // console.log(this.newData.dinner.length);
      // if (
      //   this.newData.breakfast.length >= this.newData.lunch.length &&
      //   this.newData.breakfast.length > this.newData.dinner.length
      // ) {
      //   max = this.newData.breakfast.length;
      // }
      // if (
      //   this.newData.breakfast.length >= this.newData.lunch.length &&
      //   this.newData.breakfast.length <= this.newData.dinner.length
      // ) {
      //   max = this.newData.dinner.length;
      // }
      // if (
      //   this.newData.breakfast.length <= this.newData.lunch.length &&
      //   this.newData.dinner.length >= this.newData.lunch.length
      // ) {
      //   max = this.newData.dinner.length;
      // }
      // console.log(max);
      // let index = 0;
      // for (index = 0; index < max; index++) {
      //   // console.log(this.newData1);
      //   console.log(this.newData.breakfast[index]);
      //   this.newData1 = {
      //     breakfast: "None",
      //     lunch: "None",
      //     dinner: "None",
      //     userCity: "",
      //     userName: "",
      //     userHotel: "",
      //     selectedDate: ""
      //   };
      //   if (index + 1 <= this.newData.breakfast.length) {
      //     this.newData1.breakfast = this.newData.breakfast[index];
      //   }
      //   if (index + 1 <= this.newData.lunch.length) {
      //     this.newData1.lunch = this.newData.lunch[index];
      //   }
      //   if (index + 1 <= this.newData.dinner.length) {
      //     this.newData1.dinner = this.newData.dinner[index];
      //   }
      //   // this.newData1.lunch = this.newData.lunch[index];
      //   // this.newData1.dinner = this.newData.dinner[index];
      //   this.newData1.userCity = this.newData.userCity;
      //   this.newData1.userHotel = this.newData.userHotel;
      //   this.newData1.userName = this.newData.userName;
      //   this.newData1.selectedDate = this.newData.selectedDate;
      console.log("sent Data", this.newData);

      // }
      // await this.getAllData();
    },
    async updateData() {
      var iter4 = 0;
      for (iter4; iter4 < this.meow2.length; iter4++) {
        console.log(this.meow2.length);
        if (this.newData.selectedDate === this.meow2[iter4].date) {
          console.log("Hey there");
          await axios.delete(`http://localhost:3000/meals2/delete`, {
            data: { id: this.newData.selectedDate }
          });
        }
      }
      await this.addNewTableElementBreakfast();
    },
    async getAllData() {
      console.log(this.data1);
      // const tableSchema = await axios.get(
      //   `http://localhost:3000/breakfast/schema`
      // );
      const tableData = await axios.get(`http://localhost:3000/meals2`);
      const tableData3 = await axios.get(
        "http://localhost:3000/meals2/getdistinct"
      );
      this.meow2 = tableData3.data;
      var tableData1=0;
      var iter5=0;
      // for (iter5; iter5<this.meow2.length;iter5++)
      // {
        console.log('meowew' , this.meow2[iter5].date);
      tableData1 = await axios.get(
        "http://localhost:3000/meals2/somedata"
        // {
        //   data: { id1: this.meow2[iter5].date }
        // }
      );
      // }
      console.log('tableData',tableData1)
      
      // var meow;
      var meow = tableData1.data;
      
      // console.log()
      console.log("New Data", meow);
      console.log("New Datasssss", this.meow2);
      var iter1 = 0;
      for (iter1; iter1 < this.meow2.length; iter1++) {
        var iter2 = 0;
        for (iter2; iter2 < meow.length; iter2++) {
          if (meow[iter2].date === this.meow2[iter1].date) {
            // console.log(meow[iter2].date);
            // console.log(this.meow2[iter1].date);
            if (meow[iter2].meal_type === "breakfast") {
              this.items.breakfast.push(meow[iter2].item_name);
              // console.log('pushed',this.items.breakfast);
            }
            if (meow[iter2].meal_type === "lunch") {
              this.items.lunch.push(meow[iter2].item_name);
            }
            if (meow[iter2].meal_type === "dinner") {
              this.items.dinner.push(meow[iter2].item_name);
            }
          }
        }
      }
      console.log("itemsss", this.items);

      // let arr2 = [];
      // arr2 = await axios.get('http://localhost:3000/meals2/somedatameal');
      // console.log('Newest', arr2);

      // this.tableSchema = tableSchema.data;

      // console.log(tableData);
      this.data1 = tableData.data;
      console.log("data1", this.data1);
      // console.log(this.data1.length);

      // console.log(this.items);
      // let arr1 = ["hi"];
      // let index1 = 0;
      // for (index1; index1 < this.data1.length; index1++) {
      //   var i;
      //   var bool=true;

      //   for (i = 0; i < arr1.length; i++) {
      //     if (arr1[i] === this.data1[index1].date) {
      //       console.log(i);
      //       bool=false;
      //     }
      //   }
      //   console.log(bool);
      //   console.log('upper',arr1);
      //   if(bool){
      //   if (this.data1[index1].meal_type == "breakfast") {
      //     console.log("hi");
      //     this.items.date.breakfast[index1] += this.data1[index1].item_name;
      //   }
      //   if (this.data1[index1].meal_type == "lunch") {
      //     this.items.date.lunch[index1] += this.data1[index1].item_name;
      //   }
      //   if (this.data1[index1].meal_type == "dinner") {
      //     this.items.date.dinner[index1] += this.data1[index1].item_name;
      //   }}
      //   arr1.push(this.data1[index1].date);
      // }
      // console.log("Modified Data", this.items);
      // console.log(arr1)
      await this.updateData();
    },
    async printTable() {
      let index = 0;
      let index1 = 0;
      let arr = [];
      // console.log(this.data1);
      for (index = 0; index < this.data1.length; index++) {
        // this.data1.slice().sort();console.log(this.data1);
        for (index1 = index + 1; index1 < this.data1.length; index1++) {
          // console.log(index);
          // console.log(index1);

          // console.log(this.data1[index].date);
          // console.log(this.data1[index1].date);
          if (this.data1[index].date === this.data1[index1].date) {
            // console.log(this.data1[index1].breakfast);
            // console.log(this.data1[index].breakfast);
            // let meow = this.data1[index+1].breakfast.toString() + "," ;
            this.data1[index].breakfast =
              this.data1[index].breakfast.toString() +
              "," +
              this.data1[index1].breakfast.toString();
            this.data1[index].lunch =
              this.data1[index].lunch.toString() +
              "," +
              this.data1[index1].lunch.toString();
            this.data1[index].dinner =
              this.data1[index].dinner.toString() +
              "," +
              this.data1[index1].dinner.toString();
            arr.push(index);
            // let meow3 = meow + meow2;
            // console.log("hi",this.data1[index].breakfast );
          }
        }
        console.log("array", arr);
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