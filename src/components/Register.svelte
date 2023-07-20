<div id="container">
    <span class="variant-filled-tertiary text" id="button">Sign in</span>
    <span class="text-primary-50 text">Post Job</span>
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
        border-radius: 8px;
    }

    .text{
        min-width: max-content;
    }
</style>