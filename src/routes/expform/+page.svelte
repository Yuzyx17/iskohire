<script>
  let title = "";
  let emptype = "";
  let compname = "";
  let loc = "";
  let loctype = "";
  let startDate = "";
  let endDate = "";
  let industry = "";
  let desc = "";
  let skills = "";

  function submitForm() {
    console.log({
      title,
      emptype,
      compname,
      loc,
      loctype,
      startDate,
      endDate,
      industry,
      desc,
      skills,
    });
  }
  
</script>

<style>
  .container {
      display: grid;
      place-items: center;
      height: 75vh;
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

  #startDate,
  #endDate{
    width: 220px;
  }
  select#loctype,
  select#emptype {
    width: 300px;
    height: 50px;
    padding: 0.75rem;
    border: 1px solid #D1D5DB;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  textarea,
  input[type="text"],
  input[type="date"] {
    padding: 0.75rem;
    height: 50px;
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
          <span class="space"></span>Experience
        </h1>
          <form>
              <div class="mb-4">
                  <label class="block font-bold mb-1" for="title"
                      >Title</label
                  >
                  <input
                      class="w-full px-3 py-2"
                      type="text"
                      id="title"
                      bind:value="{title}"
                      required
                  />
              </div>

              <div class="mb-4">
                  <label class="block font-bold mb-1" for="compname"
                      >Company Name</label
                  >
                  <input
                      class="w-full px-3 py-2"
                      type="text"
                      id="phone"
                      bind:value="{compname}"
                      required
                  />
              </div>

              <div class="mb-4">
                  <label class="block font-bold mb-1" for="loc"
                      >Location</label
                  >
                  <input
                      class="w-full px-3 py-2"
                      type="text"
                      id="loc"
                      bind:value="{loc}"
                      required
                  />
              </div>

              <div class="flex gap-4 mb-4">

                <div class="mb-4">
                    <label class="block font-bold mb-1" for="loctype">Location Type</label>
                    <!--dropdown-->
                    <select
                        class="w-full px-3 py-2 color"
                        id="loctype"
                        bind:value="{loctype}"
                        required
                    >
                        <option value="" disabled selected>Please Select</option>
                        <option value="Onsite">Onsite</option>
                        <option value="Online">Online</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>
                </div>

                <div class="mb-4">
                    <label class="block font-bold mb-1" for="emptype"
                        >Employment Type</label
                    >
                    <!--dropdown-->
                    <select
                        class="w-full px-3 py-2 "
                        id="emptype"
                        bind:value="{emptype}"
                        required
                    >
                        <option class="text-slate-400" value="" disabled selected>Please Select</option>
                        <option value="Onsite">Full Time</option>
                        <option value="Online">Part Time</option>
                        <option value="Hybrid">Internship</option>
                    </select>
                </div>

            
                  <div>
                      <label class="block font-bold mb-1" for="startDate"
                          >Start Date</label
                      >
                      <input
                          class="w-full px-3 py-2"
                          type="date"
                          id="startDate"
                          bind:value="{startDate}"
                          required
                      />
                  </div>

                  <div>
                      <label class="block font-bold mb-1" for="endDate"
                          >End Date</label
                      >
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
                  <label class="block font-bold mb-1" for="industry"
                      >Industry</label
                  >
                  <input
                      class="w-full px-3 py-2"
                      type="text"
                      id="industry"
                      bind:value="{industry}"
                      required
                  />
              </div>

              <div class="mb-4">
                  <label class="block font-bold mb-1" for="desc"
                      >Description</label
                  >
                  <textarea
                      class="w-full px-3 py-2"
                      id="desc"
                      bind:value="{desc}"
                      required
                  ></textarea>
              </div>

              <div class="mb-4">
                  <label class="block font-bold mb-1" for="skills"
                      >Skills</label
                  >
                  <input
                      class="w-full px-3 py-2"
                      type="text"
                      id="skills"
                      bind:value="{skills}"
                      required
                  />
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
