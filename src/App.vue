<template>
  <div id="app">
    <Button/>
    <cn block="list" :mods="{ big: true, hz: 'test' }">
      <cn elem="item" :mods="{ test: true }" class="mix">
        <cn elem="item-text" tag="span">test</cn>
        <cn block="mix" elem="text" tag="span">hz</cn>
      </cn>
    </cn>
  </div>
</template>

<script>
import Button from '@/blocks/button/button';
export default {
  name: 'app',
  components: { Button },
}
</script>
