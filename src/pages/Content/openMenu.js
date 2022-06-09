import classesDir from './food';
import recipe from './recipe';
import './content.styles.css';

const menuBar = document.createElement('div');
menuBar.id = 'menu-bar';
menuBar.classList.add('hidden');

document.body.appendChild(menuBar);

chrome.storage.local.get('myLists', function (result) {
  if (!result.myLists) {
    chrome.storage.local.set({ myLists: [] });
  }
});

var closeButton = new Image();
closeButton.id = 'close-btn';
closeButton.src = chrome.runtime.getURL('images/x-button.png');
closeButton.addEventListener('click', () => {
  closeMenu();
});
menuBar.appendChild(closeButton);

var isBubbleingCategory = true;

const categoryContainer = document.createElement('div');
categoryContainer.className = 'top-container';
var bubbleingMenu = document.createElement('div');
bubbleingMenu.className = 'top-category-on';
bubbleingMenu.textContent = 'BUBBLEing';
var myListMenu = document.createElement('div');
myListMenu.className = 'top-category-off';
myListMenu.textContent = 'My List';

bubbleingMenu.onclick = () => {
  if (!isBubbleingCategory) {
    isBubbleingCategory = true;
  }
  showBubbleing();
};

myListMenu.onclick = () => {
  if (isBubbleingCategory) {
    isBubbleingCategory = false;
  }
  showMyList();
};

categoryContainer.appendChild(bubbleingMenu);
categoryContainer.appendChild(myListMenu);
menuBar.appendChild(categoryContainer);

const closeMenu = () => {
  document.getElementById('menu-bar').classList.add('hidden');
};

const openMenu = () => {
  document.getElementById('menu-bar').classList.remove('hidden');
};

const foodMenuBox = document.createElement('div');
foodMenuBox.className = 'menu-box';

const bubbleingContainer = document.createElement('div');
bubbleingContainer.className = 'menu-box';
bubbleingContainer.id = 'bubbleing-menu';
menuBar.appendChild(bubbleingContainer);

const nameContainer = document.createElement('div');
nameContainer.className = 'name-container';
bubbleingContainer.appendChild(nameContainer);

const foodName = document.createElement('div');
foodName.className = 'menu-name';
nameContainer.appendChild(foodName);

const likeButton = new Image();
likeButton.className = 'star-button';
nameContainer.appendChild(likeButton);

const myListContainer = document.createElement('div');
myListContainer.className = 'menu-box';
myListContainer.id = 'my-list-menu';
myListContainer.classList.add('hidden');
menuBar.appendChild(myListContainer);

const foodSubName = document.createElement('div');
foodSubName.className = 'menu-sub-name';
bubbleingContainer.appendChild(foodSubName);

const foodExp = document.createElement('div');
foodExp.className = 'food-exp';
bubbleingContainer.appendChild(foodExp);

const foodGrid = document.createElement('div');
foodGrid.className = 'food-grid';
bubbleingContainer.appendChild(foodGrid);

const foodImage1 = new Image();
foodImage1.className = 'food-image';
foodGrid.appendChild(foodImage1);
const foodImage2 = new Image();
foodImage2.className = 'food-image';
foodGrid.appendChild(foodImage2);
const line1 = document.createElement('div');
line1.className = 'line';
bubbleingContainer.appendChild(line1);

const howToMake = document.createElement('div');
howToMake.className = 'sub-menu';
howToMake.textContent = 'How To Make';
bubbleingContainer.appendChild(howToMake);
const foodRecipe = document.createElement('pre');
foodRecipe.className = 'sub-menu-dropdown';
foodRecipe.classList.add('hidden');

bubbleingContainer.appendChild(foodRecipe);
howToMake.addEventListener('click', () => {
  if (foodRecipe.classList.contains('hidden')) {
    foodRecipe.classList.remove('hidden');
  } else {
    foodRecipe.classList.add('hidden');
  }
});

const line2 = document.createElement('div');
line2.className = 'line';
bubbleingContainer.appendChild(line2);
const nearMe = document.createElement('div');
nearMe.className = 'sub-menu';
nearMe.textContent = 'Restaurant Near Me';
bubbleingContainer.appendChild(nearMe);

const moreButton = new Image();
moreButton.className = 'more-button';
moreButton.src = chrome.runtime.getURL('images/more-button.png');
bubbleingContainer.appendChild(moreButton);

const showBubbleing = () => {
  bubbleingContainer.classList.remove('hidden');
  myListContainer.classList.add('hidden');
  bubbleingMenu.classList.add('top-category-on');
  bubbleingMenu.classList.remove('top-category-off');
  myListMenu.classList.add('top-category-off');
  myListMenu.classList.remove('top-category-on');
};

const showMyList = () => {
  bubbleingContainer.classList.add('hidden');
  myListContainer.classList.remove('hidden');
  bubbleingMenu.classList.remove('top-category-on');
  bubbleingMenu.classList.add('top-category-off');
  myListMenu.classList.add('top-category-on');
  myListMenu.classList.remove('top-category-off');
};

