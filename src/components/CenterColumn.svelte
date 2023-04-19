<div class="center-column">
  <slot />
</div>

<style lang="scss">
  .center-column {
    width: 50%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;

    @include tablet {
      width: 100%;
    }

    @include above-tablet {
      margin-top: 4rem;
    }
  }
</style>
