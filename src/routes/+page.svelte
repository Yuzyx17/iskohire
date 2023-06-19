<script>
    import { LoremIpsum } from "lorem-ipsum";
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 8,
            min: 4
        },
        wordsPerSentence: {
            max: 16,
            min: 4
        }
    });
</script>

<p class="text-md text-slate-600">
    {lorem.generateParagraphs(7)}
</p>
  
<style lang="postcss">
</style>