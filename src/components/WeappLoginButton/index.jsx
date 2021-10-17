import Taro from '@tarojs/taro'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '@tarojs/components'

import './index.scss'
import { LOGIN } from '../../constants'

export default function LoginButton(props) {
    const [isLogin, setIsLogin] = useState(false)
    const dispatch = useDispatch()

    return (
        <Button
            onClick={() => Taro.getUserProfile({
                desc: '用于完善用户资料',
                success: async (res) => {
                    setIsLogin(true)
                    const { avatarUrl, nickName } = res.userInfo
                    // await props.setLoginInfo(avatarUrl, nickName)
                    // await Taro.setStorage({
                    //     key: 'userInfo',
                    //     data: { avatar: avatarUrl, nickName },
                    // })
                    const userInfo = { avatar: avatarUrl, nickName }

                    dispatch({
                        type: LOGIN,
                        payload: {
                            userInfo: userInfo
                        }
                    })
                    setIsLogin(false)
                }
            })}
            type="primary"
            className="login-button"
            loading={isLogin}
        >
            微信登录
        </Button>
    )
}
