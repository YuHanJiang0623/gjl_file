<template>
  <div>
    <p>
      <el-input
        v-model="name"
        placeholder="请输入内容"
        :disabled="disabled"
      ></el-input>
      <el-button icon="el-icon-edit" @click="disabled = !disabled"></el-button>
      <el-button type="primary" @click="changeName(name)">确定</el-button>
    </p>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>


export default {
  name: "home",
  data() {
    return {
      name: "",
      disabled: true,
      tableData: [
        // {
        //   date: "2016-05-02",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1518 弄"
        // },
        // {
        //   date: "2016-05-04",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1517 弄"
        // },
      ]
    };
  },
  components: {},
  created() {},
  mounted() {
    //  this.$message({
    //           message: '恭喜你，这是一条成功消息',
    //           type: 'success'
    //         });
    //  this.$message.error('错了哦，这是一条错误消息');
    this.$axios
      .get("/name", {
        // params: {
        //   app_type:2
        // }
      })
      .then(res => {
        console.log(res.data);
         this.$store.state.name = res.data.name;
         this.name=this.$store.state.name
      });
  },
  computed: {
    
  },
  methods: {
    
    changeName(name) {
      this.$axios.post("/mock/addProject", {
        name: name
      });
    }
  }
};
</script>

<style></style>
