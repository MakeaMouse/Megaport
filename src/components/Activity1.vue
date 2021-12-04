<template>
  <div class="main-container">
    <div class="table-top">
      <input type="text" v-model="searchVal" /><button @click="filterItems()">
        Search
      </button>
    </div>
    <div class="table-title">
      <button class="new-button1" v-if="hideAdd" @click="showBox()">
        New Product
      </button>
      <button class="new-button2" v-if="!hideAdd" @click="SaveNewItem()">
        Save
      </button>
      <div :class="{ 'triangle-down': hideAdd, 'triangle-up': !hideAdd }"></div>
    </div>
    <transition name="new" mode="out-in">
      <div class="table-new" v-if="!hideAdd">
       <div>
        <label for="id">Id</label>
        <input type="text" id="id" v-model="newId" />
       </div>
       <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="newName" />
       </div>
       <div>
        <label for="type">Type</label>
        <input type="text" id="type" v-model="newType" />
       </div>
       <div>
        <label for="topping">Topping</label>
        <input type="text" id="topping" v-model="newTopping" />
       </div>
    </div>
    </transition>
    <div class="table-content">
      <table>
        <tr>
          <th>
            <h4>Id</h4>
            <span @click="sortItems('id', false)">A</span>
            <span @click="sortItems('id', true)">D</span>
          </th>
          <th>
            <h4>Name</h4>
            <span @click="sortItems('type', false)">A</span>
            <span @click="sortItems('type', true)">D</span>
          </th>
          <th>
            <h4>Type</h4>
            <span @click="sortItems('name', false)">A</span>
            <span @click="sortItems('name', true)">D</span>
          </th>
          <th>
            <h4>Topping</h4>
            <span @click="sortItems('topping', false)">A</span>
            <span @click="sortItems('topping', true)">D</span>
          </th>
        </tr>
        <tr v-for="(item, index) in filted_products" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.topping }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Activity1",
  created() {
    this.filterItems();
  },

  data() {
    return {
      searchVal: "",
      filted_products: [],
      letter: "", //sorting category
      original: false, //default ascending
      hideAdd: true,
      newId: "",
      newName: "",
      newType: "",
      newTopping: "",

      products: [
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Regular Glazed",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Regular Sugar",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Regular Powdered Sugar",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Regular Chocolate with Sprinkles",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Regular Chocolate",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Regular Maple",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Chocolate None",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Chocolate Glazed",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Chocolate Sugar",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Chocolate Powdered Sugar",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Chocolate Chocolate with Sprinkles",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Chocolate Chocolate",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Chocolate Maple",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Blueberry None",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Blueberry Glazed",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Blueberry Sugar",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Blueberry Powdered Sugar",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Blueberry Chocolate with Sprinkles",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Blueberry Chocolate",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Blueberry Maple",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Devil's Food None",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Devil's Food Glazed",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Devil's Food Sugar",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Devil's Food Powdered Sugar",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Devil's Food Chocolate with Sprinkles",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Devil's Food Chocolate",
        },
        {
          id: "0001",
          type: "donut",
          name: "Cake",
          topping: "Devil's Food Maple",
        },
        {
          id: "0002",
          type: "donut",
          name: "Raised",
          topping: "Regular None",
        },
        {
          id: "0002",
          type: "donut",
          name: "Raised",
          topping: "Regular Glazed",
        },
        {
          id: "0002",
          type: "donut",
          name: "Raised",
          topping: "Regular Sugar",
        },
        {
          id: "0002",
          type: "donut",
          name: "Raised",
          topping: "Regular Chocolate",
        },
        {
          id: "0002",
          type: "donut",
          name: "Raised",
          topping: "Regular Maple",
        },
        {
          id: "0003",
          type: "donut",
          name: "Old Fashioned",
          topping: "Regular None",
        },
        {
          id: "0003",
          type: "donut",
          name: "Old Fashioned",
          topping: "Regular Glazed",
        },
        {
          id: "0003",
          type: "donut",
          name: "Old Fashioned",
          topping: "Regular Chocolate",
        },
        {
          id: "0003",
          type: "donut",
          name: "Old Fashioned",
          topping: "Regular Maple",
        },
        {
          id: "0003",
          type: "donut",
          name: "Old Fashioned",
          topping: "Chocolate None",
        },
        {
          id: "0003",
          type: "donut",
          name: "Old Fashioned",
          topping: "Chocolate Glazed",
        },
        {
          id: "0003",
          type: "donut",
          name: "Old Fashioned",
          topping: "Chocolate Chocolate",
        },
        {
          id: "0003",
          type: "donut",
          name: "Old Fashioned",
          topping: "Chocolate Maple",
        },
        {
          id: "0004",
          type: "bar",
          name: "Bar",
          topping: "Regular Chocolate",
        },
        {
          id: "0004",
          type: "bar",
          name: "Bar",
          topping: "Regular Maple",
        },
        {
          id: "0005",
          type: "twist",
          name: "Twist",
          topping: "Regular Glazed",
        },
        {
          id: "0005",
          type: "twist",
          name: "Twist",
          topping: "Regular Sugar",
        },
        {
          id: "0006",
          type: "filled",
          name: "Filled",
          topping: "Regular Glazed",
        },
        {
          id: "0006",
          type: "filled",
          name: "Filled",
          topping: "Regular Powdered Sugar",
        },
        {
          id: "0006",
          type: "filled",
          name: "Filled",
          topping: "Regular Chocolate",
        },
        {
          id: "0006",
          type: "filled",
          name: "Filled",
          topping: "Regular Maple",
        },
      ],
    };
  },

  methods: {
    sortItems(field, original) {
      var str = this.filted_products[0][field];
      var pattern = new RegExp("[A-Za-z]+");
      var pattern2 = new RegExp("[0-9]+");

      if (pattern.test(str)) {
        if (!original) {
          this.filted_products.sort((a, b) => {
            return a[field].localeCompare(b[field]);
          });
        } else {
          this.filted_products.sort((a, b) => {
            return b[field].localeCompare(a[field]);
          });
        }
      } else if (pattern2.test(str)) {
        if (!original) {
          this.filted_products.sort((a, b) => {
            return a[field] - b[field];
          });
        } else {
          this.filted_products.sort((a, b) => {
            return b[field] - a[field];
          });
        }
      }
    },

    filterItems() {
      if (this.searchVal != "") {
        let reg = new RegExp(this.searchVal, "i");
        this.searchVal = "";
        this.queryitem(reg);
        this.duplicateRemove();
      } else {
        this.filted_products = this.products;
      }
    },

    queryitem(reg) {
      this.filted_products = [];
      this.products.forEach((item) => {
        for (let k in item) {
          if (reg.test(item[k])) {
            this.filted_products.push(item);
          }
        }
      });
    },

    duplicateRemove() {
      var final = [];
      var temp = [];
      this.filted_products.forEach((current, index) => {
        if (temp.includes(index)) {
          return;
        }

        final.push(current);

        for (
          let compareIndex = index + 1;
          compareIndex < this.filted_products.length;
          compareIndex++
        ) {
          const compareItem = this.filted_products[compareIndex];
          const currentKeys = Object.keys(current);
          const compareKeys = Object.keys(compareItem);
          if (currentKeys.length !== compareKeys.length) {
            continue;
          }

          const currentKeyname = currentKeys.sort().join("").toLowerCase();
          const compareKeyname = compareKeys.sort().join("").toLowerCase();
          if (currentKeyname !== compareKeyname) {
            continue;
          }

          let letEqual = true;
          for (let i = 0; i < currentKeys.length; i++) {
            const key = currentKeys[i];
            if (current[key] !== compareItem[key]) {
              letEqual = false;
              break;
            }
          }

          if (letEqual) {
            temp.push(compareIndex);
          }
        }
      });

      this.filted_products = final;
    },

    showBox() {
      this.hideAdd = false;
    },

    SaveNewItem() {
      if (
        this.newId != "" &&
        this.newName != "" &&
        this.newType != "" &&
        this.newTopping != ""
      ) {
        this.products.push({
          id: this.newId,
          name: this.newName,
          type: this.newType,
          topping: this.newTopping,
        });
        this.newId = "";
        this.newName = "";
        this.newType = "";
        this.newTopping = "";
        this.hideAdd = true;
      } else {
        alert("Fields can not be empty!");
      }
    },
  },
};
</script>


