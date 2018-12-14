function exploreArray ( event ) {
    currentOperation = event.target.innerHTML
    if ( currentOperation === 'push' || currentOperation === 'unshift' ) {
        this.style.visibility = 'visible'
    } else {
        if ( arr.length === 0 ) {
            this.placeholder = 'Массив пуст, невозможно выполнить операцию'
        } else {
            extracted.innerHTML = arr [ currentOperation ] ()
            arrElem.innerHTML = arr
        }
    }
}