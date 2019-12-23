import _ from 'lodash'
import './style.styl'

function component() {
	var element = document.createElement('div')

	// lodash 是由当前 script 脚本 import 导入进来的
	element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('style')

	return element
}

function buttonCom() {
  var button = document.createElement('button')
  button.innerHTML = 'test'
  button.addEventListener('click', () => {
    var eleLinks = document.querySelectorAll('link[title]');
    console.log('here===')
    console.log(eleLinks,'===')
    eleLinks.forEach(function (link) {
      link.disabled = !link.disabled
  });
  }) 
  return button
}

document.body.appendChild(component())
document.body.appendChild(buttonCom())