<script lang="ts">
  import conf from "$conf"
  import Link from "$components/Link.svelte"
</script>

<div class="container">
  <div class="header">
    <h2>{conf.COMPONENT_NAME}</h2>
    <p>
      The {conf.COMPONENT_NAME} is a part of the IOXIO Dataspace stack, and can not be accessed
      directly.
    </p>
  </div>

  <hr />
  <div class="section">
    <h3>
      <a href={conf.DATASPACE_URL}>Dataspace homepage <i class="arrow right" /></a>
    </h3>
    <p>
      Dataspaces are at the core of making existing data more flexible, usable, safer
      and inevitably more profitable. Read more about this dataspace!
    </p>
    <div class="button">
      <Link href={conf.DATASPACE_URL}>Read more <i class="arrow right" /></Link>
    </div>
  </div>
  <hr />
  <div class="section">
    <h3>
      <a href={conf.DEV_PORTAL_URL}>Developer portal <i class="arrow right" /></a>
    </h3>
    <p>
      Are you already a developer on your way to manage and discover data sources, and
      got lost? In the developer portal you can manage your sources and other
      configurations.
    </p>
    <div class="button">
      <Link href={conf.DEV_PORTAL_URL}>Read more <i class="arrow right" /></Link>
    </div>
  </div>
  <hr />
</div>

<style lang="scss">
  .container {
    margin: 2rem 0;

    hr {
      border: 1px solid $color-hr-line;
    }
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 5rem 0 3rem 0;
      gap: 2rem;

      h2 {
        font-size: 1.5rem;
      }
      p {
        font-size: 1rem;
        text-align: center;
        padding: 0 0.7rem;
      }
    }

    .section {
      margin: 2rem 0;
      gap: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h3 {
        i {
          margin-bottom: 0.1rem;
          transition: all 0.1s;
        }

        &:hover {
          i {
            margin-left: 0.4rem;
          }
        }
      }

      .button {
        margin-left: auto;
      }
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    .arrow {
      border: solid white;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 2px;
    }

    .right {
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    }
  }
</style>
