<script>
  export let text = "";
  export let color = "bg-orange-500";
  export let borderColor = "border-orange-500";
</script>

<style>
  .button {
    display: inline-block;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 25px;
    color: white;
    font-size: 1em;
    cursor: pointer;
    text-align: center;
    border-width: 2px;
    border-style: solid;
  }
</style>

<div class="button {color} {borderColor}">
  {text}
</div>
