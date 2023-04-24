<div class="center-column">
  <slot />
</div>

<style lang="scss">
  .center-column {
    max-width: 1200px;
    margin: 0 auto;

    @include above-tablet {
      margin-top: 4rem;
    }
  }
</style>
