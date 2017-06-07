var btnPrev1  = document.querySelector('.btns1 .prev');
var btnNext1 = document.querySelector('.btns1 .next');
var images1 = document.querySelectorAll('.photos1 img');

var slider1 = new Slider(images1);
btnNext1.onclick = function(){
    slider1.next();
};
btnPrev1.onclick = function(){
    slider1.prev();
};



var btnPrev2  = document.querySelector('.btns2 .prev');
var btnNext2 = document.querySelector('.btns2 .next');
var images2 = document.querySelectorAll('.photos2 img');

var slider2 = new Slider(images2);
btnNext2.onclick = function(){
    slider2.next();
};
btnPrev2.onclick = function(){
    slider2.prev();
};

function Slider(images){
    this.images = images;
    
    this.i = 0;
    
    this.prev = function(){
        this.images[this.i].className = '';
        this.i--;
        if(this.i < 0){
            this.i = this.images.length - 1;
        }
        this.images[this.i].className = 'showed';
    }
    
    this.next = function(){
            this.images[this.i].className = '';
            this.i++;
            if(this.i >= this.images.length){
                this.i = 0;               
            }
            this.images[this.i].className = 'showed';  
    }
}