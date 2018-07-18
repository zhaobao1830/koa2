const yese = {
  _name: '夜色',
  get name() {
    return this._name
  },
  set name(val) {
    console.log('new name is' + val)
    this._name = val
  }
}

console.log(yese.name)
yese.name = '荷塘月色'
console.log(yese.name)