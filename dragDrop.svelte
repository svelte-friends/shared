<script>
  export let backgroundColor = 'white';
  export let items = [
    { label: 'teste1' },
    { label: 'teste2' },
    { label: 'teste3' },
    { label: 'teste4' },
  ];

  let hovering = false;
  let itemStart;
  let itemEnd;
  let draggableActive;


  export function dragenter(item) {
    draggableActive = item;
    itemEnd = item;
  }

  export function dragstart(item) {
    itemStart = item;
  }
  export function drop(ev) {
    let itemMove = items[itemStart];
    items.splice(itemStart, 1);
    items.splice(itemEnd, 0, itemMove);

    items = [...items];
    hovering = null;
  }
  let reorder = `<svg viewBox="0 0 512 512";width="35" height="35"><path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"/></svg>`;

  const styleColor = `
  --dragDrop-background-color: ${backgroundColor};
  `;
</script>

<style>
  .dragAndDrop {
    background-color: var(--dragDrop-background-color);
    width: 100%;
  }

  .dragAndDrop-reorder {
    display: flex;
    cursor: pointer;
  }

  ul li:hover {
    background-color: var(--white);
  }

  ul li + .draggableActive {
    background: var(--dragDrop-active-color);
    box-shadow: 0 0 7px 0 rgba(40, 39, 40, 0.25);
  }
</style>

<ul
  class="dragAndDrop"
  style={styleColor}
  on:drop|preventDefault={event => drop(event)}
  ondragover="return false">
  {#each items as item, i}
    <li
      class:draggableActive={draggableActive === i}
      class="drag"
      class:animation={i === itemEnd}
      on:dragstart={() => dragstart(i)}
      on:dragenter={() => dragenter(i)}>
      <div class="dragAndDrop-label">
        <span>{item.label}</span>
        <div class="dragAndDrop-reorder" draggable="true">
          {@html reorder}
        </div>
      </div>
    </li>
  {/each}
</ul>
