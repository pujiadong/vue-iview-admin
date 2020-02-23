<template>
  <div class="general">
    <div class="top">
      <div class="item">总人数：100</div>
    </div>
    <canvas id="main" width="1200" height="500"></canvas>
  </div>
</template>

<script>
export default {
  data(){
    return {
      option:{
        title: {
          text:"Echarts 入门示例"
        },
        tooltip:{},
        xAxis:{
          data:['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子',
          '羊毛衫','雪纺衫','裤子','高跟鞋','袜子',
          '羊毛衫','雪纺衫','裤子','高跟鞋','袜子',]
        },
        yAxis:{},
        series:[
          { 
            type:'line',
            smooth:true,
            data:[5,20,36,10,10,20,20,36,10,10,20,20,36,10,10,20]
          },
        ]
      }
    }
  },
  methods:{
    initEcharts() {
      let myChart = this.$echarts.init(document.getElementById('main'));
      myChart.setOption(this.option);
    }
  },
  mounted(){
    this.initEcharts();
  }
};
</script>

<style lang="scss" scoped>

</style>