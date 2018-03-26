<template>
	<div id="app">
		<loading :loadingStatus="loadingStatus"></loading>
		<alert :alertStatus="alertStatus"></alert>
		<img src="./assets/img/logo.png">
		<router-view></router-view>
	</div>
</template>

<script>
	/**
	 * Import Dependency
	 */
	import { mapGetters } from 'vuex'
	// import { getTokenExpiredBox, setTimer, clearTimer } from './helpers'

	/**
	 * Import Component
	 */
	import Loading from './components/notices/Loading.vue'
	import Alert from './components/notices/Alert.vue'

	export default {
		name: 'app',
		components: {
			'loading': Loading,
			'alert': Alert
		},
		data() {
			return {
				loadingStatus: '',
				alertStatus: {},
				intervalId: ''
			}
		},
		computed: {
			...mapGetters([
				'getIsAuthorize',
				'getAccessToken'
			])
		},
		created() {
			this.$bus.$on('isLoading', (event) => {
				this.loadingStatus = event
			})
			this.$bus.$on('alertObj', (event, type) => {
				console.log(event + type)
				this.alertStatus = {
					'obj': event,
					'type': type
				}
			})
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
		// background: $bg-white-light;
		// background: url('./assets/img/bg.jpg') no-repeat top center;
		// @include grid(true);
	}
	.expire-box {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		.el-message-box__header {
			.el-message-box__title {
				text-transform: uppercase;
				letter-spacing: 1.5px;
			}
			.el-message-box__headerbtn {
				display: none;
			}
		}
		.el-message-box__content {
			.el-message-box__message {
				p {
					font-size: 16px;
				}
			}
		}
		.el-message-box__btns {
			.el-button {
				text-transform: uppercase;
			}
		}
	}
</style>