<style scoped>
* {
  padding: 0;
  margin: 0;
}
.main-container {
  text-align: center;
}
.table-top {
  display: flex;
  align-items: center;
  margin: 5% auto 8%;
  text-align: center;
  width: 30%;
  height: 3rem;
  border: 1px solid #000;
  box-shadow: 1px 1px 8px #666;
}
.table-top input {
  width: 80%;
  height: 100%;
  border: none;
}
.table-top button {
  width: 20%;
  height: 100%;
  border: none;
  background-color: #000;
  color: #fff;
  font-size: 1.5rem;
  letter-spacing: 1px;
  font-weight: 700;
}
.table-top button:hover {
  background-color: #999;
  color: #000;
}
.table-title {
  display: flex;
  justify-content: right;
  align-items: baseline;
  width: 50%;
  border-bottom: 2px solid #333;
  margin: 0 auto 1rem;
}
.table-title button {
  border: none;
  background-color: #fff;
  font-size: 1.5rem;
  color: #000;
  cursor: pointer;
  padding: 0.5rem;
}
.table-title button:hover {
  background-color: #000;
  color: #fff;
}
.table-new {
  width: 50%;
  height: 5rem;
  margin: 0 auto 5%;
  display: flex;
  border-right: 1px solid #000;
  border-left: 1px solid #000;
  border-bottom: 1px solid #000;
  background-color: #eee;
}
.table-new div {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.table-new div label {
  width: 25%;
  font-size: 1.2rem;
}
.table-new div input {
  width: 70%;
  height: 30%;
  margin-bottom: 1rem;
}
.table-content {
  margin: 0 auto;
  width: 50%;
  border: 2px solid #fff;
  box-shadow: 1px 1px 8px #000;
}
.table-content table {
  padding: 1rem 0 0;
  width: 100%;
  border: 2px dotted #999;
  flex-direction: column;
}
.table-content span {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  margin: 1rem 0.5rem;
  background: #000;
  color: #fff;
  cursor: pointer;
  border-radius: 20%;
  font-size: 1rem;
  font-weight: 600;
}
.table-content tr {
  height: 3rem;
}

.triangle-up {
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 16px solid #000;
  margin-left: 0.5rem;
}

.triangle-down {
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 16px solid #000;
  margin-left: 0.5rem;
}

 .new-enter-active, .new-leave-active {
        transition: all 0.3s ease;
    }
    .new-enter,
    .new-leave-to{
        transform: scaleY(0);
    }
    .new-enter-to,
    .new-leave{
        transform: scaleY(100%);
    }


</style>
