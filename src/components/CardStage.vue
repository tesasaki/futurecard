<template>
  <div class="card-stage-root">
    <div class="card-box scene-card-box" :style="{filter: `drop-shadow(0 5px 15px ${cardState.sceneCard.shadow})`}">
      <div class="box-title" :class="{flipping: cardState.sceneCard.isFlipping}" :style="{
        backgroundColor: cardState.sceneCard.color
      }">どんなシーンで？</div>
      <TalkCard
        :text="cardState.sceneCard.text"
        :bgcolor="cardState.sceneCard.color"
        :isOpen="cardState.sceneCard.isOpen"
        @click="clicksceneCard"
      />
    </div>
    <div class="card-box issue-card-box" :style="{filter: `drop-shadow(0 5px 15px ${cardState.issueCard.shadow})`}">
      <div class="box-title" :class="{flipping: cardState.issueCard.isFlipping}" :style="{
        backgroundColor: cardState.issueCard.color
      }">どんな課題を？</div>
      <TalkCard
        :text="cardState.issueCard.text"
        :bgcolor="cardState.issueCard.color"
        :isOpen="cardState.issueCard.isOpen"
        @click="clickIssueCard"
      />
    </div>
    <div class="card-box technology-card-box" :style="{filter: `drop-shadow(0 5px 15px ${cardState.technologyCard.shadow})`}">
      <div class="box-title" :class="{flipping: cardState.technologyCard.isFlipping}" :style="{
        backgroundColor: cardState.technologyCard.color
      }">どんなテクノロジーを活用して？</div>
      <TalkCard
        :text="cardState.technologyCard.text"
        :bgcolor="cardState.technologyCard.color"
        :isOpen="cardState.technologyCard.isOpen"
        @click="clickTechnologyCard"
      />
    </div>
    <div class="card-box technique-card-box" :style="{filter: `drop-shadow(0 5px 15px ${cardState.techniqueCard.shadow})`}">
      <div class="box-title" :class="{flipping: cardState.techniqueCard.isFlipping}" :style="{
        backgroundColor: cardState.techniqueCard.color
      }">アイデアを考える視点</div>
      <TalkCard
        :text="cardState.techniqueCard.text"
        :bgcolor="cardState.techniqueCard.color"
        :isOpen="cardState.techniqueCard.isOpen"
        @click="clicktechniqueCard"
      />
    </div>
    <div class="control">
      <button class="cancel-button" @click="closeCard" title="change cards" v-show="isCardOpen"></button>
      <button class="ok-button" @click="startCount" title="start talk" v-show="isAllCardOpen && !timerState.isActive"></button>
      <!-- <button class="change-button" @click="startCount" title="change cards" v-show="timerState.isActive"></button> -->
      <CountDown
        class="timer"
        :class="{popping: timerState.isPopping}"
        v-show="timerState.isActive"
        :time="timerState.time"
        @sec="timerState.time -= 1"
        @retry="startCount" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from '@vue/composition-api'
import TalkCard from '@/components/TalkCard.vue'
import { SCENE_COLOR, ISSUE_COLOR, TECHNOLOGY_COLOR, TECHNIQUE_COLOR, SCENE_SHADOW, ISSUE_SHADOW, TECHNOLOGY_SHADOW, TECHNIQUE_SHADOW } from '@/Colors'
import cards from '../assets/cards.json'
import { randomFrom, wait } from '@/lib/utils'
import CountDown from '@/components/CountDown.vue'

