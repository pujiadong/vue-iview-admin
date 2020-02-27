<template>
  <div class="general">
    <div class="top">
      <div class="item"></div>
    </div>
    <canvas id="main" width="1000" height="500"></canvas>
    <canvas id="main2" width="1000" height="500"></canvas>
    <canvas id="main3" width="1000" height="500"></canvas>
    <canvas id="main4" width="1000" height="500"></canvas>
  </div>
</template>

<script>
import { getGeneralData } from "../../api/general/general";
export default {
  data() {
    return {
      option: {
        title: {
          text: "Echarts 入门示例"
        },
        xAxis: { type: "category" },
        yAxis: {},
        grid: {
          left: 20,
          right: 0,
          height: "80%",
          bottom: 50
        },
        series: [
          {
            type: "pie",
            center: ["65%", 60],
            radius: 35,
            encode: { itemName: 3, value: 4 }
          },
          {
            type: "line",
            encode: { x: 0, y: 1 }
          },
          {
            type: "bar",
            encode: { x: 0, y: 2 }
          }
        ]
      }
    };
  },
  computed: {},
  methods: {
    initEcharts() {
      let myChart = this.$echarts.init(document.getElementById("main"));
      myChart.setOption(this.option);
    },
    getData() {
      getGeneralData()
        .then(result => {
          this.option.dataset = {
            source: result.data.source
          };
          this.option;
          this.initEcharts();
        })
        .catch(err => {
          console.log(err);
        });
    },
    initEcharts2() {
      let mychart = this.$echarts.init(document.getElementById("main2"));
      mychart.setOption({
        title: {
          text: "闪点图"
        },
        xAxis: {},
        yAxis: {},
        series: {
          type: "scatter",
          data: [
            [13, 44],
            [51, 51],
            [51, 32],
            [67, 19],
            [19, 33]
          ]
        }
      });
    },
    initEcharts3() {
      let mychart = this.$echarts.init(document.getElementById("main3"));
      mychart.setOption({
        title: {
          text: "公用y轴"
        },
        xAxis: {
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: [
          [0, 100, 200, 300, 400, 500, 600],
          [0, 10, 20, 30, 40, 50, 60]
        ],
        series: [
          {
            type: "bar",
            data: [242, 344, 324, 475, 264, 467, 531],
            yAxisIndex: 0
          },
          {
            type: "line",
            data: [44, 51, 32, 19, 33, 24, 12],
            yAxisIndex: 1
          }
        ]
      });
    },
    initEcharts4() {
      let mychart = this.$echarts.init(document.getElementById("main4"));
      mychart.setOption({
        backgroundColor: "#2c343c",
        textStyle: {
          color: "rgba(255, 255, 255, 0.3)"
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            data: [
              { value: 235, name: "视频广告" },
              { value: 274, name: "联盟广告" },
              { value: 310, name: "邮件营销" },
              { value: 335, name: "直接访问" },
              { value: 400, name: "搜索引擎" }
            ],
            roseType: "area",
            itemStyle: {
              // 阴影的大小
              shadowBlur: 200,
              // 阴影水平方向上的偏移
              shadowOffsetX: 0,
              // 阴影垂直方向上的偏移
              shadowOffsetY: 0,
              // 阴影颜色
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        ]
      });
    }
  },
  mounted() {
    this.getData();
    this.initEcharts2();
    this.initEcharts3();
    this.initEcharts4();
  }
};
</script>

<style lang="scss" scoped>
</style>