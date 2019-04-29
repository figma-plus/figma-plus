<template lang="pug">
	.detail-screen
		.header
			.back-button.figma-icon.chevron-left(@click='backToList')
			.title
				.name {{ plugin.name }}
				.author {{ plugin.author}}
			button.button.primary(v-show='!installed' @click.stop='install') Install
			button.button(v-show='installed' @click.stop='uninstall') Uninstall
		.org-header(v-if='plugin.requiredOrgId')
			span.fake-org-image(v-if='orgImage && orgImage.length === 1') {{ orgImage }}
			img.org-image(v-if='orgImage && orgImage.length > 1' :src='orgImage')
			span(v-if='orgName') This plugin is only available to <b style='font-weight: 500'>{{ orgName }}</b> org members.
		.org-header(v-if='plugin.requiredTeamIds')
			span.fake-org-image(v-for='team in requiredTeams' key='team' v-if='!team.img_url') {{ team.name[0] }}
			img.org-image(v-for='team in requiredTeams' key='team' v-if='team.img_url' :src='team.img_url')
			span This plugin is only available to <span v-for='team in requiredTeams'><b style='font-weight: 500'>{{ team.name }}</b><span v-if='requiredTeams.indexOf(team) !== requiredTeams.length - 1'>, </span></span> team members.
		.content
			.section.image-section(v-if='plugin.images && plugin.images.length > 0' :class='{singleImage: plugin.images.length === 1}')
					carousel(ref='carousel' :watch-items='plugin.images' loop)
						carousel-item(v-for='image in plugin.images' :style="{ backgroundImage: 'url(' + image + ')' }")
					.v-carousel-nav.prev.figma-icon.chevron-left(@click="$refs.carousel.$emit('prev')")
					.v-carousel-nav.next.figma-icon.chevron-right(@click="$refs.carousel.$emit('next')")
			.section(v-if='plugin.description && plugin.description !== ""')
				.section-title Overview
				.description {{ plugin.description }}
			.section(v-if='plugin.instructions && plugin.instructions !== ""')
				.section-title How to use
				.instructions {{ plugin.instructions }}
			.section(v-if='plugin.updates && plugin.updates.length > 0')
				.section-title What's new
				.version(v-for='update in sortedUpdates' :key='update.version')
					.version-number Version {{ update.version }}
					.date {{ timeAgo.format(new Date(update.date)) }}
					.notes(v-if='update.notes !== ""') {{ update.notes }}
					.notes(v-else) No update notes.
				.show-all-versions-button(v-if='!showAllVersions && plugin.updates.length > 1' @click='showAllVersions = true') See all versions
			.section(v-if='installs > 0')
				.section-title Stats
				.stats {{ activeUsers || 0 }} active users
				.stats {{ installs }} total installs
			.section(v-if='plugin.github && plugin.github.includes("github.com/")')
				a.link(:href='plugin.github' target='_blank')
					.icon <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0.146484C6.55078 0.146484 7.08203 0.21875 7.59375 0.363281C8.10547 0.503906 8.58203 0.705078 9.02344 0.966797C9.46875 1.22852 9.87305 1.54297 10.2363 1.91016C10.6035 2.27344 10.918 2.67773 11.1797 3.12305C11.4414 3.56445 11.6426 4.04102 11.7832 4.55273C11.9277 5.06445 12 5.5957 12 6.14648C12 6.79102 11.9004 7.41211 11.7012 8.00977C11.5059 8.60742 11.2285 9.15625 10.8691 9.65625C10.5098 10.1562 10.0781 10.5957 9.57422 10.9746C9.07031 11.3496 8.51172 11.6387 7.89844 11.8418C7.88672 11.8457 7.86914 11.8496 7.8457 11.8535C7.82227 11.8535 7.80469 11.8535 7.79297 11.8535C7.69922 11.8535 7.625 11.8262 7.57031 11.7715C7.51562 11.7168 7.48828 11.6445 7.48828 11.5547C7.48828 11.2773 7.48828 11.0039 7.48828 10.7344C7.49219 10.4609 7.49414 10.1855 7.49414 9.9082C7.49414 9.70898 7.46484 9.50781 7.40625 9.30469C7.34766 9.10156 7.24219 8.93164 7.08984 8.79492C7.54297 8.74414 7.93945 8.65234 8.2793 8.51953C8.62305 8.38281 8.9082 8.19531 9.13477 7.95703C9.36523 7.71875 9.53711 7.42578 9.65039 7.07812C9.76758 6.72656 9.82617 6.3125 9.82617 5.83594C9.82617 5.53125 9.77539 5.24414 9.67383 4.97461C9.57227 4.70117 9.41797 4.45117 9.21094 4.22461C9.25391 4.11523 9.28516 4.00195 9.30469 3.88477C9.32422 3.76758 9.33398 3.65039 9.33398 3.5332C9.33398 3.38086 9.31641 3.23047 9.28125 3.08203C9.25 2.92969 9.20703 2.78125 9.15234 2.63672C9.13281 2.62891 9.11133 2.625 9.08789 2.625C9.06445 2.625 9.04297 2.625 9.02344 2.625C8.89844 2.625 8.76758 2.64648 8.63086 2.68945C8.49414 2.72852 8.35742 2.7793 8.2207 2.8418C8.08789 2.90039 7.95898 2.9668 7.83398 3.04102C7.70898 3.11523 7.59766 3.18555 7.5 3.25195C7.01172 3.11523 6.51172 3.04688 6 3.04688C5.48828 3.04688 4.98828 3.11523 4.5 3.25195C4.40234 3.18555 4.29102 3.11523 4.16602 3.04102C4.04102 2.9668 3.91016 2.90039 3.77344 2.8418C3.64062 2.7793 3.50391 2.72852 3.36328 2.68945C3.22656 2.64648 3.09766 2.625 2.97656 2.625C2.95703 2.625 2.93555 2.625 2.91211 2.625C2.88867 2.625 2.86719 2.62891 2.84766 2.63672C2.79297 2.78125 2.74805 2.92969 2.71289 3.08203C2.68164 3.23047 2.66602 3.38086 2.66602 3.5332C2.66602 3.65039 2.67578 3.76758 2.69531 3.88477C2.71484 4.00195 2.74609 4.11523 2.78906 4.22461C2.58203 4.45117 2.42773 4.70117 2.32617 4.97461C2.22461 5.24414 2.17383 5.53125 2.17383 5.83594C2.17383 6.3125 2.23047 6.72461 2.34375 7.07227C2.46094 7.41992 2.63281 7.71484 2.85938 7.95703C3.08984 8.19531 3.375 8.38281 3.71484 8.51953C4.05469 8.65625 4.45117 8.75 4.9043 8.80078C4.79102 8.90234 4.70312 9.02539 4.64062 9.16992C4.58203 9.31055 4.54297 9.45508 4.52344 9.60352C4.41797 9.6543 4.30664 9.69336 4.18945 9.7207C4.07227 9.74805 3.95508 9.76172 3.83789 9.76172C3.58789 9.76172 3.38086 9.70312 3.2168 9.58594C3.05273 9.46875 2.90625 9.30859 2.77734 9.10547C2.73047 9.03125 2.67383 8.95703 2.60742 8.88281C2.54102 8.80859 2.46875 8.74219 2.39062 8.68359C2.3125 8.625 2.22852 8.57812 2.13867 8.54297C2.04883 8.50391 1.95508 8.48438 1.85742 8.48438C1.8418 8.48438 1.81836 8.48633 1.78711 8.49023C1.75586 8.49023 1.72461 8.49414 1.69336 8.50195C1.66602 8.50977 1.64062 8.52148 1.61719 8.53711C1.59375 8.55273 1.58203 8.57227 1.58203 8.5957C1.58203 8.64258 1.60938 8.68945 1.66406 8.73633C1.71875 8.7793 1.76367 8.8125 1.79883 8.83594L1.81641 8.84766C1.90234 8.91406 1.97656 8.97852 2.03906 9.04102C2.10547 9.09961 2.16406 9.16406 2.21484 9.23438C2.26562 9.30078 2.31055 9.375 2.34961 9.45703C2.39258 9.53516 2.4375 9.625 2.48438 9.72656C2.61719 10.0312 2.80273 10.2539 3.04102 10.3945C3.2832 10.5312 3.57031 10.5996 3.90234 10.5996C4.00391 10.5996 4.10547 10.5938 4.20703 10.582C4.30859 10.5664 4.41016 10.5488 4.51172 10.5293V11.5488C4.51172 11.6426 4.48242 11.7168 4.42383 11.7715C4.36914 11.8262 4.29492 11.8535 4.20117 11.8535C4.18945 11.8535 4.17188 11.8535 4.14844 11.8535C4.12891 11.8496 4.11328 11.8457 4.10156 11.8418C3.48828 11.6426 2.92969 11.3555 2.42578 10.9805C1.92188 10.6016 1.49023 10.1621 1.13086 9.66211C0.771484 9.1582 0.492188 8.60742 0.292969 8.00977C0.0976563 7.41211 0 6.79102 0 6.14648C0 5.5957 0.0703125 5.06445 0.210938 4.55273C0.355469 4.04102 0.558594 3.56445 0.820312 3.12305C1.08203 2.67773 1.39453 2.27344 1.75781 1.91016C2.125 1.54297 2.5293 1.22852 2.9707 0.966797C3.41602 0.705078 3.89453 0.503906 4.40625 0.363281C4.91797 0.21875 5.44922 0.146484 6 0.146484Z" fill="#30C2FF"/></svg>
					.link-text View on Github
				a.link(:href='plugin.github + "/issues/new"' target='_blank')
					.icon <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.4375 14C6.83138 14 6.25033 13.9225 5.69434 13.7676C5.13379 13.6126 4.6097 13.3916 4.12207 13.1045C3.63444 12.8219 3.19238 12.4801 2.7959 12.0791C2.39486 11.6826 2.05306 11.2406 1.77051 10.7529C1.4834 10.2653 1.26237 9.74121 1.10742 9.18066C0.952474 8.62467 0.875 8.04362 0.875 7.4375C0.875 6.83138 0.952474 6.24805 1.10742 5.6875C1.26237 5.13151 1.4834 4.6097 1.77051 4.12207C2.05306 3.63444 2.39486 3.1901 2.7959 2.78906C3.19238 2.39258 3.63444 2.05078 4.12207 1.76367C4.6097 1.48112 5.13379 1.26237 5.69434 1.10742C6.25033 0.952474 6.83138 0.875 7.4375 0.875C8.04362 0.875 8.62695 0.952474 9.1875 1.10742C9.74349 1.26237 10.2653 1.48112 10.7529 1.76367C11.2406 2.05078 11.6849 2.39258 12.0859 2.78906C12.4824 3.1901 12.8242 3.63444 13.1113 4.12207C13.3939 4.6097 13.6126 5.13151 13.7676 5.6875C13.9225 6.24805 14 6.83138 14 7.4375C14 8.04362 13.9225 8.62467 13.7676 9.18066C13.6126 9.74121 13.3939 10.2653 13.1113 10.7529C12.8242 11.2406 12.4824 11.6826 12.0859 12.0791C11.6849 12.4801 11.2406 12.8219 10.7529 13.1045C10.2653 13.3916 9.74349 13.6126 9.1875 13.7676C8.62695 13.9225 8.04362 14 7.4375 14ZM7.4375 1.75C6.91797 1.75 6.41667 1.81836 5.93359 1.95508C5.44596 2.0918 4.99251 2.2832 4.57324 2.5293C4.14941 2.77539 3.76432 3.07161 3.41797 3.41797C3.07161 3.76432 2.77539 4.14714 2.5293 4.56641C2.2832 4.99023 2.0918 5.44368 1.95508 5.92676C1.81836 6.40983 1.75 6.91341 1.75 7.4375C1.75 7.95703 1.81836 8.45833 1.95508 8.94141C2.0918 9.42904 2.2832 9.88249 2.5293 10.3018C2.77539 10.7256 3.07161 11.1107 3.41797 11.457C3.76432 11.8034 4.14941 12.0996 4.57324 12.3457C4.99251 12.5918 5.44596 12.7832 5.93359 12.9199C6.41667 13.0566 6.91797 13.125 7.4375 13.125C7.96159 13.125 8.46517 13.0566 8.94824 12.9199C9.43132 12.7832 9.88477 12.5918 10.3086 12.3457C10.7279 12.0996 11.1107 11.8034 11.457 11.457C11.8034 11.1107 12.0996 10.7256 12.3457 10.3018C12.5918 9.88249 12.7832 9.42904 12.9199 8.94141C13.0566 8.45833 13.125 7.95703 13.125 7.4375C13.125 6.91797 13.0566 6.41439 12.9199 5.92676C12.7832 5.44368 12.5918 4.99023 12.3457 4.56641C12.0996 4.14714 11.8034 3.76432 11.457 3.41797C11.1107 3.07161 10.7279 2.77539 10.3086 2.5293C9.88477 2.2832 9.43132 2.0918 8.94824 1.95508C8.46517 1.81836 7.96159 1.75 7.4375 1.75ZM7.875 10.5H7L7 6.125H7.875L7.875 10.5ZM7.875 5.25H7V4.375H7.875V5.25Z" fill="#30C2FF"/></svg>
					.link-text Report a bug
			.fillerFooter(v-if='plugin.requiredOrgId || plugin.requiredTeamIds')
