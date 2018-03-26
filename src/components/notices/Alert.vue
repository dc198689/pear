<template>
	<div class="component alert">
		<template>
			<div>
				{{ alertStatus }}
			</div>
		</template>
	</div>
</template>

<script>
	/**
	 * Export
	 */
	export default {
		name: 'alert',
		props: ['alertStatus'],
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.alert {

	}
</style>
