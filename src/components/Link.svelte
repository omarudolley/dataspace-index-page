<script lang="ts">
  export let variant: "primary" | "secondary" = "primary"
  export let href = "/"
  const _class = `button ${variant}`
</script>

<a {href} class={_class}>
  <slot />
</a>

<style lang="scss">
  .button {
    border-radius: 4rem;
    padding: 1rem 3rem;
    font-size: 0.875rem;
    font-weight: 600;
    border: none;
    text-decoration: none;
    cursor: pointer;
  }
  .primary {
    background-color: $color-primary;
    color: #fff;

    &:hover,
    &:focus {
      background-color: #000000;
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);
    }

    &:active {
      background-color: #000000;
      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.45), 0px 3px 8px rgba(0, 0, 0, 0.35);
    }

    &:disabled {
      background-color: #d2d5d8;
      cursor: not-allowed;
      box-shadow: none;
    }
  }
  .secondary {
    background-color: $color-blue-light;
    color: $color-primary;

    &:hover,
    &:focus {
      background-color: #91a0b3;
      color: #fff;
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.35);
    }

    &:active {
      background-color: #7e91a7;
      color: #fff;
      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.45), 0px 3px 8px rgba(0, 0, 0, 0.35);
    }

    &:disabled {
      background-color: #1d385b;
      color: #426088;
      cursor: not-allowed;
      box-shadow: none;
    }
  }
</style>
