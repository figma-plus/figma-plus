<template lang="pug">
.scriptRunner
	h3 Code
	textarea.code-editor(type='textarea' spellcheck='false' ref='code' placeholder='Type code here...')
	.buttons
		a(@click='disableCode') Remove and disable code
		button.primary(@click='runCode') Refresh and Run
</template>

<script>
export default {
  mounted() {
    if (localStorage.getItem("figmaPlus-scriptRunnerCode") === null) {
      this.$refs.code.value = `figmaPlus.addCommand({
	label: "Hello world!",
	action: figmaPlus.showToast({message: 'Hello world!'})
})`;
    } else {
      this.$refs.code.value = localStorage.getItem(
        "figmaPlus-scriptRunnerCode"
      );
    }
  },
  methods: {
    runCode() {
      localStorage.setItem("figmaPlus-scriptRunnerCode", this.$refs.code.value);
      location.reload();
    },
    disableCode() {
      localStorage.removeItem("figmaPlus-scriptRunnerCode");
      this.$refs.code.value = "";
    }
  }
};
</script>

<style lang="scss">
.scriptRunner {
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
    justify-content: space-between;
    padding: 0px 8px;
    a {
      margin-right: 12px;
    }
  }
}
</style>