export function changeUserName( {username} ) {
    //console.log(username)
    return {
        type:'CHANGE_USER_NAME',
        username,
    }
}