const ul = document.querySelector("ul"),
input = document.querySelector(".ul-input input"),
countNumber = document.querySelector(".details span");

let maxTags = 10,
tags = [];

countTag()

function countTag() {
    input.focus();
    // countNumber.innerText = maxTags - tags.length;  // substracting max value with tags length
}

function createTag () {
    ul.querySelectorAll("li").forEach(li => li.remove());  // removing all li tags before adding so that there will no duplicate tags
    // console.log(tags);
    // console.log(tags.slice().reverse());

    console.log(tags);
    tags.slice().reverse().forEach(tag => {
        let liTag = `<li>${tag}<i class="fa fa-times" aria-hidden="true" onclick="remove(this, '${tag}')"></i></li>`;
        ul.insertAdjacentHTML("afterbegin", liTag);  // inserting/adding li inside ul tag
    });
    countTag()
}

function remove(element, tag) {
    let index = tags.indexOf(tag);  // getting & removing tag index
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];  // removing or excluding selected tag from an array
    element.parentElement.remove();  // removing li of removed tag
    countTag()
}

function addTag (e) {
    if (e.key == "Enter") {
        let tag = e.target.value.replace(/\$+/g, ' '); // removing unwanted spaces from user tag
        if (tag.length > 1 && !tags.includes(tag)) {  // if tag length is greater than 1 and the tag doesn't exist already
            // if (tags.length < 10) {  // add tags only if tags length is less than 10
                tag.split(',').forEach(tag => {  // splitting each tag at comma
                    tags.push(tag);  //adding each tag into tags array
                    createTag();
                });
            // }
        }
        e.target.value = "";
    }
}

input.addEventListener('keyup', addTag);

const removeBtn = document.querySelector("button");
removeBtn.addEventListener("click", () => {
    tags.length = 0; // making array empty
    ul.querySelectorAll("li").forEach(li => li.remove());  // removing all li tags
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

// ace code editor
