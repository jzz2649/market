<template>
  <div class="Home">
    <div class="box">
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
      formLayout: 'horizontal',
      form: this.$form.createForm(this)
    }
  },
  computed:{
    ...mapGetters([
      'ip',
      'port1',
      'port2'
    ])
  },
  mounted(){
    if(isDef(this.ip)){
      this.form.setFieldsValue({
        ip:this.ip
      })
    }
    if(isDef(this.port1)){
      this.form.setFieldsValue({
        port1:this.port1
      })
    }
    if(isDef(this.port2)){
      this.form.setFieldsValue({
        port2:this.port2
      })
    }
  },
  methods:{
    ...mapMutations(['updateIp','updatePort1','updatePort2']),
    handleSubmit(e){
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          const { ip, port1, port2 } = values;
          this.updateIp(ip);
          this.updatePort1(port1);
          this.updatePort2(port2);
          updateUrl({
            ip,
            port1,
            port2
          })
          this.$router.push('/market');
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
</style>

