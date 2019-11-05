<script>
  export let items = [];
</script>

<ul class="list-view">
  {#each items as item}
    <li class="list-slot">
      <slot {item} />
    </li>
  {/each}
</ul>
