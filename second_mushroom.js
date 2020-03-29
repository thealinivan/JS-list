const json = JSON.parse('[{"id":1,"url":"https:\/\/images.unsplash.com\/photo-1583129750939-be2b5cf2ebf2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"},{"id":2,"url":"https:\/\/images.unsplash.com\/photo-1583155569589-da39b2d327e7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"},{"id":3,"url":"https:\/\/images.unsplash.com\/photo-1583845112239-97ef1341b271?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"},{"id":4,"url":"https:\/\/images.unsplash.com\/photo-1583131455094-37bdbd8d0ec6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"},{"id":5,"url":"https:\/\/images.unsplash.com\/photo-1583186945822-c6f9a92ebc62?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"},{"id":6,"url":"https:\/\/images.unsplash.com\/photo-1584874616492-1e354c7faaa6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"},{"id":7,"url":"https:\/\/images.unsplash.com\/photo-1584581050726-c74977c26269?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MTQwfQ"}]');

const list = json.filter(row => row.id % 2);
const anotherList = json.filter(row => !(row.id % 2));
const lists = [list, anotherList]
const listContainer = document.getElementById('list-container')

console.log(list)
console.log(anotherList)
console.log(lists)

//add list
const addList = _listId => {
  const list = document.createElement('div')
  list.id = _listId
  list.className  = "list-group"
  listContainer.appendChild(list)
}

//add image to list
const addImage = (_i, _img, _list) => {
  const img = document.createElement('img')
  img.className = 'list-item'
  img.id = _i
  img.src = _img.url

  img.onclick = function () {
    //moveImage(...args)
    renderImg(lists)
  };
  //PROBLEMAS
  const currentList = document.getElementById('_list')
  console.log(_list)
  console.log(currentList)
  currentList.appendChild(img)
}

//move image cross list
const moveImage = (...args) => {

}

//populate DOM
const renderImg = data => {
  data.forEach((list, j) => {
    const listId = "list-"+j
    addList(listId)
    list.forEach((img, i) => {
      addImage(i, img, listId)
    });
  });

}



renderImg(lists)
