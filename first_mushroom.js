const json = JSON.parse('[{"id":1,"url":"https:\/\/images.unsplash.com\/photo-1583129750939-be2b5cf2ebf2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"},{"id":2,"url":"https:\/\/images.unsplash.com\/photo-1583155569589-da39b2d327e7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"},{"id":3,"url":"https:\/\/images.unsplash.com\/photo-1583845112239-97ef1341b271?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"},{"id":4,"url":"https:\/\/images.unsplash.com\/photo-1583131455094-37bdbd8d0ec6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"},{"id":5,"url":"https:\/\/images.unsplash.com\/photo-1583186945822-c6f9a92ebc62?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"},{"id":6,"url":"https:\/\/images.unsplash.com\/photo-1584874616492-1e354c7faaa6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"},{"id":7,"url":"https:\/\/images.unsplash.com\/photo-1584581050726-c74977c26269?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"}]');

let list = json.filter(row => row.id % 2);
let anotherList = json.filter(row => !(row.id % 2));

console.log(list)
console.log(anotherList)

const listContainer = document.getElementById('list-container')

//add empty list
const addList = _listClass => {
  const list = document.createElement('div')
  list.id = _listClass
  list.className  = "list-group"
  listContainer.appendChild(list)
}

//add empty slot
const emptySlot = _list => {
  const img = document.createElement('img')
  img.className = 'list-item'
  _list.appendChild(img)
}

//populate DOM
const populateDOM = () => {
  addList('list-0')
  addList('list-1')
  var list1 = document.getElementById('list-0')
  var list2 = document.getElementById('list-1')

list.forEach((photo, i) => {
  const img = document.createElement('img')
  img.className = 'list-item'
  img.id = i
  img.src = photo.url
  img.onclick = () => {
    anotherList.push((list.splice(i, 1))[0])
    listContainer.innerHTML = ''
    populateDOM();
  };
  img.onmouseover = () => emptySlot(list2)
  img.onmouseout = () => list2.removeChild(list2.lastChild)
  list1.appendChild(img)
});

anotherList.forEach((photo, i) => {
  const img = document.createElement('img')
  img.className = 'list-item'
  img.id = i
  img.src = photo.url
  img.onclick = () => {
    list.push((anotherList.splice(i, 1))[0])
    listContainer.innerHTML = ''
    populateDOM();
  };
  img.onmouseover = () => emptySlot(list1)
  img.onmouseout = () => list1.removeChild(list1.lastChild)
  list2.appendChild(img)
});
}

populateDOM();
