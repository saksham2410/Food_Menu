<template>
  <v-container>
    <v-layout wrap row>
      <v-flex>
        <table>
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
              <input
                type="text"
                value="usercity"
                placeholder="User City"
                v-model="newData.userCity"
              >
            </th>
            <th>
              <input
                type="text"
                value="userhotel"
                placeholder="User Hotel"
                v-model="newData.userHotel"
              >
            </th>
          </tr>
        </table>
        <br>
        <br>
        <table>
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
        <v-btn @click="addNewTableElementBreakfast()">Add Data</v-btn>
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
export default {
  data() {
    return {
      data1: {
        
        date:{breakfast: ['bs','s'],
        lunch: [],
        dinner: [],
        userCity: '',
        userName: '',
        userHotel: '',
        date: ''}
        
        },
      // tableName: "meals",
      // userCity: "",
      // userName: '',
      // userHotel: '',
      // selectedDate: "",
      // finalEntry : "",
      newData: {
        breakfast: [],
        lunch: [],
        dinner: [],
        userCity: '',
        userName: '',
        userHotel: '',
        selectedDate: ''
      },
      
    };
  },
  methods: {
    // createPri() {
    //   this.user
    // },
    addNewData() {
      this.data["" + this.newData.selectedDate] = this.newData;
      // this.newData = { breakfast: [], lunch: [], dinner: [],  };
    },
    saveAllData() {
      localStorage.setItem("data-123", JSON.stringify(this.data));
    },
    async addNewTableElementBreakfast() {
      console.log(this.newData);
      // const finalEntry = this.userCity + this.userName + this.userHotel + this.selectedDate,
      // this.newData['username'] = this.user,
      await axios.post(
        `http://localhost:3000/meals/insert`,
        
        this.newData
      );

      await this.getAllData();
    },
    async getAllData() {
      // const tableSchema = await axios.get(
      //   `http://localhost:3000/breakfast/schema`
      // );
      const tableData = await axios.get(
        `http://localhost:3000/meals`
      );
      // this.tableSchema = tableSchema.data;
      this.data1 = tableData.data;

      await this.printTable();
      
    },
    async printTable() {
      let index = 0;
      for(index =0;index<this.data1.length;index++){
       
        this.data1[index].breakfast = this.data1[index].breakfast.split(',') 
        this.data1[index].lunch = this.data1[index].lunch.split(',') 
        this.data1[index].dinner = this.data1[index].dinner.split(',') 
      }
      // for(index )
      // console.log('breakfast', this.data1[index].breakfast, typeof(this.data1[0]));
      // this.data1.breakfast=tableData.data.breakfast.split(',');


      console.log(this.data1);

    }
  },
  created() {
    const x = localStorage.getItem("data-123");
    if (x) this.data = JSON.parse(x);
  }
};
</script>

<style scoped>
.input {
  max-width: 70px;
}
</style>
