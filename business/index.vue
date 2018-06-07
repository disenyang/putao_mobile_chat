<template>
	<e-page>
		<router-view>
		</router-view>
	</e-page>
</template>
<script>
	export default {
    data(){
    	return {
        	
        }
    },
    computed:{
    	routerName:function(){
            let rn= this.$store?this.$store.state.routerName:"";
            console.log("rn",rn);
            return rn;
        }
    },
    created(){
      	
    },   
    mounted(){
    	
    },
    methods:{
    	logout(){
        	window.localStorage.removeItem("userinfo");
            this.$router.push({name:"login"});
        }
    }
}
</script>
<style>
    @import '../public/styles/var.css';
	
</style>