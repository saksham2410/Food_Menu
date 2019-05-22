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
        <v-btn v-on:click="visible = true">Add Day</v-btn>Add for this week :
        <v-btn v-on:click="visible = false">Add Week</v-btn>
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
        <v-btn @click="getAllData">Add Data</v-btn>
        <br>
        <br>Get Data for :
        <input type="date" v-model="fetchDate">
        <v-btn @click="displayData">Show Data</v-btn>
        <br>
        <br>
        <br>
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
      fetchDate: "",
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
    },
    async addNewTableElementBreakfast() {
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
      console.log("sent Data", this.newData);
    },
    async updateData() {
      var iter4 = 0;
      for (iter4; iter4 < this.meow2.length; iter4++) {
        console.log(this.meow2.length);
        if (this.newData.selectedDate === this.meow2[iter4].date) {
          console.log("Hey there");
          await axios.delete(`http://localhost:3000/Kitchen_menu/delete`, {
            data: { id: this.newData.selectedDate }
          });
        }
      }
      await this.addNewTableElementBreakfast();
    },
    async displayData() {
      
      console.log(this.newData.meal_type.breakfast.items);
        // (this.newData.userCity = ""),
        // (this.newData.userHotel = ""),
        // (this.newData.userName = ""),
        axios.post("http://localhost:3000/date", {
          todo: this.fetchDate
        });

      const tableData1 = await axios.get(
        "http://localhost:3000/Kitchen_menu/databreakfast"
      );
      // }
      var meow = tableData1.data;
      console.log("Main Meow", meow);

      // this.newData.userCity=meow[0].usercity;
      // this.newData.userName=meow[0].username;
      // this.newData.userHotel=meow[0].userhotel;
      this.newData.meal_type.breakfast.items = [];
      for (var iter8 = 0; iter8 < meow.length; iter8++) {
        this.newData.selectedDate = meow[iter8].date;
        this.newData.meal_type.breakfast.items.push(meow[iter8].item_name);
      }

      const tableData8 = await axios.get(
        "http://localhost:3000/Kitchen_menu/datalunch"
      );
      console.log("DataLunch", tableData8);
      var meow8 = tableData8.data;
      this.newData.meal_type.lunch.items = []
      for (var iter8 = 0; iter8 < meow8.length; iter8++) {
        this.newData.meal_type.lunch.items.push(meow8[iter8].item_name);
      }
      const tableData9 = await axios.get(
        "http://localhost:3000/Kitchen_menu/datadinner"
      );
      // }
      var meow9 = tableData9.data;
      this.newData.meal_type.dinner.items = []
      for (var iter8 = 0; iter8 < meow9.length; iter8++) {
        this.newData.meal_type.dinner.items.push(meow9[iter8].item_name);
      }
    },
    async getAllData() {
      const tableData = await axios.get(`http://localhost:3000/Kitchen_menu`);
      const tableData3 = await axios.get(
        "http://localhost:3000/Kitchen_menu/getdistinct"
      );
      this.meow2 = tableData3.data;

      this.data1 = tableData.data;
      console.log("data1", this.data1);

      await this.updateData();
    }
  },
  created() {
    var currentTime = moment().format("DD MM YYYY");
    console.log("Current Date is ", currentTime);
    const x = localStorage.getItem("data-123");
    if (x) this.data = JSON.parse(x);
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