</template>

<script>
import { Carousel, CarouselItem } from "vue-l-carousel";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addLocale(en);

export default {
  props: ["plugin", "installed", "pluginStats"],
  data: () => ({
    timeAgo: new TimeAgo("en-US"),
    showAllVersions: false
  }),
  components: {
    carousel: Carousel,
    "carousel-item": CarouselItem
  },
  methods: {
    backToList() {
      this.$emit("backToList");
      this.showAllVersions = false;
    },
    install() {
      this.$emit("install", this.plugin);
    },
    uninstall() {
      this.$emit("uninstall", this.plugin);
    }
  },
  computed: {
    installs() {
      return this.pluginStats.find(plugin => plugin.id === this.plugin.id)
        ? this.pluginStats.find(plugin => plugin.id === this.plugin.id).installs
        : 0;
    },
    activeUsers() {
      return this.pluginStats.find(plugin => plugin.id === this.plugin.id)
        ? this.pluginStats.find(plugin => plugin.id === this.plugin.id)
            .activeUsers
        : 0;
    },
    requiredTeams() {
      if (this.plugin.requiredTeamIds) {
        return this.plugin.requiredTeamIds.map(
          teamId => figmaPlus.teams[teamId]
        );
      } else return false;
    },
    orgImage() {
      if (this.plugin.requiredOrgId) {
        const org = figmaPlus.orgs[this.plugin.requiredOrgId];
        return org.img_url ? org.img_url : org.name[0];
      } else return false;
    },
    orgName() {
      if (this.plugin.requiredOrgId) {
        return figmaPlus.orgs[this.plugin.requiredOrgId].name;
      } else return false;
    },
    latestUpdate() {
      return this.plugin.updates.sort((a, b) => {
        a = new Date(a.date);
        b = new Date(b.date);
        return a > b ? -1 : a < b ? 1 : 0;
      })[0];
    },
    sortedUpdates() {
      let updates = this.plugin.updates.sort((a, b) => {
        a = new Date(a.date);
        b = new Date(b.date);
        return a > b ? -1 : a < b ? 1 : 0;
      });
      return this.showAllVersions ? updates : [updates[0]];
    }
  }
};
</script>

