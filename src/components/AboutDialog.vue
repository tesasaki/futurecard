<template>
  <transition name="fade">
    <div class="about-dialog-root">
      <div class="dialog">
        <div class="main">
          <h1>About</h1>
          <div class="subtitle">働き方の未来を考える</div>
          <h2>どんなゲーム？</h2>
          <p>
            フューチャーカードは働き方の未来を考えるアイデアカードです。
          </p>

          <h2>使い方</h2>
          <p>
            個人や複数人でのアイデア出しに。
          </p>
          <ol>
            <li>「シーン」「課題」「テクノロジー」「視点」のカードをシャッフル。</li>
            <li>20秒でまず最初に思いついた解決のアイデアをメモします。</li>
            <li>こんなことができたらもっと良いのに、というアイデアをさらに考えます。<br />
              4枚のカードすべてを使い切る必要はありません。次々にシャッフルしてアイデアを広げます。
            </li>
          </ol>

          <h2>ワークショップでの使い方</h2>
          <p>
            アイスブレイクから、具体検討まで、いろいろな場面で活用してもらえると嬉しいです。
          </p>

          <h2>ライセンス</h2>
          <p>
            このプロジェクトは<a href="https://github.com/tesasaki/futurecard" target="_blank">GitHubのリポジトリ</a>でOSS（オープンソースソフトウエア）として公開されており、誰でも自由に利用・改変することが許諾されています。
            このプロジェクトの背景や活用に関しては上記のリポジトリの説明をご参照ください。
          </p>
        </div>
        <div class="btns">
          <button class="close" @click="$emit('close')">とじる</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  props: {},
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/global.scss';
.about-dialog-root {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff88;
  backdrop-filter: blur(10px);
  padding: 5%;
  opacity: 1;
  z-index: 1;
}
.dialog {
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 25px #00000040;
  overflow: hidden;
  height: 100%;
  .main {
    position: relative;
    padding: 10px 30px;
    height: calc(100% - 60px);
    overflow-y: scroll;
    text-align: left;
    h1 {
      margin-bottom: 0;
      text-align: center;
    }
    .subtitle {
      font-size: 0.8em;
      text-align: center;
      position: relative;
      top: -5px;
    }
  }
  .btns {
    position: relative;
    background-color: $title-color;
    height: 60px;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    .close {
      background-color: transparent;
      border: 2px solid #fff;
      color: #fff;
      font-size: 14pt;
      border-radius: 8px;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  .dialog {
    transition: transform .5s;
  }
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  .dialog {
    transform: scale(0.7);
  }
}
</style>
