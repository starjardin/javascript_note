function wait (ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function destroyPopup(formEl) {
  formEl.classList.remove("open");
  await wait(100);
  formEl.remove();
  formEl = null;
}

function ask (options) {
  return new Promise(async function (resolve) {
    //create a form element
    const formEl = document.createElement('form');
    formEl.classList.add('popup');
    formEl.insertAdjacentHTML('afterbegin', `
      <fieldset>
        <labe>${options.title}</labe>
        <input type="input" name="input">
        <button type="submit">Submit</button>
      </fieldset>
    `)

    if (options.cancel) {
      const skipBtn = document.createElement("button");
      skipBtn.type = "button";
      skipBtn.textContent = "Cancel";
      formEl.firstElementChild.appendChild(skipBtn);
      //Todo : add an event listener
      skipBtn.addEventListener("click", function () {
        resolve(null);
        destroyPopup(formEl);
      }, {once: true});
    }

    formEl.addEventListener("submit", e => {
      e.preventDefault();
      resolve(e.target.input.value);
      //remove it from the dom entirely
      destroyPopup(formEl);
    }, {once: true});

    document.body.appendChild(formEl);
    await wait(500)
    formEl.classList.add("open");
  });
}

// select all button that have questions

async function askQuestion (e) {
  const button = e.currentTarget;
  const shouldCancel = "cancel" in button.dataset;
  const answer = await ask (
    {
      title : button.dataset.question,
      cancel : shouldCancel
    }
    );
}

const buttons = document.querySelectorAll(`[data-question]`);
console.log(buttons);
buttons.forEach(button => button.addEventListener("click", askQuestion));
