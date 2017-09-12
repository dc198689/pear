<template>
	<div class="page dashboard">
		<div>Dashboard</div>
		<signout></signout>
		<transition name="el-fade-in-linear">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	/**
	 * Import Component
	 */
	import Signout from '../../components/buttons/Signout.vue'

	/**
	 * Export
	 */
	export default {
		name: 'dashboard',
		components: {
			'signout': Signout
		},
		data() {
			return {

			}
		}
	}
</script>
