import { firebaseMutations, firebaseAction } from 'vuexfire'
import db from '~/plugins/firebase'
import moment from 'moment'

const commentRef = db.ref('comment')
const likeRef = db.ref('like');

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
    commentRef.push(text)
  }),
  addLike: firebaseAction((context) => {
    likeRef.push(moment().format('YYYY-MM-DD hh:mm:ss'))
  })
}