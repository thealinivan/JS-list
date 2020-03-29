const json = JSON.parse('[{"id":1,"url":"https:\/\/images.unsplash.com\/photo-1583129750939-be2b5cf2ebf2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"},{"id":2,"url":"https:\/\/images.unsplash.com\/photo-1583155569589-da39b2d327e7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"},{"id":3,"url":"https:\/\/images.unsplash.com\/photo-1583845112239-97ef1341b271?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"},{"id":4,"url":"https:\/\/images.unsplash.com\/photo-1583131455094-37bdbd8d0ec6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"},{"id":5,"url":"https:\/\/images.unsplash.com\/photo-1583186945822-c6f9a92ebc62?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"},{"id":6,"url":"https:\/\/images.unsplash.com\/photo-1584874616492-1e354c7faaa6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"},{"id":7,"url":"https:\/\/images.unsplash.com\/photo-1584581050726-c74977c26269?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"}]');

const list = json.filter(row => row.id % 2);
const anotherList = json.filter(row => !(row.id % 2));
const lists = [list, anotherList]
const listContainer = document.getElementById('list-container')

//empty list to DOM
const addList = _listId => {
  const list = document.createElement('div')
  list.id = _listId
  list.className  = "list-group"
  listContainer.appendChild(list)
}

//image
const image = (_i, _img) => {
  const img = document.createElement('img')
  img.className = 'list-item'
  img.id = _i
  img.src = _img.url
  img.onclick = () => moveImage(_i, list, anotherList)
  return img
}

//move image
const moveImage = (_imgId, _list1, _list2) => {
  let match = false
  //need loop through ID's of first array objects
  //if _imgId is found in _list1 then match = true
  match ? _list2.push((_list1.splice(_imgId, 1))[0]) : _list1.push((_list2.splice(_imgId, 1))[0])
}

//img to DOM
const renderImg = data => {
  data.forEach((list, listId) => {
    addList(listId)
    list.forEach((img, imgId) => {
      //second list does not populate
      document.getElementById(listId).appendChild(image(imgId, img))
    });
  });
}

renderImg(lists)
