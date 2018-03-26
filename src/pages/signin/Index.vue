<template>
	<div class="page signin">
		<h1>{{ msg }}</h1>
		<div class="signin-form">
			<div>
				<el-input 
					v-model="email"
					v-bind:placeholder="$t('lang.components.input.placeholder[1].email')"
				></el-input>
				<el-input
					type="password"
					v-model="password"
					v-bind:placeholder="$t('lang.components.input.placeholder[2].password')"
				></el-input>
			</div>
			<div>
				<el-button type="primary">{{ $t('lang.components.button[3].reset') }}</el-button>
				<el-button v-on:click="login">{{ $t('lang.components.button[1].signin') }}</el-button>
			</div>
		</div>
		<h2>Essential Links</h2>
		<ul>
			<li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
			<li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
			<li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
			<li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
			<br>
			<li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
		</ul>
		<h2>Ecosystem</h2>
		<ul>
			<li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
			<li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
			<li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
			<li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
		</ul>
		<h2>{{ $t('lang.components.checkbox.label[0].langSwitch') }}</h2>
		<div class="language-panel">
			<span class="language-btn" v-on:click="switchI18n">
				<span v-if="isSwitch">En</span>
				<span v-else>簡</span>
			</span>
		</div>
		<div>
			<el-button @click="test">Test Event Bus</el-button>
		</div>
	</div>
</template>

<script>
	/**
	 * Import Dependency
	 */
	import { getAlertType } from '../../helpers'

	/**
	 * Export
	 */
	export default {
		name: 'signin',
		data() {
			let _locale = this.$i18n.locale
			let _isSwitch = _locale !== 'en'
			return {
				msg: 'Welcome to Pear App',
				title: this.$t('lang.pages.signin.text'),
				isSwitch: _isSwitch,
				email: 'tommy@gmail.com',
				password: 'tommy123456'
			}
		},
		head: {
			title: function() {
				return {
					inner: this.title
				}
			}
		},
		methods: {
			login() {
				let loginObj = {
					'email': this.email,
					'password': this.password
				}
				this.$store.dispatch('signin', loginObj)
			},
			switchI18n() {
				this.isSwitch = !this.isSwitch
				if (this.isSwitch) {
					this.$store.dispatch('switchI18n', 'cn')
				} else {
					this.$store.dispatch('switchI18n', 'en')
				}
			},
			test() {
				let error = 'This is alert error'
				this.$bus.$emit('alertObj', error, getAlertType(4))
			}
		}
	}
</script>

<style lang="scss" scoped>
	.signin {
		width: 550px;
		margin: 0 auto;
		.signin-form {
			margin: 0 120px;
			div {
				margin: 6px 0;
			}
		}
	}
	h1, h2 {
		font-weight: normal;
	}
	ul {
		list-style-type: none;
		padding: 0;
		li {
			display: inline-block;
			margin: 10px 10px;
			padding: 3px 10px;
		}
	}
	a {
		color: #42b983;
	}
	.language-panel {
		margin: 5px 0 20px;
		.language-btn {
			cursor: pointer;
		}
	}
</style>
