<template>
  <v-container class="mt-5">
        <v-layout wrap row>
      <v-flex>
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
        <v-btn @click="addNewData">Add Data</v-btn>
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
    <v-flex>
        <v-btn @click="addNewData">Add Data</v-btn>
        <br>
        <br>
        <br>
    <input type="date" v-model="myDate">
    <br>This is:
    <span>{{myDate}}</span>
<v-flex></v-flex>
    <form class="form" @submit.prevent="addNewTableElementBreakfast">
      Breakfast-Menu :
      <div class="row">
        <template v-for="column in tableSchema">
          <div :class="columnWidthClass" v-if="column.Field !== 'id'" :key="column.Field">
            <div class="form-group">
              <!-- <label for>{{column.Field}}</label> -->
              <input
                type="text"
                :placeholder="column.Field"
                class="form-control"
                v-model="newRowData[column.Field]"
              >
            </div>
          </div>
        </template>
        <div :class="columnWidthClass">
          <!-- <div class="form-group">
            <label for></label>
            <input type="submit" class="btn btn-block btn-success">
          </div>-->
        </div>
      </div>
    </form>
    <form class="form" @submit.prevent="addNewTableElementLunch">
      Lunch-Menu :
      <div class="row">
        <template v-for="column in tableSchema">
          <div :class="columnWidthClass" v-if="column.Field !== 'id'" :key="column.Field">
            <div class="form-group">
              <!-- <label for>{{column.Field}}</label> -->
              <input
                type="text"
                :placeholder="column.Field"
                class="form-control"
                v-model="newRowData[column.Field]"
              >
            </div>
          </div>
        </template>
        <div :class="columnWidthClass">
          <!-- <div class="form-group">
            <label for></label>
            <input type="submit" class="btn btn-block btn-success">
          </div>-->
        </div>
      </div>
    </form>
    <form
      class="form"
      @submit.prevent="addNewTableElementBreakfast();addNewTableElementDinner();addNewTableElementLunch();printData();"
    >
      Dinner-Menu :
      <div class="row">
        <template v-for="column in tableSchema">
          <div :class="columnWidthClass" v-if="column.Field !== 'id'" :key="column.Field">
            <div class="form-group">
              <!-- <label for>{{column.Field}}</label> -->
              <input
                type="text"
                :placeholder="column.Field"
                class="form-control"
                v-model="newRowData[column.Field]"
              >
            </div>
          </div>
        </template>
        <div :class="columnWidthClass">
          <div class="form-group">
            <label for></label>
            <input type="submit" class="btn btn-block btn-success">
          </div>
        </div>
      </div>
    </form>
    <table class="hazem-table table table-hover table-striped">
      <thead>
        <tr>
          <th v-for="column in tableSchema" :key="column.Field">
            <div class="form-group">
              <label for>{{column.Field}}</label>
              <input
                type="text"
                class="form-control"
                :placeholder="`filter (${column.Field})`"
                v-model="filterRowData[column.Field]"
                @keyup="rerender"
              >
            </div>
          </th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(row, index) in tableData">
          <tr v-if="canShowRow(row)" :key="row.id">
            <td v-for="column in tableSchema" :key="column.Field">{{row[column.Field]}}</td>

            <td>
              <b-button-group size="sm">
                <b-btn
                  variant="primary"
                  v-b-modal.updateTableRowModal
                  @click="currentRowIndex = index"
                >
                  <i class="fa fa-pencil"></i>
                </b-btn>
                <b-btn
                  variant="danger"
                  v-b-modal.deleteTableRowModal
                  @click="currentRowIndex = index"
                >
                  <i class="fa fa-trash"></i>
                </b-btn>
              </b-button-group>
            </td>
          </tr>
        </template>
      </tbody>
    </table>

    <b-modal
      id="deleteTableRowModal"
      title="Delete Row"
      :header-bg-variant="deleteRowModalVariant"
      :header-text-variant="deleteRowModalTextVariant"
      :body-bg-variant="deleteRowModalVariant"
      :body-text-variant="deleteRowModalTextVariant"
      :footer-bg-variant="deleteRowModalVariant"
      :footer-text-variant="deleteRowModalTextVariant"
      @ok="deleteRow"
    >
      <p>Are you sure ?</p>
    </b-modal>
    <b-modal
      id="updateTableRowModal"
      ref="updateRowModal"
      title="Update Row"
      @ok="updateTableRow"
      @cancel="retriveTableDataBreakfast"
    >
      <template v-if="currentRowIndex !== -1">
        <form class="form" @submit.prevent="updateTableRow">
          <div class="row">
            <template v-for="column in tableSchema">
              <div class="col-md-12" v-if="column.Field !== 'id'" :key="column.Field">
                <div class="form-group">
                  <label for>{{column.Field}}</label>
                  <input
                    type="text"
                    :placeholder="column.Field"
                    class="form-control"
                    v-model="tableData[currentRowIndex][column.Field]"
                  >
                </div>
              </div>
            </template>
            <div class="col-md-12">
              <div class="form-group">
                <label for></label>
                <input type="submit" class="btn btn-block btn-success">
              </div>
            </div>
            
          </div>
        </form>
      </template>
    </b-modal>
    </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  props: {
    tableName: String,
    columnWidth: {
      type: Number,
      default: 3,
      validator(value) {
        return value <= 12 || value >= 1;
      }
    }
  },
  async created() {

    await this.retriveTableDataBreakfast();
    const x = localStorage.getItem('data-123');
    if(x) this.data = JSON.parse(x)
  },
  data() {
    return {
      myDate: new Date().toISOString().slice(0, 10),
      tableSchema: [],
      tableData: [],
      newRowData: {},
      filterRowData: {},
      deleteRowModalVariant: "danger",
      deleteRowModalTextVariant: "light",
      currentRowIndex: -1,
      newData: { breakfast: [], lunch: [], dinner: [] },
      selectedDate: ""
    };
  },
  computed: {
    columnWidthClass() {
      return `col-md-${this.columnWidth}`;
    }
  },
  methods: {
    addNewData() {
      this.data["" + this.selectedDate] = this.newData;
      this.newData = { breakfast: [], lunch: [], dinner: [] };
    },
    saveAllData() {
      localStorage.setItem('data-123', JSON.stringify(this.data));
    },
    async addNewTableElementBreakfast() {
      await axios.post(
        `http://localhost:3000/breakfast/insert`,
        this.newRowData
      );
      await this.retriveTableDataBreakfast();
    },
    printData(){
      console.log(this.newRowData);
    },
    async addNewTableElementLunch() {
      await axios.post(`http://localhost:3000/lunch/insert`, this.newRowData);
      await this.retriveTableDataLunch();
    },
    async addNewTableElementDinner() {
      await axios.post(`http://localhost:3000/dinner/insert`, this.newRowData);
      await this.retriveTableDataDinner();
    },
    // postData() {
    //   this.addNewTableElementBreakfast();
    //   this.addNewTableElementLunch();
    //   this.addNewTableElementDinner();
    // },
    async updateTableRow() {
      this.$refs.updateRowModal.hide();
      await axios.patch(
        `http://localhost:3000/${this.tableName}/update`,
        this.tableData[this.currentRowIndex]
      );
      // await this.retriveTableData();
    },
    populateNewRowDataObjectFromSchema() {
      for (let i = 0; i < this.tableSchema.length; i++) {
        this.filterRowData[this.tableSchema[i].Field] = "";
        if (this.tableSchema[i].Field !== "id")
          this.newRowData[this.tableSchema[i].Field] = "";
      }
    },
    async retriveTableDataBreakfast() {
      const tableSchema = await axios.get(
        `http://localhost:3000/breakfast/schema`
      );
      const tableData = await axios.get(
        `http://localhost:3000/breakfast`
      );
      this.tableSchema = tableSchema.data;
      this.tableData = tableData.data;
      console.log(this.tableData);
      this.populateNewRowDataObjectFromSchema();
    },
    async retriveTableDataLunch() {
      const tableSchema = await axios.get(
        `http://localhost:3000/lunch/schema`
      );
      const tableData = await axios.get(
        `http://localhost:3000/lunch`
      );
      this.tableSchema = tableSchema.data;
      this.tableData = tableData.data;
      this.populateNewRowDataObjectFromSchema();
    },
    async retriveTableDataDinner() {
      const tableSchema = await axios.get(
        `http://localhost:3000/dinner/schema`
      );
      const tableData = await axios.get(
        `http://localhost:3000/dinner`
      );
      this.tableSchema = tableSchema.data;
      this.tableData = tableData.data;
      this.populateNewRowDataObjectFromSchema();
    },
    async deleteRow() {
      await axios.delete(`http://localhost:3000/${this.tableName}/delete`, {
        data: { id: this.tableData[this.currentRowIndex].id }
      });
      // this.retriveTableData();
    },
    canShowRow(row) {
      const filteredColumns = [];
      for (let column in this.filterRowData) {
        if (this.filterRowData[column].trim() !== "")
          filteredColumns.push(column);
      }
      for (let i = 0; i < filteredColumns.length; i++) {
        if (
          row[filteredColumns[i]]
            .toString()
            .indexOf(this.filterRowData[filteredColumns[i]]) === -1
        ) {
          return false;
        }
      }
      return true;
    },
    rerender() {
      this.$forceUpdate();
    }
  }
};
</script>

<style scoped>
  .input{
    max-width: 70px
  }
</style>