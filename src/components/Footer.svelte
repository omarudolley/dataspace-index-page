<script lang="ts">
  import FooterLogo from "$lib/assets/footerLogo.svg"
</script>

<div class="container">
  <div class="footer-wrapper">
    <div class="main-footer">
      <div>Powered by <span>IOXIO Dataspace technology</span></div>
      <div class="logo">
        <FooterLogo />
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;
    font-size: 0.75rem;

    .footer-wrapper {
      width: 100%;
      background: $color-night-sky;
      display: flex;
      flex-direction: column;

      @include mobile {
        flex-grow: 1;
      }
      .main-footer {
        padding: 1.5rem 3rem;
        display: flex;
        gap: 1.5rem;
        justify-content: space-between;
        align-items: center;

        span {
          text-decoration: underline;
        }

        @include mobile {
          flex-direction: column;
          gap: 2rem;
        }

        .logo {
          flex-shrink: 0;
        }
      }
    }
  }
</style>
