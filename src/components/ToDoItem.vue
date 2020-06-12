<template>
  <li>
    <span class="text-muted mr-1">{{ item.id }}.</span> {{ item.title }}
     <slot name="after" :item="item" />
  </li>
</template>
<script>
export default {
  props: [ 'item' ]
}
</script>