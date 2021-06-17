import React from "react"
import { useSelector } from "react-redux"
import MyComment from "../../components/my_comment/MyComment"

const MyComments = () => {
    const myComments = useSelector(state => state.user.comments)
    return (
        <div style={{margin: 40}}>
            {React.useMemo(() => myComments.map(myComment => (
                <MyComment key={myComment.commentId} myComment={myComment} />
            )), [myComments])}
        </div>
    )
}

export default MyComments