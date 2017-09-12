<template>
	<div class="component signout">
		<el-button v-on:click="signout">
			{{ $t('lang.components.button[2].signout') }}
		</el-button>
	</div>
</template>

<script>
	/**
	 * Export
	 */
	export default {
		name: 'signout',
		data() {
			return {

			}
		},
		methods: {
			signout() {
				this.$store.dispatch('signout')
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
