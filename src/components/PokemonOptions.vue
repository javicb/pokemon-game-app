<template>
  <div class="container">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0px;
}
li {
    background-color: white;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
    padding: 1%;

}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.container {
    display: flex;
    justify-content: center;
}


</style>