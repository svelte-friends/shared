<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
export let color = 'white';
export let color_text = "#0b0e1e";
export let options = [

		{ value: 1, name: 'Option 1' },
		{ value: 2, name: 'Option 2' },
	];

let styleInline  = `color: ${color_text}; background-color: ${color};`;
let selected = 2;


function isSelected (){
    dispatch("change", {selected});
}

</script>

<style>

.container{
  width:250px;
  overflow:hidden;
}

select {
      width: 100%;
      height:48px;
      padding:13px 20px 13px 12px;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.75px;
      border: none;
}

</style>


<div class="container">
<select on:change={isSelected}  bind:value={selected} style={styleInline}>
{#each options as option}
<option class="option" value={option.value} selected={selected === option.value}>{option.name}</option>
{/each}
</select>
</div>





