import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { syncUserComments } from "../../redux/user"
import MyComment from "../../components/my_comment/MyComment"
import { user } from "../../mockData"

const MyComments = () => {
    const myComments = useSelector(state => state.user.comments)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(syncUserComments())
    }, [dispatch])

    return (
        <div style={{margin: 40}}>
            {
            myComments.map(myComment => (
                <MyComment key={myComment.commentId} myComment={myComment} />
            ))
            }
        </div>
    )
}

export default MyComments