import Taro from '@tarojs/taro'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '@tarojs/components'
import { SET_LOGIN_INFO } from '../../constants'

export default function LoginButton(props) {
    const [isLogout, setIsLogout] = useState(false)
    const dispatch = useDispatch()

    async function handleLogout() {
        setIsLogout(true)

        try {
            await Taro.removeStorage({ key: 'userInfo' })

            dispatch({
                type: SET_LOGIN_INFO,
                payload: {
                    avatar: '',
                    nickName: '',
                    userId: ''
                }
            })
        } catch (err) {
            console.log('removeStorage Error: ', err)
        }

        setIsLogout(false)
    }

    return (
        <Button
            type="secondary"
            full
            loading={isLogout}
            onClick={handleLogout}
        >
            退出登录
        </Button>
    )
}
