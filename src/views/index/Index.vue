<template>
  <div class="layout">
    <Layout>
      <Header class="layout-header">
        <div class="layout-logo">
          <Icon type="logo-nodejs" size="48" color="#eee" />
        </div>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}" class="layout-sider">
          <Menu active-name="1" theme="light" width="auto" :open-names="['1']" @on-select="selectedMenu">
            <div v-for="(item,index) in menuList" :key="index">
              <Submenu name="item.path" v-if="item.submenu.length > 0">
                <template slot="title">
                  <Icon :type="item.icon"></Icon>
                  <span>{{item.menu}}</span>
                </template>
                <MenuItem :name="subItem.path" v-for="(subItem,index) in item.submenu" :key="index">
                  {{subItem.menu}}
                </MenuItem>
              </Submenu>
              <MenuItem :name="item.path" v-else>
                <Icon :type="item.icon" />
                <span>{{item.menu}}</span>
              </MenuItem>
            </div>
          </Menu>
        </Sider>
        <Layout :style="{padding: '15px',marginLeft:'200px'}">
          <Content :style="{padding: '15px', minHeight: '500px', background: '#fff'}">
            <router-view />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import {
  Layout,
  Header,
  Menu,
  MenuItem,
  Submenu,
  Icon,
  Content,
  Sider
} from "view-design";
export default {
  components: {
    Layout,
    Header,
    Menu,
    MenuItem,
    Submenu,
    Icon,
    Content,
    Sider
  },
  data() {
    return {
      // 菜单列表
      menuList: [
        { menu: "统计分析", icon: "md-stats", path:'/statistics', submenu: [] },
        {
          menu: "上传",
          icon: "ios-navigate",
          submenu: [
            { menu: "图片上传", path:'/upload/image' },
            { menu: "视频上传", path:'/upload/video' },
            { menu: "文档上传", path:'/upload/doc' }
          ]
        }
      ]
    };
  },
  methods:{
    /**
     * @description: 选中菜单
     * @param name {String} 
     * @return: 
     */
    selectedMenu(name) {
      this.$router.push({
        path:name
      });
    }
  }
};
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-sider {
  position: fixed;
  border-right: 2px solid #2d8cf0;
  left: 1px;
  top: 65px;
  bottom: 0;
}
.layout-header {
  background: #4284f5;
}
</style>