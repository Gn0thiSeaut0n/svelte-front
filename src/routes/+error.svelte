<script>
    import { page } from '$app/stores';
    console.log($page.error.errors)
  </script>

<div>
    에러입니다.
    <h1>{$page.error.message}</h1>
    {#each $page.error.errors as t}
      {t.defaultMessage}
    {/each}
    <h1>{$page.status}</h1>
</div>