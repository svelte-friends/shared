<script>
import { onMount } from "svelte";
export let color = '#624695';
export let total = 20;
export let showPages = 5;
export let active= 1;

let startAt = 1;
let bgActive = `background-color: ${color};`;
const range =   [...Array(total).keys()].map(i => i + startAt);

const isActive = (index) => {
   return  active === index;
};

</script>

<style>

.container{
width: auto;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
}


ul {

padding-left: 0px;
height: 30px;
flex-direction: row;
align-items: center;
text-align: center;
width: auto;
display: inline-flex;

}

.item {
  width: 30px;
  height: 30px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  text-decoration: none;
}

.active {
  width: 30px;
  height: 30px;
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 rgba(40, 39, 40, 0.3);
  color:white;
  padding-top: 6px;
}

.first {
  margin-left: 10px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  width: 40px;
}

.last{
 margin-right: 10px;
 border-top-right-radius: 15px;
 border-bottom-right-radius: 15px;
 width: 40px;
}

a {
  text-decoration: none;
  text-align: center;
  color: #8c8c8c;
}

</style>

<div class="container">
<ul>

{#each range as n }
  <li class="item"><a data-index={n}
  class="{isActive(n) && 'active'}"
  style="{isActive(n) && bgActive}"
  href="#">{n}</a></li>
{/each}

</ul>
</div>


