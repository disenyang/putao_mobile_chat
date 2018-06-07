/**
 * Created by gaoyang on 2018/06/07 16:28.
 * @title 用户信息详情js
 */
export default {
  data() {
    return {
      //用户信息
    }
  },
  watch: {

  },
  mounted() {
    
  },
  methods: {

    /**
     * 获取详情
     * @return {undefined}
     */
    getDetail() {
      this.eLoading.show();
      this.$http.post(__interface + "/user/get", {
        id: this.$route.params.id
      }).then((response) => {
        this.userinfo = response.data.result ? response.data.result : {};
      });
    },

    /**
     * 返回
     * @return {undefined}
     */
    back() {
      this.$router.go(-1);
    }

  }
}