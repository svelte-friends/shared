<script>
export let color = '#624695';
export let total = 20;
export let displayRows = 10;
export let active = 1;
let previous = "<";
let next = '>';
let bgActive = `background-color: ${color};`;

const isActive = (index) => {
   return  parseInt(active) === index;
};

let paper;
const getPager = (totalItems, currentPage, pageSize) => {

    let startPage, endPage;
    const  totalPages = Math.ceil(totalItems / pageSize);

    if (totalPages <= 10) {
        startPage = 1;
        endPage = totalPages;
     } else {
        if (currentPage <= 6) {
            startPage = 1;
            endPage = 10;
        } else if (currentPage + 4 >= totalPages) {
            startPage = totalPages - 9;
            endPage = totalPages
        } else {
            startPage = currentPage - 5;
            endPage = currentPage + 4;
        }
    }
    const pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);
     paper = {
        currentPage: currentPage,
        totalPages: totalPages,
        endPage: endPage,
        pages: pages
    };
   };

 getPager(total, active, displayRows);


 const isFirstAndLast = (currentPage, index) => {
     return {
             first: (paper.totalPages > 10) && (paper.endPage  > 10) && (index === 0),
             last: (paper.totalPages > 10) && (paper.totalPages > currentPage) && (index === 9)
         };
 };

 const setPage = (currentPage, index) => {
    const values = isFirstAndLast(currentPage, index);
    if(values.last){
      active = paper.totalPages;
    } else if(values.first) {
        active = 1;
    } else {
        active = currentPage
    }
    getPager(total, active, displayRows);
 };

 const showPage = (item, index) => {
     const values = isFirstAndLast(item, index);
     let numPage;
     if(values.first){
      numPage = '1...';
     } else if(values.last) {
      numPage = "..."+paper.totalPages;
     } else {
         numPage = item;
     }
     return numPage;
 }
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
cursor: pointer;

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

.link{
background-color: #efefef;
color: #8c8c8c;
width: 30px;
height: 30px;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: center;

}

</style>

<div class="container">
<ul>
{#if active > 1}
  <li on:click={() => setPage(active -1)} class="link"><a href={null}>{previous}</a></li>
{/if}

{#each paper.pages as n, index}
  <li on:click={() => setPage(n,index)} class="item"><a data-index={n}
  class="{isActive(n) && 'active'}"
  style="{isActive(n) && bgActive}"
  href={null}>{showPage(n, index)}
 </a>
 </li>
{/each}

{#if paper.totalPages  !== active }
  <li on:click={() => setPage(active + 1)} class="link"><a href={null}> {next} </a></li>
{/if}

</ul>
</div>


