<template>
  <div class="header">
    <Topbar></Topbar>
    <Menubar></Menubar>
  </div>
</template>

<script>
import Topbar from "./Topbar";
import Menubar from "./Menubar";
export default {
  components: { Topbar, Menubar },
};
</script>
