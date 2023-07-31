// 封装一个函数：获取一个结果：当前是早上|上午|下午|晚上
export const getTime = () => {
    let timeMsg = ''
    // 通过内置函数Date
    const hours = new Date().getHours()
    if (hours > 6 && hours <= 9) {
        timeMsg = '早上'
    } else if (hours <= 12) {
        timeMsg = '中午'
    } else if (hours <= 18) {
        timeMsg = '下午'
    } else {
        timeMsg = '晚上'
    }
    return timeMsg
}
