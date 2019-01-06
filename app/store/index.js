import { firebaseMutations, firebaseAction } from 'vuexfire'
import db from '~/plugins/firebase'
import moment from 'moment'

const commentRef = db.ref('comment')
const likeRef = db.ref('like');
const dateFormat = 'YYYY-MM-DD hh:mm:ss'

export const state = () => ({
  likes: [],
  comments: []
})

export const mutations = {
  ...firebaseMutations
}

export const actions = {
  init: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('comments', commentRef, { wait: true })
    bindFirebaseRef('likes', likeRef, { wait: true })
  }),
  addComment: firebaseAction((context, text) => {
    commentRef.push().set({
      date: moment().format(dateFormat),
      comment: text
    })
  }),
  addLike: firebaseAction((context) => {
    likeRef.push().set({
      date: moment().format(dateFormat)
    })
  })
}

export const getters = {
  // コメントを新しい順で表示
  reverseComments: state => {
    let com = []
    for (const c in state.comments) {
      com.push(state.comments[c].comment)
    }
    com.reverse()
    return com
  }
}