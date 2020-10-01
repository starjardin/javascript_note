//topics, custom event, event delegation, local storage, obj ref.

const shoppingForm = document.querySelector(".shopping");
const list = document.querySelector(".list");

let items = [];

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const name = form.item.value;
  if (!name) return
  const item = {
    name : form.item.value,
    id : Date.now(),
    complete : false,
  }
  //push the item to the state.
  items.push(item);
  form.reset();
  list.dispatchEvent(new CustomEvent("itemUpdated"));
}

const displayItems = () => {
  console.log(items);
  const html = items.map(
    item => 
    `<li class="shopping-item">
      <input ${item.complete ? 'checked' : " "}
       type="checkbox" 
        data-id="${item.id}>
      <span>${item.name}</span>
      <button 
        type="button" aria-label= "Remove ${item.name}" data-id="${item.id}">&times;
      </button>
    </li>`
    );
  list.innerHTML = html.join("");
}

const mirrorTolocalStorage = () => {
  localStorage.setItem("items", JSON.stringify(items))
}

const restoreFromLocalStorge = () => {
  const listItmesFromLocalStorage = localStorage.getItem("items");
  const listItems = JSON.parse(listItmesFromLocalStorage);
  if (listItems.length) {
    items = listItems;
    list.dispatchEvent(new CustomEvent("itemUpdated"));
  }
}

const deletingItem = (id) => {
  items = items.filter(item => item.id !== id);
  list.dispatchEvent(new CustomEvent("itemUpdated"));
}

const markAsComplete = (id) => {
  const itemRef = items.find(item => item.id === id);
  itemRef.complet = !itemRef.complet;
  list.dispatchEvent(new CustomEvent("itemUpdated"));
}

shoppingForm.addEventListener("submit", handleSubmit);
list.addEventListener("itemUpdated", displayItems);
list.addEventListener("itemUpdated", mirrorTolocalStorage);

list.addEventListener("click", e => {
  if (e.target.matches('button')) {
    const button = e.target;
    const id = parseInt(button.dataset.id);
    deletingItem(id);
  }
  if (e.target.matches(`[type="checkbox"]`)) {
    const id = parseInt(e.target.dataset.id);
    markAsComplete(id);
  }
});
restoreFromLocalStorge(); 