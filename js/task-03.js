const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listImg = document.querySelector(".gallery");

listImg.style.display = "flax";
listImg.style.margin = "0, auto";
listImg.style.gap = "20px";

const linkImg = images.map(image => `<li><img src = "${image.url}" alt = "${image.alt}" width = "250px"</li>`)

listImg.insertAdjacentHTML("beforeend", linkImg);


console.log(linkImg);
document.body.appendChild(listImg);