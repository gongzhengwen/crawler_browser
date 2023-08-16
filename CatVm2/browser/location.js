const Location = function Location() {
    throw new TypeError('Illegal constructor')
}
catvm.safefunction(Location);

Object.defineProperties(Location.prototype, {
    [Symbol.toStringTag]: {
        value: 'Location',
        configurable: true,
    }
})
////////////////原型-补环境-start////////////////
Location.prototype.protocol = "https:"
////////////////原型-补环境-end//////////////////
////////////////实例-补环境-start////////////////
location = {}
location.__proto__ = Location.prototype
location.href = 'https://www.douyin.com/search/%E8%BD%A6%E4%BF%9D%E7%BD%97?source=switch_tab&type=user'
////////////////实例-补环境-end//////////////////
location = catvm.proxy(location)