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
                v-model="userName"
              >
            </th>
            <th>
              <input
                type="text"
                value="usercity"
                placeholder="User City"
                v-model="userCity"
              >
            </th>
            <th>
              <input
                type="text"
                value="userhotel"
                placeholder="User Hotel"
                v-model="userHotel"
              >
            </th>
          </tr>
        </table>
        <br>
        <br>
        <table>
          <tr>
            <th>
              <input type="date" v-model="selectedDate">
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
        <v-btn @click="addNewTableElementBreakfast">Add Data</v-btn>
        <br>
        <br>
        <br>
      </v-flex>

      <v-flex sm12>
        <table v-for="(menu, date, i) in data" :key="i">
          <tr>
            <th>
              <input type="text" :value="date" readonly>
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
      data: {
        // "10-05-2019": {
        //   breakfast: [
        //     "item1",
        //     "item2",
        //     "item3",
        //     "item4",
        //     "item5",
        //     "item6",
        //     "item7"
        //   ],
        //   lunch: [
        //     "item1",
        //     "item2",
        //     "item3",
        //     "item4",
        //     "item5",
        //     "item6",
        //     "item7"
        //   ],
        //   dinner: [
        //     "item1",
        //     "item2",
        //     "item3",
        //     "item4",
        //     "item5",
        //     "item6",
        //     "item7"
        //   ]
        // },
        // "11-05-2019": {
        //   breakfast: [
        //     "item1",
        //     "item2",
        //     "item3",
        //     "item4",
        //     "item5",
        //     "item6",
        //     "item7"
        //   ],
        //   lunch: [
        //     "item1",
        //     "item2",
        //     "item3",
        //     "item4",
        //     "item5",
        //     "item6",
        //     "item7"
        //   ],
        //   dinner: [
        //     "item1",
        //     "item2",
        //     "item3",
        //     "item4",
        //     "item5",
        //     "item6",
        //     "item7"
        //   ]
        // }
      },
      tableName: "meals",
      userCity: "",
      userName: '',
      userHotel: '',
      selectedDate: "",
      // finalEntry : "",
      newData: {
        breakfast: [],
        lunch: [],
        dinner: []
      },
      
    };
  },
  methods: {
    // createPri() {
    //   this.user
    // },
    addNewData() {
      this.data["" + this.selectedDate] = this.newData;
      // this.newData = { breakfast: [], lunch: [], dinner: [],  };
    },
    saveAllData() {
      localStorage.setItem("data-123", JSON.stringify(this.data));
    },
    addNewTableElementBreakfast() {
      console.log(this.newData);
      const finalEntry = this.userCity + this.userName + this.userHotel + this.selectedDate,
      this.newData['PriKey'] = finalEntry,
      axios.post(
        `http://localhost:3000/meals/insert`,
        
        this.newData
      );
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
