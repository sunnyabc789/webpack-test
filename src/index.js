import _ from 'lodash'
import Print from './print'

function component() {
	var element = document.createElement('div')

	// lodash 是由当前 script 脚本 import 导入进来的
	element.innerHTML = _.join(['Hello', 'webpack'], ' ')
	element.onclick = Print.bind(null, 'Hello webpak!')
  
	return element
}

document.body.appendChild(component())

if (module.hot) {
	module.hot.accept('./print.js', function () {
		console.log('Accepting the updated printMe module!')
		printMe()
	})
}