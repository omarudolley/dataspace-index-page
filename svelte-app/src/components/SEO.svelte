<script lang="ts">
  import conf  from "$settings"
</script>

<svelte:head>
     <!-- Basic meta -->
    <title>{conf.COMPONENT_NAME }</title>
    <meta name="og:title" content="{ conf.COMPONENT_NAME }" />
    <meta
      name="description"
      content="{ conf.COMPONENT_NAME } is a part of { conf.DATASPACE_NAME } stack."
    />
    <meta property="og:type" content="website" />
    <meta
      name="og:description"
      content="{conf.COMPONENT_NAME } is a part of { conf.DATASPACE_NAME } stack."
    />
    <meta property="og:image" content="{ conf.OG_IMAGE }" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{ conf.COMPONENT_NAME }" />
    <meta
      name="twitter:description"
      content="{conf.COMPONENT_NAME } is a part of { conf.DATASPACE_NAME } stack."
    />
    <meta name="twitter:image" content="{ conf.OG_IMAGE }" />
</svelte:head>
