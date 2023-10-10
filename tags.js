const ul = document.querySelector("ul"),
input = document.querySelector(".ul-input input"),
countNumber = document.querySelector(".details span");

let maxTags = 10,
tags = [];

countTag()

function countTag() {
    input.focus();
}

function createTag () {
    ul.querySelectorAll("li").forEach(li => li.remove());

    console.log(tags);
    tags.slice().reverse().forEach(tag => {
        let liTag = `<li>${tag}<i class="fa fa-times" aria-hidden="true" onclick="remove(this, '${tag}')"></i></li>`;
        ul.insertAdjacentHTML("afterbegin", liTag);
    });
    countTag()
}

function remove(element, tag) {
    let index = tags.indexOf(tag);
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    element.parentElement.remove();
    countTag()
}

function addTag (e) {
    if (e.key == "Enter") {
        let tag = e.target.value.replace(/\$+/g, ' ');
        if (tag.length > 1 && !tags.includes(tag)) {
            tag.split(',').forEach(tag => {
                tags.push(tag);
                createTag();
            });
        }
        e.target.value = "";
    }
}

input.addEventListener('keyup', addTag);

const removeBtn = document.querySelector("button");
removeBtn.addEventListener("click", () => {
    tags.length = 0;
    ul.querySelectorAll("li").forEach(li => li.remove());
    countTag()
})

// recipient display
let recipient = document.querySelector('.recipient-username');
let recipientInput = document.querySelector('.recipient-username input');
let ccBtn = document.querySelector('.cc-btn');
let ccDeleteBtn = document.querySelector('.trash-can');

const ccInputDisplay = () => {
    ccBtn.addEventListener('click', () => {
        if (recipient.classList.contains('d-none')){
            recipient.classList.remove('d-none');
        } else {
            recipient.classList.add('d-none');
        }
    });
}

ccInputDisplay();

const ccInputDelete = () => {
    ccDeleteBtn.addEventListener('click', () => {
        recipient.classList.add('d-none');
        recipientInput.value = '';
    });
}

ccInputDelete();
