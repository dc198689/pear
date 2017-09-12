<template>
	<div class="component signin">
		<el-button v-on:click="signin">
			{{ $t('lang.components.button[1].signin') }}
		</el-button>
	</div>
</template>

<script>
	/**
	 * Export
	 */
	export default {
		name: 'signin',
		data() {
			return {

			}
		},
		methods: {
			signin() {
				this.$store.dispatch('signin')
					.then((response) => {

					})
			}
		}
	}
</script>

<style lang="scss" scope>
	.signout {

	}
</style>
