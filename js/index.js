var button = document.getElementById('buttonContainer');
var pic1 = document.getElementById('pic1');
var pic3 = document.getElementById('pic3');

console.log(pic1,pic3)
button.addEventListener('click',function(){
    pic1.className += ' next';
    pic3.className += ' next2';
    pic3.style.display = 'block';
})