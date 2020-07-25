const tags = require('../../meta/Personal.json').tag.EN
const pitch = require('../../meta/Personal.json').pitch.EN

export const EN_TRANSLATION = {
  label: {
    title: 'The Allen C.',
    exp: 'Experience',
    home: 'Home',
    contact: 'Contact',
    locale: 'Lang.',
    send: 'Send',
    email: 'Email',
    subject: 'Subject',
    name: 'Name',
    message: 'Your message...'
  },
  view: {
    contact: {
      title: "Contact me",
      desc: "Would you like to contact me?"
    },
    about: {
      desc: "More about me..."
    },
    exp: {
      title: "My experience",
      desc: "More about my experiences...",
      skill: "Skills"
    },
    home: {
      title: "Home",
      desc: "Welcome to my page!"
    }
  },
  meta: {
    link: {
      li: "Follow me on Linkedin!",
      gh: "Fork me on Github!"
    },
    name: "Allen D. Clark",
    location: "Tokyo",
    tags: tags,
    pitch: pitch
  }
}