const Document = function Document() {

}

catvm.safefunction(Document);

Object.defineProperties(Document.prototype, {
    [Symbol.toStringTag]: {
        value: 'Document',
        configurable: true,
    }
})
////////////////原型-补环境-start////////////////

////////////////原型-补环境-end//////////////////
////////////////实例-补环境-start////////////////
document = {}
document.__proto__ = Document.prototype
document.cookie = ''
document.referrer = 'https://www.douyin.com/search/%E8%BD%A6%E4%BF%9D%E7%BD%97?aid=0bba63fe-136f-4dfd-aa22-e9430f362521&enter_from=live_detail&source=search_history'
document.getElementById = function getElementById(id) {
    // 用id匹配当前环境已有的元素
    return null
}
catvm.safefunction(document.getElementById)

// 事件方法
document.addEventListener = function addEventListener(type, listener, useCapture) {

}
catvm.safefunction(document.addEventListener)

// 补一个 document.createElement("div") 环境
document.createElement = function createElement(tagName) {
    let tagname = tagName.toLowerCase() + ''
    if (catvm.memory.htmlElements[tagname] == undefined) {
        debugger;
    }
    return catvm.proxy(catvm.memory.htmlElements[tagname]())
}
catvm.safefunction(document.createElement)
////////////////实例-补环境-end//////////////////

document = catvm.proxy(document)