<script>
    let school = "";
    let degree = "";
    let field = "";
    let grade = "";
    let startDate = "";
    let endDate = "";
    let desc = "";
    let acts = "";
  
    function submitForm() {
      console.log({
        school,
        degree,
        field,
        grade,
        startDate,
        endDate,
        desc,
        acts,
      });
    }
  </script>
  
  <style>
    .container {
      display: grid;
      place-items: center;
      height: 100vh;
      margin: auto;
    }
  
    .form-wrapper {
      width: 75%;
    }
  
    .form-wrapper form {
      width: 100%;
    }
    #save{
      background-color: #417E1B;
    }
  
    textarea,
    input[type="text"],
    input[type="date"] {
      padding: 0.75rem;
      border: 1px solid #D1D5DB;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  
    textarea {
      resize: none;
    }
  
    h1{
    font-size: 75px;
    }

    .space {
    display: block;
    margin-top: 50px;
    }
  </style>
  
  <div class="container">
    <div class="form-wrapper">
        <main class="p-8">
            <h1 class="font-bold mb-20 mt-10">
                Add<br/>
                <span class="space"></span>Education
              </h1>

            <form>
                <div class="mb-4">
                    <label class="block font-bold mb-4" for="school">School</label>
                    <input
                        class="w-full px-3 py-2"
                        type="text"
                        id="school"
                        bind:value="{school}"
                        required
                    />
                </div>
  
                <div class="mb-4">
                    <label class="block font-bold mb-1" for="degree">Degree</label>
                    <!--dropdown-->
                    <input
                        class="w-full px-3 py-2"
                        type="text"
                        id="degree"
                        bind:value="{degree}"
                        required
                    />
                </div>
  
                <div class="mb-4">
                    <label class="block font-bold mb-1" for="field">Field of Study</label> <!--dropdown-->
                    <input
                        class="w-full px-3 py-2"
                        type="text"
                        id="field"
                        bind:value="{field}"
                        required
                    />
                </div>
  
                <div class="flex gap-4 mb-1">
                    <div class="mb-4">
                        <label class="block font-bold mb-1" for="grade">Grade</label>
                        <input
                            class="w-full px-3 py-2"
                            type="text"
                            id="grade"
                            bind:value="{grade}"
                            required
                        />
                    </div>
                    
                    <div>
                        <label class="block font-bold mb-1" for="startDate">Start Date</label>
                        <input
                            class="w-full px-3 py-2"
                            type="date"
                            id="startDate"
                            bind:value="{startDate}"
                            required
                        />
                    </div>
  
                    <div>
                        <label class="block font-bold mb-1" for="endDate">End Date</label>
                        <input
                            class="w-full px-3 py-2"
                            type="date"
                            id="endDate"
                            bind:value="{endDate}"
                            required
                        />
                    </div>

                </div>
  
                <div class="mb-4">
                    <label class="block font-bold mb-1" for="acts">Activities and Societies</label>
                    <textarea
                        class="w-full px-3 py-2"
                        id="acts"
                        bind:value="{acts}"
                        required
                    ></textarea>
                </div>

                <div class="mb-4">
                    <label class="block font-bold mb-1" for="desc">Description</label>
                    <textarea
                        class="w-full px-3 py-2"
                        id="desc"
                        bind:value="{desc}"
                        required
                    ></textarea>
                </div>
  
                <div class="text-right">
                    <button
                        class="px-4 py-2 text-white font-bold"
                        id="save"
                        type="button"
                        on:click="{submitForm}"
                    >
                        SAVE
                    </button>
                </div>
            </form>
        </main>
    </div>
  </div>
  