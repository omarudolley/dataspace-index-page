<script lang="ts">
  import "$theme/reset.css"
  import "$theme/global.css"
  import "$theme/variables.scss"
  import SEO from "$components/SEO.svelte"
    import Layout from "$components/Layout.svelte"
</script>


<SEO />
<Layout>
  <slot />
</Layout>
