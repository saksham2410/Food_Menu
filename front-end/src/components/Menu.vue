<template>
  <v-app id="inspire" dark>

    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="console.log('Clicked')">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="console.log('Clicked')">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>ZoloStays Menu Update Form</v-toolbar-title>
    </v-toolbar>
    <v-content>
      
      <v-container fluid fill-height>
        
        <v-layout justify-center align-center>
          
          <v-flex shrink>
            <table>
              Current Date is :
              {{formattedDate}}
              <!-- {{this.day}} -->
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
                  <v-overflow-btn
          :items="cityNew"
          label="Zolo City"
          v-model="newData.userCity"
          class="test"
        ></v-overflow-btn>
                </th>
                <th>
                  <v-overflow-btn
          :items="kitchenName"
          label="Zolo Kitchen"
          v-model="newData.userHotel" dark
        ></v-overflow-btn>
                </th>
                <!-- <th>
                  <select @click="getKitchenData" v-model="newData.userCity">
                    <option value selected>Select Your City</option>
                    <option v-for="index in kitchenNewlength" :key="index">{{kitchenNew[index].CITY}}</option>
                  </select>
                </th> -->
                <!-- <th> -->
                  <!-- <select v-model="newData.userHotel">
                    <option value selected>Select Your Kitchen</option>
                    <option value="Zolo1">Zolo1</option>
                    <option value="Zolo2">Zolo2</option>
                    <option value="Zolo3">Zolo3</option>
                    <option value="Zolo4">Zolo4</option>
                  </select> -->
                  <!-- <input
                type="text"
                value="userhotel"
                placeholder="User Hotel"
                v-model="newData.userHotel"
                  >-->
                <!-- </th> -->
              </tr>
            </table>Add for this week :
            <input type="date" :min="todaydate" class="inputdate" v-model="newData.selectedDate">
            <v-btn v-on:click="visible = !visible" @click="setNewDate">Add for this Week</v-btn>
            <!-- <v-btn @click="getKitchenData">Get Kitchen Data</v-btn> -->
            <br>
            <br>Add for a day :
            <input type="date" :min="todaydate" class="inputdate" v-model="newData.selectedDate">
            <v-btn v-on:click="visible = true">Add Day</v-btn>
            <br>
            <table v-if="visible" class="elevation-4">
              <!-- <template v-slot:items="props"> -->
              <tr justify-center>
                <th>Date : {{this.newData.selectedDate}}</th>
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
                <th>
                  <input type="text" v-model="meal_type[2]" readonly>
                </th>
                <td v-for="index in 10" :key="index">
                  <input class="input" v-model="newData.meal_type.dinner.items[index-1]">
                </td>
              </tr>
              <!-- </template> -->
            </table>
            <v-flex v-if="!visible">
          <table>
            <br>
            <tr>
              <th>{{this.newData0.selectedDate}}</th>
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
              <th>
                <input type="text" v-model="meal_type[2]" readonly>
              </th>
              <td v-for="index in 10" :key="index">
                <input class="input" v-model="newData0.meal_type.dinner.items[index-1]">
              </td>
            </tr>
          </table>
          <br>
          <br>
          <table>
            <br>
            <tr>
              <th>{{this.newData2.selectedDate}}</th>
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
              <th>
                <input type="text" v-model="meal_type[2]" readonly>
              </th>
              <td v-for="index in 10" :key="index">
                <input class="input" v-model="newData2.meal_type.dinner.items[index-1]">
              </td>
            </tr>
          </table>
          <br>
          <br>
          <table>
            <br>
            <tr>
              <th>{{this.newData3.selectedDate}}</th>
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
              <th>
                <input type="text" v-model="meal_type[2]" readonly>
              </th>
              <td v-for="index in 10" :key="index">
                <input class="input" v-model="newData3.meal_type.dinner.items[index-1]">
              </td>
            </tr>
          </table>
          <br>
          <br>
          <table>
            <br>
            <tr>
              <th>{{this.newData4.selectedDate}}</th>
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
              <th>
                <input type="text" v-model="meal_type[2]" readonly>
              </th>
              <td v-for="index in 10" :key="index">
                <input class="input" v-model="newData4.meal_type.dinner.items[index-1]">
              </td>
            </tr>
          </table>
          <br>
          <br>
          <table>
            <br>
            <tr>
              <th>{{this.newData5.selectedDate}}</th>
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
              <th>
                <input type="text" v-model="meal_type[2]" readonly>
              </th>
              <td v-for="index in 10" :key="index">
                <input class="input" v-model="newData5.meal_type.dinner.items[index-1]">
              </td>
            </tr>
          </table>
          <br>
          <br>
          <table>
            <br>
            <tr>
              <th>{{this.newData6.selectedDate}}</th>
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
              <th>
                <input type="text" v-model="meal_type[2]" readonly>
              </th>
              <td v-for="index in 10" :key="index">
                <input class="input" v-model="newData6.meal_type.dinner.items[index-1]">
              </td>
            </tr>
          </table>
          <br>
          <br>
          <table>
            <br>
            <tr>
              <th>{{this.newData7.selectedDate}}</th>
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
              <th>
                <input type="text" v-model="meal_type[2]" readonly>
              </th>
              <td v-for="index in 10" :key="index">
                <input class="input" v-model="newData7.meal_type.dinner.items[index-1]">
              </td>
            </tr>
          </table>
          <br>
          <br>
        </v-flex>
        <br>
        <v-btn @click="setNewDate();getAllData();">Add Data</v-btn>
        {{successtext}}
        <v-btn @click="updateState" v-if="this.successtext==='Added'">OK</v-btn>
        <br>
        <br>Get Data for :
        <input type="date" class="inputdate" v-model="fetchDate">
        <v-btn v-on:click="visible = true" @click="setNewDate();setDate(displayData);">Show Data</v-btn>
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
  data() {
    return {
      // dropdown_font: [],
      kitchenNew: [],
      todaydate: '',
      kitchenName: [],
      cityNew: [],
      day: "",
      successtext: "",
      fetchDate: "",
      visible: true,
      moment: moment,
      data: {},
      meow2: [],
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
      drawer: null,
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
  props: {
    source: String
  },

  methods: {
    async modifyData(DataType) {
      // console.log("Datatyle", DataType);
      let index = 0;
      for (index; index < DataType.meal_type.breakfast.items.length; index++) {
        this.newData1.meal_type = DataType.meal_type.breakfast.type;
        this.newData1.item_name = DataType.meal_type.breakfast.items[index];
        this.newData1.userCity = this.newData.userCity;
        this.newData1.userName = this.newData.userName;
        this.newData1.userHotel = this.newData.userHotel;
        this.newData1.selectedDate = DataType.selectedDate;
        await axios.post(
          `http://localhost:3000/Kitchen_menu/insert`,
          this.newData1
        );
      }
      index = 0;
      for (index; index < DataType.meal_type.lunch.items.length; index++) {
        this.newData1.meal_type = DataType.meal_type.lunch.type;
        this.newData1.item_name = DataType.meal_type.lunch.items[index];
        this.newData1.userCity = this.newData.userCity;
        this.newData1.userName = this.newData.userName;
        this.newData1.userHotel = this.newData.userHotel;
        this.newData1.selectedDate = DataType.selectedDate;
        await axios.post(
          `http://localhost:3000/Kitchen_menu/insert`,
          this.newData1
        );
      }
      index = 0;
      for (index; index < DataType.meal_type.dinner.items.length; index++) {
        this.newData1.meal_type = DataType.meal_type.dinner.type;
        this.newData1.item_name = DataType.meal_type.dinner.items[index];
        this.newData1.userCity = this.newData.userCity;
        this.newData1.userName = this.newData.userName;
        this.newData1.userHotel = this.newData.userHotel;
        this.newData1.selectedDate = DataType.selectedDate;
        await axios.post(
          `http://localhost:3000/Kitchen_menu/insert`,
          this.newData1
        );
      }
      // console.log('Final Data Sent',this.newData1)
    },
    updateState() {
      this.successtext = "";
    },
    async addNewTableElementBreakfast() {
      // console.log(this.newData.meal_type.breakfast.items.length);
      if (this.visible) {
        this.modifyData(this.newData);
      }
      if (!this.visible) {
        await this.modifyData(this.newData0);
        // console.log("newData", this.newData1);
        await this.modifyData(this.newData2);
        // console.log("newData", this.newData1);
        await this.modifyData(this.newData3);
        // console.log("newData", this.newData1);
        await this.modifyData(this.newData4);
        // console.log("newData", this.newData1);
        await this.modifyData(this.newData5);
        // console.log("newData", this.newData1);
        await this.modifyData(this.newData6);
        // console.log("newData", this.newData1);
        await this.modifyData(this.newData7);
        // console.log("newData", this.newData1);
      }
      // console.log("sent Data", this.newData);
      this.successtext = "Added";
      // this.newData=[];
    },
    async updateData() {
      // console.log("Reached Here", this.meow2.length);
      var iter4 = 0;
      for (iter4; iter4 < this.meow2.length; iter4++) {
        // console.log(this.meow2.length);
        // console.log("Hey there", this.newData.selectedDate);
        // console.log("heyheyehye", this.meow2[iter4].daily_date);
        if (this.newData.selectedDate === this.meow2[iter4].daily_date) {
          // console.log("Hey there", this.newData.selectedDate);
          await axios.delete(`http://localhost:3000/Kitchen_menu/delete`, {
            data: { id: this.newData.selectedDate }
          });
        }
      }
      await this.addNewTableElementBreakfast();
    },
    setDate(callback) {
      // console.log(this.fetchDate);
      axios.post("http://localhost:3000/date", {
        todo: this.fetchDate, todo1: this.newData.userHotel
      });

      // const value = await promise;
      // console.log(sohail);

      callback(console.log("Meowowwoowowow"));
      // this.displayData();
    },
    async displayData() {
      this.newData = {
        meal_type: {
          breakfast: { type: "breakfast", items: ['NA'] },
          lunch: { type: "lunch", items: ['NA'] },
          dinner: { type: "dinner", items: ['NA'] }
        },
        userCity: "",
        userName: "",
        userHotel: "",
        selectedDate: ""
      };
      this.newData.selectedDate = this.fetchDate;
      // console.log(this.newData.meal_type.breakfast.items);
      // this.newData = [];
      // (this.newData.userCity = ""),
      // (this.newData.userHotel = ""),
      // (this.newData.userName = ""),

      // const promise = await

      // const value = await promise;
      const tableDatax = await axios.get(
        "http://localhost:3000/Kitchen_menu/databreakfast"
      );
      // }
      // console.log("Main Meow", meowx);
      const tableData8x = await axios.get(
        "http://localhost:3000/Kitchen_menu/datalunch"
      );
      // console.log("DataLunch", tableData8x);

      const tableData9x = await axios.get(
        "http://localhost:3000/Kitchen_menu/datadinner"
      );
      // }

      const tableData1 = await axios.get(
        "http://localhost:3000/Kitchen_menu/databreakfast"
      );

      // }
      var meow = tableData1.data;
      // console.log("Main Meow", meow);

      // this.newData.userCity=meow[0].usercity;
      // this.newData.userName=meow[0].username;
      // this.newData.userHotel=meow[0].userhotel;
      // this.newData.meal_type.breakfast.items = [];
      for (var iter8x = 0; iter8x < meow.length; iter8x++) {
        this.newData.meal_type.breakfast.items.push(meow[iter8x].item_name);
      }

      const tableData8 = await axios.get(
        "http://localhost:3000/Kitchen_menu/datalunch"
      );
      // console.log("DataLunch", tableData8);
      var meow8 = tableData8.data;
      // this.newData.meal_type.lunch.items = []
      for (var iter8xx = 0; iter8xx < meow8.length; iter8xx++) {
        this.newData.meal_type.lunch.items.push(meow8[iter8xx].item_name);
      }
      const tableData9 = await axios.get(
        "http://localhost:3000/Kitchen_menu/datadinner"
      );
      // }
      var meow9 = tableData9.data;
      // this.newData.meal_type.dinner.items = []
      for (var iter8y = 0; iter8y < meow9.length; iter8y++) {
        this.newData.meal_type.dinner.items.push(meow9[iter8y].item_name);
      }
    },
    setNewDate() {
      var time = this.newData.selectedDate;
      var time1 = this.fetchDate;
      console.log("first reached here", time);
      // var time2 = moment(time, "DD-MM-YYYY").format(
      //   "dddd" + " " + "DD/MM/YYYY"
      // );
      // console.log("reached here", time2);
      // this.newData.selectedDate = time2;

      this.fetchDate = moment(time1, "YYYY-MM-DD").format(
        "dddd" + " " + "DD/MM/YYYY"
      ); // I would get this from the database
      if (this.visible === true) {
        // console.log("reached here", time);
        this.newData.selectedDate = moment(time, "YYYY-MM-DD").format(
          "dddd" + " " + "DD/MM/YYYY"
        );
        console.log("reached again here", this.newData.selectedDate);

      }
      if (this.visible === false) {
        // console.log(time);
        this.newData0.selectedDate = moment(time, "YYYY-MM-DD").format(
          "dddd" + " " + "DD/MM/YYYY"
        );
        // this.newData0.selectedDate = time;
        // console.log(this.newData0.selectedDate);
        // console.log(this.day);
        this.newData2.selectedDate = moment(time, "YYYY-MM-DD")
          .add(1, "day")
          .format("dddd" + " " + "DD/MM/YYYY");
        // console.log(this.newData0.selectedDate);
        // console.log(this.newData2.selectedDate);
        this.newData3.selectedDate = moment(time, "YYYY-MM-DD")
          .add(2, "day")
          .format("dddd" + " " + "DD/MM/YYYY");
        this.newData4.selectedDate = moment(time, "YYYY-MM-DD")
          .add(3, "day")
          .format("dddd" + " " + "DD/MM/YYYY");
        this.newData5.selectedDate = moment(time, "YYYY-MM-DD")
          .add(4, "day")
          .format("dddd" + " " + "DD/MM/YYYY");
        this.newData6.selectedDate = moment(time, "YYYY-MM-DD")
          .add(5, "day")
          .format("dddd" + " " + "DD/MM/YYYY");
        this.newData7.selectedDate = moment(time, "YYYY-MM-DD")
          .add(6, "day")
          .format("dddd" + " " + "DD/MM/YYYY");
      }

      // time = time.split("-");
      // day.set({
      //   year: time[0],
      //   month: time[1],
      //   day: time[2]
      // });
    },
     async getKitchenData() {

       this.todaydate = moment().format("YYYY-MM-DD");
       console.log(this.todaydate);
        const kitchenData = await axios.get(
        "http://localhost:3000/Zolo_city/userdata"
      );
      // var kitchencity = [];
      this.kitchenNew = kitchenData;
      // this.kitchenNewlength = this.kitchenNew.data.length;
      for( var iter9=0;iter9<this.kitchenNew.data.length;iter9++)
      {
        this.kitchenName.push(this.kitchenNew.data[iter9].LOCALNAME);
      }

      const CityData = await axios.get(
        "http://localhost:3000/Zolo_city/userdatacity"
      );

      // this.cityNew = CityData.data;
      for( var iter9=0;iter9<CityData.data.length;iter9++)
      {
        this.cityNew.push(CityData.data[iter9].CITY);
      }
      console.log('test',this.cityNew);
      console.log(this.cityNew.length);
      console.log(this.kitchenName);
    },
    
    async getAllData() {
      const tableData = await axios.get(`http://localhost:3000/Kitchen_menu`);
      const tableData3 = await axios.get(
        "http://localhost:3000/Kitchen_menu/getdistinct"
      );
      this.meow2 = tableData3.data;
      // console.log("Distinct Dates", this.meow2);

      this.data1 = tableData.data;
      // console.log("data1", this.data1);

      await this.updateData();
    }
  },
  created() {

    
    
  },
  mounted() {

    this.getKitchenData();
  },
  computed: {

    formattedDate() {
      return moment().format("YYYY-MM-DD");
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
.input-group__input *{
  color:white
}
.v-overflow-btn {
  color: white;
}  
.inputdate{
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
  color: rgb(3, 3, 3);
  font-weight: bold;
}

td,
th {
  padding: 5px;
  border: 1px solid rgb(77, 78, 95);
  text-align: left;
  font-size: 18px;
}

@media only screen and (max-width: 760px),
  (min-device-width: 300px) and (max-device-width: 1024px) {

    body{
      background-color: black;
    }

    table {
      overflow: scroll;
    }

  }

/* 
Max width before this PARTICULAR table gets nasty
This query will take effect for any screen smaller than 760px
and also iPads specifically.
*/
</style>
