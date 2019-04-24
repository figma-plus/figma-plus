<template lang="pug">
.scriptRunner
	h3 Code
	<prism-editor v-model="code" language="js" class="my-editor" @change='onCodeChange'/>
	.buttons
		button.primary(@click='runCode') Run
</template>

<script>
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import PrismEditor from "vue-prism-editor";

export default {
  data: () => ({
    code: "figmaPlus.showToast({message: 'Hello world!'})"
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
    margin-bottom: 8px;
    cursor: default;
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
}
</style>