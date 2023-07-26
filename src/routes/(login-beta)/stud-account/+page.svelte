<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms'
	import { goto } from '$app/navigation';

	let loginForm: HTMLFormElement
	let loading = false
	let email = ''
	let password = ''
	
	const handleSubmit: SubmitFunction = () => {
	  loading = true
	  return async () => {
		await new Promise((resolve) => setTimeout(resolve, 2000))
		loading = false
		goto("../app-status")
	  }
	}
</script>
<svelte:head>
	<title>Student Login</title>
</svelte:head>
<div class="bg-[url('/images/backup.png')] bg-cover m-0 h-full">
	<div class="flex items-center justify-center h-screen p-10">
	  <div class="flex flex-col gap-4 bg-[#702828] p-5 w-5/12 h-5/4 items-center">
		<a href="./">
		  <img class="h-auto max-w-xs mx-auto" id="logo_name" src="./images/logo_name.png" alt="logo_name">
		</a>
		<div class="bg-[#702828] w-full h-full flex items-center justify-center flex-col">
		  <form
			class="w-full"
			method="post"
			action="?/login"
			use:enhance={handleSubmit}
			bind:this={loginForm}
		  >
			<div class="w-full relative h-">
			  <input
				id="studnum"
				name="studnum"
				type="text"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm mb-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2 pl-10"
				placeholder="Student Number"
				on:input={(event) => (email = event.currentTarget.value)}
				required
			  />
			  <div class="absolute top-0 left-0 h-full flex items-center pl-3"> 
				<img src="/images/admin.png" alt="icon" class="h-4" /> 
			  </div>
			</div>
	
			<div class="w-full relative">
			  <input 
				id="password"
				name="password"
				type="password"
				value={password}
				on:input={(event) => (password = event.currentTarget.value)}
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm mb-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2 pl-10" 
				required
			  />
			  <div class="absolute top-0 left-0 h-full flex items-center pl-3"> 
				<img src="/images/pass.png" alt="icon" class="h-10" />
			  </div>
			</div>
	
			<div class="w-full">
				<input
				type="submit"
				class="variant-filled-tertiary cursor-pointer hover:bg-[#AD9673] text-white text-center w-full py-2 px-4 rounded-md disabled:bg-gray-400"
				value={loading ? 'Loading...' : 'Log in'}
				disabled={loading}
			  />
			</div>
		  </form>
		</div>
	  </div>
	</div>
  </div>
  
  