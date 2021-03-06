import Taro from '@tarojs/taro'
import { useState } from 'react'
import { View, Form, Input, Button } from '@tarojs/components'
import { AtImagePicker } from 'taro-ui'
import { useDispatch } from 'react-redux'

import { LOGIN } from '../../constants'
import './index.scss'

export default function LoginForm(props) {
    const [formNickName, setFormNickName] = useState('')
    const [files, setFiles] = useState([])
    const [showAddBtn, setShowAddBtn] = useState(true)

    const dispatch = useDispatch()

    function onChange(files) {
        if (files.length > 0) {
            setShowAddBtn(false)
        } else {
            setShowAddBtn(true)
        }

        setFiles(files)
    }

    function onImageClick() {
        Taro.previewImage({
            urls: [props.files[0].url],
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()

        // 鉴权数据
        if (!formNickName || !files.length) {
            Taro.atMessage({
                type: 'error',
                message: '您还有内容没有填写！',
            })

            return
        }

        setShowAddBtn(true)

        // 提示登录成功
        Taro.atMessage({
            type: 'success',
            message: '恭喜您，登录成功！',
        })

        // 缓存在 storage 里面
        const userInfo = { avatar: files[0].url, nickName: formNickName }

        // 清空表单状态
        setFiles([])
        setFormNickName('')

        // //缓存在 storage 里面
        // await Taro.setStorage({ key: 'userInfo', data: userInfo })
        // dispatch({ type: SET_LOGIN_INFO, payload: userInfo })
        // // 关闭弹出层
        // dispatch({ type: SET_IS_OPENED, payload: { isOpened: false } })

        // 向后端发起登录请求
        dispatch({ type: LOGIN, payload: { userInfo } })
    }

    return (
        <View className="post-form">
            <Form onSubmit={handleSubmit}>
                <View className="login-box">
                    <View className="avatar-selector">
                        <AtImagePicker
                            length={1}
                            mode="scaleToFill"
                            count={1}
                            files={files}
                            showAddBtn={showAddBtn}
                            onImageClick={onImageClick}
                            onChange={onChange}
                        />
                    </View>
                    <Input
                        className="input-nickName"
                        type="text"
                        placeholder="点击输入昵称"
                        value={formNickName}
                        onInput={e => setFormNickName(e.target.value)}
                    />
                    <Button formType="submit" type="primary">
                        登录
                    </Button>
                </View>
            </Form>
        </View>
    )
}