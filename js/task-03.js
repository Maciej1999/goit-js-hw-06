const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");
list.style.listStyleType = "none";
list.style.display = "flex";
list.style.flexDirection = "column";
list.style.textAlign = "center";
list.style.margin = "0";
list.style.padding = "0";
images.forEach((image) => {
  const item = document.createElement("li");
  item.listStyleType = "none";
  const img = document.createElement("img");
  img.src = image.url;
  img.alt = image.alt;
  img.width = "500";
  img.height = "300";
  item.appendChild(img);
  list.appendChild(item);
});
