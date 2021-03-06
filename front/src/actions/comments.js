// action type fetchComments
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
// action creator fetchComments
export const fetchComments = () => ({
  type : FETCH_COMMENTS,
})

//action type saveComments
export const SAVE_COMMENTS = 'SAVE_COMMENTS';
// action creator saveComments
export const saveComments = (data) => ({
  type: SAVE_COMMENTS,
  data
})

//action type deleteComment
export const DELETE_COMMENT = 'DELETE_COMMENT';
//action creator deleteComment
export const deleteComment = (commentById) => ({
  type: DELETE_COMMENT,
  id: commentById
})