function onClickMyListItem(e, num) {
  e.preventDefault();
  showBubbleing();
  foodName.textContent = classesDir[num].name;
  foodSubName.textContent = classesDir[num].sub_name;
  foodImage1.src = chrome.runtime.getURL(
    `images/foods/${classesDir[num].name}-1.jpg`
  );
  foodImage2.src = chrome.runtime.getURL(
    `images/foods/${classesDir[num].name}-2.jpg`
  );
  foodExp.textContent = classesDir[num].description;
  foodRecipe.textContent = recipe[num].how;
  nearMe.onclick = () => {
    window.open(
      'http://google.com/search?q=' +
      classesDir[num].name +
      ' restaurant near me',
      '_blank'
    );
  };
  moreButton.onclick = () => {
    window.open('http://google.com/search?q=' + classesDir[num].name, '_blank');
  };
  let clicked;
  chrome.storage.local.get('myLists', function (result) {
    clicked = result.myLists.indexOf(num) === -1 ? false : true;
    likeButton.src =
      result.myLists.indexOf(num) === -1
        ? chrome.runtime.getURL('images/off-like-button.png')
        : chrome.runtime.getURL('images/on-like-button.png');
    console.log(clicked);
  });
  //likeButton.src = chrome.runtime.getURL('images/off-like-button.png');
  likeButton.id = `like-${num}`;
  likeButton.addEventListener('click', (e) => {
    onClickMyListLike(e, num, `like-${num}`);
  });
}
function onClickMyListLike(e, num, id) {
  console.log(id);
  e.preventDefault();
  var exist;
  chrome.storage.local.get({ myLists: [] }, function (result) {
    var list = result.myLists;
    exist = list.indexOf(num) === -1 ? false : true;
    if (exist) {
      list = list.filter((name) => name !== num);
      document.getElementById(id).src = chrome.runtime.getURL(
        'images/off-like-button.png'
      );
    } else {
      list.push(num);
      document.getElementById(id).src = chrome.runtime.getURL(
        'images/on-like-button.png'
      );
    }
    chrome.storage.local.set({ myLists: list }, function () {
      chrome.storage.local.get('myLists', function (result) {
        console.log(result.myLists);
      });
    });
  });
}
function onClickLike(e, num, id) {
  console.log(id);
  e.preventDefault();
  var exist;
  chrome.storage.local.get({ myLists: [] }, function (result) {
    var list = result.myLists;
    exist = list.indexOf(num) === -1 ? false : true;
    if (exist) {
      list = list.filter((name) => name !== num);
      document.getElementById(id).src = chrome.runtime.getURL(
        'images/off-like-button.png'
      );
      removeMyListItem(num);
    } else {
      list.push(num);
      document.getElementById(id).src = chrome.runtime.getURL(
        'images/on-like-button.png'
      );
      addMyListItem(num);
    }
    chrome.storage.local.set({ myLists: list }, function () {
      chrome.storage.local.get('myLists', function (result) {
        console.log(result.myLists);
      });
    });
  });
}
function addMyListItem(num) {
  const myListItem = document.createElement('div');
  myListItem.className = 'my-list-item';
  myListItem.id = `my-list-item-${num}`;
  const myListImage = new Image();
  myListImage.className = 'my-list-image';
  myListImage.src = chrome.runtime.getURL(
    `images/foods/${classesDir[num].name}-1.jpg`
  );
  myListImage.addEventListener('click', function (e) {
    onClickMyListItem(e, num);
  });
  myListItem.appendChild(myListImage);
  const myListLike = new Image();
  myListLike.className = 'my-list-like';
  myListLike.id = `like-${num}`;
  myListLike.addEventListener('click', function (e) {
    onClickMyListLike(e, num, `like-${num}`);
  });
  myListLike.src = chrome.runtime.getURL('images/on-like-button.png');
  myListItem.appendChild(myListLike);
  const myListName = document.createElement('div');
  myListName.className = 'my-list-name';
  myListName.textContent = classesDir[num].name;
  myListItem.appendChild(myListName);
  const myListSub = document.createElement('div');
  myListSub.className = 'my-list-sub';
  myListSub.textContent = classesDir[num].sub_name;
  myListItem.appendChild(myListSub);
  document.getElementById('my-list-menu').appendChild(myListItem);
}
function removeMyListItem(num) {
  const myListClicked = document.getElementById(`my-list-item-${num}`);
  document.getElementById('my-list-menu').removeChild(myListClicked);
}
chrome.storage.local.get('myLists', function (result) {
  result.myLists.map((num) => {
    addMyListItem(num);
  });
});
export const showMenuBar = (num, food) => {
  openMenu();
  showBubbleing();
  foodName.textContent = food;
  foodSubName.textContent = classesDir[num].sub_name;
  foodImage1.src = chrome.runtime.getURL(`images/foods/${food}-1.jpg`);
  foodImage2.src = chrome.runtime.getURL(`images/foods/${food}-2.jpg`);
  foodExp.textContent = classesDir[num].description;
  foodRecipe.textContent = recipe[num].how;
  nearMe.onclick = () => {
    window.open(
      'http://google.com/search?q=' + food + ' restaurant near me',
      '_blank'
    );
  };
  moreButton.onclick = () => {
    window.open('http://google.com/search?q=' + food, '_blank');
  };
  let clicked;
  chrome.storage.local.get('myLists', function (result) {
    clicked = result.myLists.indexOf(num) === -1 ? false : true;
    likeButton.src =
      result.myLists.indexOf(num) === -1
        ? chrome.runtime.getURL('images/off-like-button.png')
        : chrome.runtime.getURL('images/on-like-button.png');
  });
  likeButton.id = `like-${num}`;
  likeButton.onclick = (e) => {
    onClickLike(e, num, `like-${num}`);
  };
};
