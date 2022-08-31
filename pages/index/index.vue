<template>
	
</template>

<script>
	export default {
		data() {	
			return {
				swiperList:[]
			}
		},
		onLoad() {
			//调用方法，获取轮播图的数据
			this.getSwiperList()
		},
		methods: {
			async getSwiperList(){
				const {data:res}=await uni.$http.get('/api/public/v1/home/swiperdata')
			    
				if(res.meta.status!==200){
					return uni.showToast({
						title:'数据请求失败',
						//指定弹窗的时间，1.5秒自动隐藏
						duration:1500,
						//隐藏后没有任何图标
						icon:'none'
					})
				}
				
				this.swiperList=res.message
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
