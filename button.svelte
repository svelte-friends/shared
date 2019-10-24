<script>

export let text = 'text button';
export let color = "#624695";
export let size = "medium";
export let type = "default";
export let hover = "#3f2371";
export let active = "#26124a";

let isSimple = type === "simple";
let inline = isSimple ? `color: ${color}; border-color: ${color};`:'';
let bgInitial = isSimple ? 'transparent': color;
let bg = bgInitial;

</script>

<style>
  .btn {
   text-align: center;
   vertical-align: middle;
   user-select: none;
   box-shadow: 0 0 7px 0 rgba(40, 39, 40, 0.25);
   color: white;
   border:none;
   font-size: 14px;
   font-weight: 600;
   letter-spacing: 0.5px;
  }

  .btn-small {
    height: 28px;
    width: 100px;
  }

  .btn-medium {
    height: 38px;
    width: 100px;
  }

  .btn-large {
   height: 48px;
   width: 140px;
  }

  .btn-round {
    border-radius: 24px;
  }

  .btn-default{
     border-radius: 5px;
  }

  .btn-simple {
   border: 2px solid;
   border-radius: 5px;
  }

</style>

<button on:mouseover={() => bg = hover}
        on:mouseout={() => bg = bgInitial}
        on:mousedown={() => bg = active}
        on:mouseup={() => bg = bgInitial}
        class="btn btn-{size} btn-{type}"
        style="background-color:{bg}; {inline}">{text}
</button>
