<script lang="ts">
  import { page } from "$app/stores";
</script>

{#if $page.data.userSession}
  <h1>Dashboard</h1>
  <p>Hello {$page.data.userSession.email}</p>
  <a href="/profile">Profile</a>
{/if}
