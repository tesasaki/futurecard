# CHA-CHAT!

![title-image](public/chachat-ogp.png)

## ここであそべます！

https://tesasaki.github.io/futurecard/#/talk

## FUTURE CARDは働き方の未来を考える発想促進ツールです

FUTURE CARDは、これからの働き方を考える際に発想促すために考案・開発したアプリです。
ワークショップや授業のアイスブレイクなど、様々なシーンでお使いいただけると幸いです。

本プロジェクトはGitHubでオープンソース(MIT)として公開しています。だれでも自由にフォーク・改変して発展させていくことが可能です。多言語版などにも今後取り組んでいきたいと考えています。
こんな機能が欲しい、こんな質問も追加したい、うまく動かない、などご意見やプルリクエストがありましたらお気軽にご連絡ください。

CHA-CHAT! 開発チーム：

* よこたさん
* Yuki (@yuneco)
* TETSUYA SASAKI (@tetsasaki)

Contact: https://pf.nekobooks.com/contact

## 開発者向け：ローカルで動かす・カスタマイズする

### 必要なもの

- [Node.js](https://nodejs.org/ja/)と[git](https://git-scm.com/downloads)をインストールしてください。  
Macの場合gitはインストール済みかもしれません。

- yarnをインストール

```sh
npm install -g yarn
```

※ 上記は簡易的なインストール方法です。詳細は[yarnの公式ページ](https://classic.yarnpkg.com/ja/docs/install/)を参照してください。

### リポジトリをクローンする

```sh
cd 好きなディレクトリ
git clone https://github.com/yuneco/cha-chat
```

### 実行する

プロジェクトのフォルダに移動

```sh
cd さっきのディレクトリ/cha-chat
```

初回だけ、以下を実行

```sh
yarn install
```

その後、

```sh
yarn run serve
```

↓こんな感じで表示されます

```sh
 DONE  Compiled successfully in 

Type checking in progress...

  App running at:
  - Local:   http://localhost:8080 
  - Network: http://192.168.0.132:8080

No type errors found
Version: typescript 3.8.3
Time: 624ms
```

表示されたURLにアクセス。「192.168.xxx.xxx」の方は同じネットワーク(WiFi)内のスマホでもアクセスできます。

### カスタマイズ

`/src/assets/cards.json`がカードの一覧です。

### License

MIT