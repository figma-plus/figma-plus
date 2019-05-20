<template lang="pug">
.goodbye-modal
	.padded-content
		.onboarding-text
		p To all Figma Plus users,
		p Our goal with Figma Plus has always been to inspire the community to enhance their Figma experience. However, in order to achieve this, we had to bypass a few security measures that were designed to prevent third-party code from running on the Figma system.
		p Unfortunately, this has raised some concerns from the Figma team, as their top priority is to protect their users' data and security. After a thorough discussion on this matter, we have decided it would be best to cease development of the Figma Plus project. We will remove all public download links and related materials to the project.
		p It has been a great journey building and releasing Figma Plus to the world. When we began working on this side project 8 months ago, we had not imagined the impact it would bring to the community. With over 3900 active users and 3 community-built plugins published within just 2 weeks, we are incredibly grateful for all your support for our platform.
		p Despite the closing of Figma Plus, we promise to bring back our plugins in a better supported format in the future. If you are a developer building on Figma Plus, please contact us directly for next steps on how to continue your plugin development.
		p Thank you very much.
		p Jackie Chui, Ahmad Al Haddad and Mirko Santangelo
		p.uninstallation To uninstall Figma Plus, follow the instructions <a style='display: inline;' target="_blank" href='https://spectrum.chat/figma-plus/general/uninstallation-instructions~affad018-09bf-4322-853e-67759f1f71fa'>here</a>.
		.buttons
			button.primary(@click='closeModal') Done
</template>

<script>
export default {
  mounted() {
    localStorage.setItem("figmaPlus-goodbye", "true");
  },
  methods: {
    closeModal() {
      figmaPlus.hideUI("Good bye");
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

p {
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 150%;
}

.uninstallation {
  border-top: 1px solid #eaeaea;
  padding-top: 24px;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 24px;
}
</style>