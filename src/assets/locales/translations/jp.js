const tags = require('../../meta/Personal.json').tag.JP
const pitch = require('../../meta/Personal.json').pitch.JP

export const JP_TRANSLATION = {
  label: {
    title: 'The Allen C',
    exp: '経験',
    home: 'ホーム',
    contact: '連絡',
    locale: '地方',
    send: '送信',
    email: 'メール',
    subject: '件名',
    name: '名前',
    message: 'どうぞ… '
  },
  view: {
    contact: {
      title: "連絡",
      desc: "もっと質問があるなら、ご連絡させていただきませんか？"
    },
    about: {
      desc: "もっと拙者の事について…"
    },
    exp: {
      title: "私の経験",
      desc: "私の経験とは",
      skill: "スキル"
    },
    home: {
      title: "ホーム",
      desc: "ここへようこそ！"
    }
  },
  meta: {
    link: {
      li: "Linkedinで私に追加しましょうか？",
      gh: "Githubで私にフォークしましょうか？"
    },
    name: "クラーク・アレン",
    location: "東京",
    tags: tags,
    pitch: pitch
  }
}