<style lang="scss">
.detail-screen {
  width: 460px;
  height: 70vh;
  transition: transform 0.2s ease;
  transform: translateX(100%);
  background: #fcfcfc;
  position: absolute;
  top: 0;
  &.detailScreenOn {
    transform: translateX(0px);
  }
  .header {
    height: 48px;
    border-bottom: 1px solid #d4d4d4;
    display: flex;
    align-items: center;
    padding-left: 18px;
    padding-right: 16px;
  }
  .org-header {
    border-bottom: 1px solid #d4d4d4;
    display: flex;
    align-items: center;
    padding: 6px 18px;
  }
  .org-header + .content {
    height: calc(100% - 70px);
  }
  .back-button.figma-icon.chevron-left::after {
    font-size: 18px;
    height: 18px;
    width: 18px;
    order: 1;
    color: #333;
    padding-top: 4px;
  }
  .fake-org-image,
  .org-image {
    min-width: 24px;
    width: 24px;
    height: 24px;
    margin-right: 6px;
    line-height: 24px;
    font-size: 12px;
    color: #fff;
    border-radius: 100%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .fake-org-image {
    background: rgb(255, 109, 48);
  }
  .title {
    order: 2;
    margin-left: 12px;
  }
  .name {
    display: inline-block;
    color: #333444;
    font-size: 14px;
  }
  .author {
    margin-top: 3px;
    color: #aaa;
  }
  .content {
    padding: 16px 24px;
    height: 546px;
    max-height: calc(70vh - 32px);
    overflow-y: auto;
    box-sizing: border-box;
  }
  .section {
    margin-bottom: 24px;
    &.image-section {
      margin-bottom: 8px;
      position: relative;
    }
    &.singleImage {
      margin-bottom: 24px;
    }
  }
  .v-carousel {
    overflow: hidden;
    margin: 0 24px;
    position: relative;
    .v-carousel-nav {
      display: none !important;
    }
  }
  .v-carousel-item {
    height: 228px;
    float: left;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .v-carousel-dots {
    clear: both;
    text-align: center;
    padding-top: 8px;
  }
  .v-carousel-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin: 0 5px;
    border-radius: 4px;
    background: #aaa;
    &.active {
      background-color: #333;
    }
  }
  .v-carousel-nav {
    position: absolute;
    font-family: "FigmaIcons";
    width: 20px;
    height: 20px;
    top: calc(50% + -20px);
    color: #aaa;
    &::after {
      font-size: 18px !important;
    }
  }
  .prev {
    left: -8px;
  }
  .next {
    right: -8px;
  }
  .description,
  .instructions,
  .stats {
    margin-top: 8px;
    color: #aaa;
  }
  .section-title {
    font-size: 14px;
    color: #333;
  }
  button {
    order: 3;
    margin-left: auto;
  }
  .link {
    display: inline;
    margin-right: 24px;
    div,
    svg {
      display: inline;
    }
    .icon {
      position: relative;
      top: 3px;
    }
    .link-text {
      margin-left: 6px;
    }
  }
}
.singleImage {
  .v-carousel .v-carousel-dots,
  .v-carousel-nav {
    display: none;
  }
}
.version {
  position: relative;
  color: #aaa;
  margin-top: 8px;
  margin-bottom: 16px;
  .version-number {
    color: #333;
  }
  .date {
    position: absolute;
    top: 0;
    right: 0;
  }
  .notes {
    margin-top: 8px;
  }
}

.show-all-versions-button {
  color: #30c2ff;
  margin-top: -8px;
  cursor: pointer;
}

.fillerFooter {
  height: 40px;
}
</style>
