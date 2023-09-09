<script lang="ts">
    import Video from "./Video.svelte";
    // TODO: convert this to have a data list and iterating over them
</script>

<title>Beorn LLC: Videos</title>

<section id="products" class="bg-white">
    <div class="container mx-auto flex flex-wrap pb-12">
        <Video
            title="SE08 Demo"
            link="https://www.youtube.com/watch?v=zrkK7-ysMuY&ab_channel=BeornLLC"
        />

        <Video
            title="Title"
            link="https://www.youtube.com/embed/as3qWsbYGWs?origin=http://example.com"
        />

        <Video
            title="Title"
            link="https://www.youtube.com/embed/as3qWsbYGWs?origin=http://example.com"
        />

        <Video
            title="Title"
            link="https://www.youtube.com/embed/as3qWsbYGWs?origin=http://example.com"
        />
    </div>
</section>
