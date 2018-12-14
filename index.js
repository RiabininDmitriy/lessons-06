var operations = [  'push',  'pop',  'shift',  'unshift'  ]
var currentOperation = null
var arr = []

var arrElem = document.createElement ( 'section' )
document.body.appendChild ( arrElem )
arrElem.innerHTML = arr

var elem = document.createElement ( 'input' )
elem.type = 'text'
document.body.appendChild ( elem )
elem.placeholder = 'новый элемент массива'
//elem.style.visibility = 'hidden'

elem.onchange = function ( event ) {
    arr [ currentOperation ] ( this.value )
    arrElem.innerHTML = arr
   // this.style.visibility = 'hidden'
}
var extracted = document.createElement ( 'p' )
document.body.appendChild ( extracted )



var btns = []

for ( var operation of operations ) {
    btns.push ( 
      document.body.appendChild ( 
        document.createElement ( 'button' )
      )
    )
    btns [ btns.length-1 ].innerHTML = operation
    btns [ btns.length-1 ].onclick = exploreArray.bind ( elem )
}
var input = document.createElement ('input')
document.body.appendChild (input)

var button = document.createElement ('button')
document.body.appendChild (button)
button.innerText  = 'knopka'

button.onclick = function (){
  var x = elem.value
  var y = input.value
  if (arr.length === 0 && y != 0){
  alert ('error')
  }else if (y > arr.length){
alert('error')
}else if (y<0){
  alert('error')
}
else {arr.splice(y,0,x)
arrElem.innerHTML  = arr
}
}
