<template>
<div class="container">
  <div class="card">
    <div class="card-body row">
      <friend-link-item></friend-link-item>
      <friend-link-item></friend-link-item>
      <friend-link-item></friend-link-item>
    </div>
  </div>
</div>
</template>

<script>
import FriendLinkItem from "@/views/friendLink/childComps/FriendLinkItem";
export default {
name: "FriendLinkBody",
  components: {FriendLinkItem}
}
</script>

<style scoped>

</style>
