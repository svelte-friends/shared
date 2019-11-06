<script>
export let color = '#624695';
export let options = [
		{ value: '1', name: 'Option 1' },
		{ value: '2', name: 'Option 2' },
	];
</script>

<style>

.container{
  width:250px;
  overflow:hidden;
}

select {
      width: 100%;
      height:48px;
      font-size:18px;
      padding:13px 20px 13px 12px;
      color:#fff;
}
</style>


<div class="container">
<select style="background-color:{color}">
{#each options as option}
<option value={option.value}>{option.name}</option>
{/each}
</select>
</div>





