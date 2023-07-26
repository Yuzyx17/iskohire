<div id="container">
    <a href="./main-login" class="text-black variant-filled-tertiary hover:bg-[#AD9673] hover:text-white cursor-pointer rounded" id="button">Sign in</a>
    <a href="./post-job-login" class="font-bold text-white cursor-pointer hover:text-primary-50">Post Job</a>
</div>

<style>
    #container{
        gap: 12px;
        display:grid;
        grid-template-columns: auto auto;
        justify-content: center;
        align-items: center;
        margin-right: 4%;
        min-height: var(--profile-size);
    }
    #button{
        font-weight: bold;
        padding: 4px 16px;
    }

    .text{
        min-width: max-content;
    }
</style>