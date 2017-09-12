<template>
	<div class="component loading">
		<el-button type="primary" class="btn" v-loading.fullscreen.lock="loadingStatus">
			Loading
		</el-button>
	</div>
</template>

<script>
	/**
	 * Export Logic
	 */
	export default {
		name: 'loading',
		props: ['loadingStatus'],
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.loading {
		.btn {
			position: fixed;
			top: 9999px;
		}
	}
</style>
