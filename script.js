function highlight() {
  let elementsArr = Array.from(document.querySelectorAll("strong"));
  elementsArr.forEach((element)=>{
    // console.log(element);
    element.style.color =  "rgb(0, 128, 0)";
  });

}


function return_normal() {
  let elementsArr = Array.from(document.querySelectorAll("strong"));
  elementsArr.forEach((element)=>{
    // console.log(element);
    element.style.color =  "black";
  });
}
