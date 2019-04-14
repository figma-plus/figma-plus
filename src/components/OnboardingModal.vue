<template lang="pug">
.onboarding-modal
	img(src='https://docs.figmaplus.com/images/pluginManagerInFileBrowser.png' width='376px')
	.padded-content
		.onboarding-text You can browse and install plugins by clicking on the Figma Plus icon next to Notifications in the top right corner of your File Browser.
		a(target="_blank" href='https://docs.figmaplus.com/#/userGuide/manager').link Learn more...
		.buttons
			button.primary(@click='closeModal') Done
</template>

<script>
export default {
  mounted() {
    localStorage.setItem("figmaPlus-onboarded", "true");
  },
  methods: {
    closeModal() {
      figmaPlus.hideUI("Welcome to Figma Plus");
    }
  }
};
</script>

<style lang="scss" scoped>
.padded-content {
  margin: 12px;
}

.onboarding-text {
  margin-top: 24px;
}

.link {
  display: inline-block;
  margin-top: 12px;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 24px;
}
</style>