export default defineComponent({
  components: {
    TalkCard,
    CountDown
  },
  props: {},
  setup () {
    const cardState = reactive({
      sceneCard: {
        text: '100にん//あつまったら//できそうなこと',
        color: SCENE_COLOR,
        shadow: SCENE_SHADOW,
        isOpen: false,
        isFlipping: false
      },
      issueCard: {
        text: 'ゆ〜っくり//しゃべってみよう',
        color: ISSUE_COLOR,
        shadow: ISSUE_SHADOW,
        isOpen: false,
        isFlipping: false
      },
      technologyCard: {
        text: 'だれに//たいして',
        color: TECHNOLOGY_COLOR,
        shadow: TECHNOLOGY_SHADOW,
        isOpen: false,
        isFlipping: false
      },
      techniqueCard: {
        text: 'いつが//いいかな',
        color: TECHNIQUE_COLOR,
        shadow: TECHNIQUE_SHADOW,
        isOpen: false,
        isFlipping: false
      }
    })
    const timerState = reactive({
      time: 0,
      isActive: false,
      isPopping: false
    })

    const isCardOpen = computed(() => cardState.sceneCard.isOpen || cardState.issueCard.isOpen || cardState.technologyCard.isOpen || cardState.techniqueCard.isOpen)
    const isAllCardOpen = computed(() => cardState.sceneCard.isOpen && cardState.issueCard.isOpen && cardState.technologyCard.isOpen && cardState.techniqueCard.isOpen)
    const isTimeup = computed(() => timerState.isActive && timerState.time === 0)

    const openCard = async (isScene = true, isIssue = true, isTechnology = true, isTechnique = true) => {
      if (isScene) {
        cardState.sceneCard.text = randomFrom(cards.scenes)
        cardState.sceneCard.isOpen = true
        cardState.sceneCard.isFlipping = true
        await wait(300)
        cardState.sceneCard.isFlipping = false
        await wait(250)
      }
      if (isIssue) {
        cardState.issueCard.text = randomFrom(cards.issues)
        cardState.issueCard.isOpen = true
        cardState.issueCard.isFlipping = true
        await wait(300)
        cardState.issueCard.isFlipping = false
        await wait(250)
      }
      if (isTechnology) {
        cardState.technologyCard.text = randomFrom(cards.technologies)
        cardState.technologyCard.isOpen = true
        cardState.technologyCard.isFlipping = true
        await wait(300)
        cardState.technologyCard.isFlipping = false
        await wait(250)
      }
      if (isTechnique) {
        cardState.techniqueCard.text = randomFrom(cards.techniques)
        cardState.techniqueCard.isOpen = true
        cardState.techniqueCard.isFlipping = true
        await wait(300)
        cardState.techniqueCard.isFlipping = false
        await wait(250)
      }
    }

    const closeCard = async (isScene = true, isIssue = true, isTechnology = true, isTechnique = true) => {
      if (isScene && cardState.sceneCard.isOpen) {
        cardState.sceneCard.isOpen = false
        cardState.sceneCard.isFlipping = true
        await wait(300)
        cardState.sceneCard.isFlipping = false
      }
      if (isIssue && cardState.issueCard.isOpen) {
        cardState.issueCard.isOpen = false
        cardState.issueCard.isFlipping = true
        await wait(300)
        cardState.issueCard.isFlipping = false
      }
      if (isTechnology && cardState.technologyCard.isOpen) {
        cardState.technologyCard.isOpen = false
        cardState.technologyCard.isFlipping = true
        await wait(300)
        cardState.technologyCard.isFlipping = false
      }
      if (isTechnique && cardState.techniqueCard.isOpen) {
        cardState.techniqueCard.isOpen = false
        cardState.techniqueCard.isFlipping = true
        await wait(300)
        cardState.techniqueCard.isFlipping = false
      }
      if (!isAllCardOpen.value) {
        timerState.time = 0
        timerState.isActive = false
      }
    }

    const setNewCard = async () => {
      if (isCardOpen.value) {
        await closeCard()
        await wait(500)
      }
      await openCard()
    }

    const clickSceneCard = () => {
      if (cardState.sceneCard.isOpen) { return }
      openCard(true, false)
    }

    const clickIssueCard = () => {
      if (cardState.issueCard.isOpen) { return }
      openCard(false, true)
    }

    const clickTechnologyCard = () => {
      if (cardState.technologyCard.isOpen) { return }
      openCard(true, false)
    }

    const clickTechniqueCard = () => {
      if (cardState.techniqueCard.isOpen) { return }
      openCard(false, true)
    }

    const startCount = async () => {
      timerState.time = 20
      timerState.isActive = true
      await wait(0)
      timerState.isPopping = true
      await wait(250)
      timerState.isPopping = false
    }

    return {
      cardState,
      isCardOpen,
      isAllCardOpen,
      isTimeup,
      setNewCard,
      openCard,
      closeCard,
      clickSceneCard,
      clickIssueCard,
      clickTechnologyCard,
      clickTechniqueCard,
      timerState,
      startCount
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/global.scss';

.card-stage-root {
  position: relative;
  height: 100%;
}
.card-box {
  position: relative;
  height: calc(50% - 100px);
  width: calc(60% - 50px);
  padding: 20px 10%;
  transform-style: preserve-3d;
  perspective: 1000px;
  text-align: left;
  .box-title {
    position: relative;
    display: inline-block;
    height: 20px;
    font-size: 14px;
    padding: 1px 10px;
    border-radius: 4px;
    color: #fff;
    left: -10px;
    top: 5px;
    z-index: 1;
    transition: transform 0.2s ease-in;
    &.flipping {
      transition-timing-function: ease-out;
      transform: translateY(-20px);
    }
  }
}
.control {
  position: absolute;
  width: 100%;
  height: 50px;
  left: 0;
  top: calc(100% - 15px);
  z-index: 1;
  text-align: center;
  pointer-events: none;
  filter: drop-shadow(0 0 1px #fff000);
  * {
    pointer-events: auto;
  }
  button {
    display: inline-block;
    width: 60px;
    height: 60px;
    border: 4px solid $title-color;
    border-radius: 30px;
    background-color: #fff;
    &:active {
      transform: translateY(4px);
    }
    &+button {
      margin-left: 8px;
    }
    &.change-button {
      background-image: url(../assets/change.svg);
      background-size: 80%;
      background-position: center;
      background-repeat: no-repeat;
    }
    &.cancel-button {
      background-image: url(../assets/cancel.svg);
      background-size: 60%;
      background-position: center;
      background-repeat: no-repeat;
    }
    &.ok-button {
      background-image: url(../assets/ok.svg);
      background-size: 67%;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  .timer {
    position: absolute;
    top: 25px;
    right: 10px;
    transition: transform 0.2s ease-in;
    &.popping {
      transform: translateY(-10px);
    }
  }
}
</style>
