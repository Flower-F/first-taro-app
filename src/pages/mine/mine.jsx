import Taro from '@tarojs/taro'
import { useEffect } from 'react'
import { View } from '@tarojs/components'
import { Header, Footer } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { SET_LOGIN_INFO } from '../../constants'

import './mine.scss'

export default function Mine() {
    const dispatch = useDispatch()
    const nickName = useSelector(state => state.user.nickName)
    const isLogged = !!nickName

    useEffect(() => {
        async function getStorage() {
            try {
                const { data } = await Taro.getStorage({ key: 'userInfo' })

                const { nickName, avatar, _id } = data

                dispatch({
                    type: SET_LOGIN_INFO,
                    payload: { nickName, avatar, userId: _id }
                })
            } catch (err) {
                console.log('getStorage Error: ', err)
            }
        }

        if (!isLogged) {
            getStorage()
        }
    })

    return (
        <View className="mine">
            <Header />
            <Footer />
        </View>
    )
}