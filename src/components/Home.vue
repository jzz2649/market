<template>
  <div class="Home">
    <div class="box">
      <a-button type="primary" @click="handleAdd">添加地址</a-button>
      <a-table bordered :dataSource="hostList" :columns="columns" :pagination="false">
        <template slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="hostList.length"
          title="确定删除?"
          @confirm="() => onDelete(record)">
          <a href="javascript:;">删除</a>
        </a-popconfirm>
        <a href="javascript:;" class="enter" @click="handleEnter(record)">进入</a>
      </template>
      </a-table>
      <a-modal
        title="添加行情"
        v-model="visible"
        @ok="visible=false"
        :footer="null"
      >
        <a-form
          :layout="formLayout"
          :form="form"
          @submit="handleSubmit"
        >
          <a-form-item
            label="ip地址"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              placeholder="如 127.0.0.1"
              v-decorator="[
                'ip',
                {rules: [{ required: true, message: '请输入ip地址' }]}
              ]"
            />
          </a-form-item>
          <a-form-item
            label="行情端口号"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              placeholder="如 8000"
              v-decorator="[
                'port1',
                {rules: [{ required: true, message: '请输入行情端口号' }]}
              ]"
            />
          </a-form-item>
          <a-form-item
            label="订阅端口号"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              placeholder="如 8000"
              v-decorator="[
                'port2',
                {rules: [{ required: true, message: '请输入订阅端口号' }]}
              ]"
            />
          </a-form-item>
          <a-form-item
            :wrapper-col="{ span: 12, offset: 5 }"
          >
            <a-button
              type="primary"
              html-type="submit"
            >
              提交
            </a-button>
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { isDef } from '@/shared/util'
import { updateUrl } from '@/shared/url'

export default {
  data(){
    return {
      visible: false,
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
      columns:[{
        title: 'ip地址',
        dataIndex: 'ip',
      },{
        title: '行情端口号',
        dataIndex: 'port1',
      },{
        title: '订阅端口号',
        dataIndex: 'port2',
      }, {
        title: '操作',
        dataIndex: 'operation',
        scopedSlots: { customRender: 'operation' },
      }]
    }
  },
  computed:{
    ...mapGetters([
      'hostList'
    ])
  },
  mounted(){
  },
  methods:{
    ...mapMutations(['updateHostList', 'updateHostKey']),
    handleAdd(){
      this.visible = true;
    },
    onDelete(item){
      const newHostList = this.hostList.filter(host=>{
        if(host.key===item.key){
          return false;
        }
        return true;
      })
      this.updateHostList(newHostList);
    },
    handleEnter(item){
      this.updateHostKey(item.key);
      const { ip, port1, port2} = item;
      updateUrl({
        ip,
        port1,
        port2
      })
      this.$router.push('/market');
    },
    handleSubmit(e){
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          const { ip, port1, port2 } = values;
          const key = Date.now();
          this.updateHostList(this.hostList.concat({ip,port1,port2,key}));
          this.visible = false;
        }
      });
    }
  }
}
</script>

<style scoped>
  .Home {
    width: 100%;
    height: 100%;
    padding-top: 100px;
  }
  .box {
    width: 600px;
    margin: auto;
  }
  .enter{
    margin-left: 10px;
    color: red;
  }
</style>

