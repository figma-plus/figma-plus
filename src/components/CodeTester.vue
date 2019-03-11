<template lang="pug">
.codeTester
	textarea.code-editor(type='textarea' spellcheck='false' ref='code')
	.buttons
		a(@click='disableCode') Remove and disable code
		button.primary(@click='runCode') Refresh and Run
</template>

<script>
export default {
  mounted() {
    if (localStorage.getItem("pluginCodeTesterCode") === null) {
      this.$refs.code.value = `figmaPlus.createPluginsMenuItem(
    'Hello world!',
    () => alert('Hello world!')
);`;
    } else {
      this.$refs.code.value = localStorage.getItem("pluginCodeTesterCode");
    }
  },
  methods: {
    runCode() {
      localStorage.setItem("pluginCodeTesterCode", this.$refs.code.value);
      location.reload();
    },
    disableCode() {
      localStorage.removeItem("pluginCodeTesterCode");
      this.$refs.code.value = "";
    }
  }
};
</script>

<style lang="scss">
.codeTester {
  display: flex;
  flex-direction: column;
  textarea.code-editor {
    display: block;
    font-family: monospace;
    width: 100%;
    resize: none;
    height: 400px;
    padding: 6px;
    margin-bottom: 12px;
  }
  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    a {
      margin-right: 12px;
    }
  }
}
</style>