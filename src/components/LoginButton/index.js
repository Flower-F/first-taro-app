import { Button } from '@tarojs/components'
import { useDispatch } from 'react-redux'

import { SET_IS_OPENED } from '../../constants'

export default function LoginButton(props) {
    const dispatch = useDispatch()

    return (
        <Button
            type="primary"
            onClick={() =>
                dispatch({ type: SET_IS_OPENED, payload: { isOpened: true } })
            }
        >
            普通登录
        </Button>
    )
}