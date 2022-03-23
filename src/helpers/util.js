function dayDate(datsStr) {
    let getDate = typeof  datsStr === "object" ? datsStr : new Date(datsStr)
    let time = getDate.getTime()
    let now = Date.now()
    let space = now - time
    let str = ''
    switch (space) {
        case  space < 6000:
            str = "刚刚"
            break
        case space < 1000*3600:
            str = Math.floor(space/60000) + '分钟前'
            break
        case space < 1000*3600*24:
            str = Math.floor(space/(1000*3600)) + '小时前'
            break
        default:
            str = Math.floor(space/(1000*3600*24)) + '天前'
    }
    return str
}
//设置vue插件
export default {
    install(Vue){
        Vue.prototype.dayDate = dayDate
    }
}


