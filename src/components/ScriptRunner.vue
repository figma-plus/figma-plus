<template lang="pug">
.scriptRunner
	h3 Code
	<prism-editor v-model="code" language="js" class="my-editor" @change='onCodeChange'/>
	.buttons(:class="{ 'space-between': isDesktop }")
		a(v-if='isDesktop' @click='showConsole') Show console
		button.primary(@click='runCode') Run
</template>

<script>
import Prism from "prismjs";
import PrismEditor from "vue-prism-editor";

export default {
  data: () => ({
    code: "figmaPlus.showToast({message: 'Hello world!'})",
    isDesktop: figmaPlus.isDesktop
  }),
  components: {
    PrismEditor
  },
  mounted() {
    if (localStorage.getItem("figmaPlus-scriptRunnerCode") === null) {
      this.code = `figmaPlus.showToast({message: 'Hello world!'})`;
    } else {
      this.code = localStorage.getItem("figmaPlus-scriptRunnerCode");
    }
  },
  methods: {
    onCodeChange(code) {
      localStorage.setItem("figmaPlus-scriptRunnerCode", code);
    },
    runCode() {
      eval(this.code);
    },
    showConsole() {
      __figmaDesktop.postMessage("openDevTools", { mode: "bottom" });
    }
  }
};
</script>

<style lang="scss">
.scriptRunner {
  display: flex;
  flex-direction: column;
  .prism-editor__code {
    height: 300px;
    background-color: transparent;
    border: 1px solid transparent;
    color: #333;
    margin: 1px 0;
    padding: 8px;
    box-sizing: border-box;
    background-clip: padding-box;
    border-radius: 2px;
    margin-bottom: 16px;
    cursor: default;
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
    &:focus {
      border: 1px solid #18a0fb;
      outline: 1px solid #18a0fb;
      outline-offset: -2px;
    }
  }
  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0 8px;
  }

  .space-between {
    justify-content: space-between;
  }
}
</style>