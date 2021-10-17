import { SET_POSTS, SET_POST_FORM_IS_OPENED } from '../constants/'

const initState = {
    posts: [
        {
            title: '泰罗奥特曼',
            content: '泰罗是奥特之父和奥特之母唯一的亲生儿子',
            user: {
                nickName: '图雀酱',
                avatar: 'https://mywebsite-1305624698.cos.ap-guangzhou.myqcloud.com/images/avatar.png'
            }
        }
    ],
    isOpened: false
}

export default function post(state = initState, action) {
    switch (action.type) {
        case SET_POSTS: {
            const { post } = action.payload
            return { ...state, posts: state.posts.concat(post) }
        }

        case SET_POST_FORM_IS_OPENED: {
            const { isOpened } = action.payload
            return { ...state, isOpened }
        }

        default:
            return state
    }
}
