<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms'
	
	let loginForm: HTMLFormElement
	let loading = false
	let email = ''
	let password = ''
	
	const handleSubmit: SubmitFunction = () => {
	  loading = true
	  return async () => {
		await new Promise((resolve) => setTimeout(resolve, 2000))
		loading = false
	  }
	}
</script>

<style>
    .center-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        padding: 50px;
    }

	.form-widget {
	  background-color: #702828;
	  width: 75%;
	  height: 75%;
	  justify-content: center;
	  align-items: center;
	  display: flex;
	  flex-direction: column;
	}
  
	.form-widget input[type="studnum"],
	.form-widget input[type="password"] {
	  width: 100%;
	  padding: 10px;
	  font-size: 16px;
	  background-image: url('/images/admin.png'); /*ayusin*/
	  background-repeat: no-repeat;
	  background-position: left center;
	  padding-left: 30px; /* Adjust this value as needed */
	}
  
	.form-widget input[type="submit"] {
	  width: 100%;
	  padding: 10px;
	  font-size: 16px;
	  color: #fff;
	  background-color: #007bff;
	  border: none;
	  border-radius: 4px;
	  cursor: pointer;
	}
  
	.form-widget input[type="submit"]:disabled {
	  background-color: #ccc;
	  cursor: not-allowed;}

</style>

<div class="bg-[url('/images/backup.png')] bg-cover m-0 h-full">
    <div class="center-container">
        <div class="flex flex-col gap-4 bg-[#702828] p-5 w-2/4 h-5/4 items-center">
            <a href="./">
                <img class="h-auto max-w-xs mx-auto" id="logo_name" src="./images/logo_name.png" alt="logo_name">
            </a>
            <div class="form-widget">
				<form
				  class="form-widget"
				  method="post"
				  action="?/login"
				  use:enhance={handleSubmit}
				  bind:this={loginForm}
				>
				  <div class="w-full">
					<input
					  id="studnum"
					  name="studnum"
					  type="text"
					  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm mb-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
					  placeholder="Student Number"
					  on:input={(event) => (email = event.currentTarget.value)}
					  required
					/>
				  </div>
			
				  <div class="w-full">
					<input 
					  id="password"
					  name="password"
					  type="password"
					  value={password}
					  on:input={(event) => (password = event.currentTarget.value)}
					  required
					/>
				  </div>
			
				  <div class="w-full">
					<input
					  type="submit"
					  class="button block primary"
					  value={loading ? 'Loading...' : 'Log in'}
					  disabled={loading}
					/>
				  </div>
				</form>
			</div>
        </div>
    </div>
</div>
