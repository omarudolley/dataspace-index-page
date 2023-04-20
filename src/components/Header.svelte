<script lang="ts">
  import Logo from "$lib/assets/ioxioLogo.svg"
</script>

<div class="container">
  <div class="wrapper">
    <div class="logo">
      <Logo />
    </div>
  </div>
  <slot />
</div>

<style lang="scss">
  $nav-side-margin: 4.5rem;
  $nav-side-margin-sm: 1rem;

  .container {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;
    position: relative;

    .wrapper {
      width: 100%;
      padding: 0.5rem 0;
      background: $color-blue-light;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }

    .logo {
      margin-left: $nav-side-margin;
      @include mobile {
        margin-left: $nav-side-margin-sm;
      }
    }
  }
</style>
