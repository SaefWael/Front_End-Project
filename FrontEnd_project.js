//////////////////////////////Start of first vue component/////////////////////////////////
Vue.component ('cards', {
    props:['image','title', 'paragraph'],
    template: `
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="image" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ paragraph }}</p>
        </div>
    </div>
  `,
});

new Vue ({
    el: '#app',
    data: {
        message: 'welcome',
    }
})
//////////////////////////////End of first vue component/////////////////////////////////
//////////////////////////////Start of Second vue component/////////////////////////////////
Vue.component ('cardss', {
    props:['title','bold','paragraph'],
    template: `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text"><span>{{ bold }}</span>{{ paragraph }}</p>
        </div>
  </div>`,
});

new Vue ({
    el: '#appp',
    data: {
        message: 'welcome',
    }
})
//////////////////////////////End of Second vue component/////////////////////////////////
//////////////////////////////Start of Third vue component/////////////////////////////////

Vue.component ('cardssa', {
    props:['title','src'],
    template: `
    <div class="container_Steps_Cards">
        <img :src="src" alt="" width="90" height="90">
        <p>{{ title }}</p>
    </div>
    `,
});

new Vue ({
    el: '#appsa',
    data: {
        message: 'welcome',
    }
})

//////////////////////////////End of Third vue component/////////////////////////////////
//////////////////////////////Start of FAQ Javascript Code/////////////////////////////////

const button1= document.getElementById('button_One')
const button2= document.getElementById('button_Two')
const button3= document.getElementById('button_Three')
const button4= document.getElementById('button_Four')
const button5= document.getElementById('button_Five')
const button6= document.getElementById('button_Six')
const content1= document.getElementById('content_One')
const content2= document.getElementById('content_Two')
const content3= document.getElementById('content_Three')
const content4= document.getElementById('content_Four')
const content5= document.getElementById('content_Five')
const content6= document.getElementById('content_Six')

if (button1) {
    button1.addEventListener('click', function(){
        content1.classList.remove('hidden_FAQ')
        content1.classList.add('active_FAQ')
        content2.classList.remove('active_FAQ')
        content3.classList.remove('active_FAQ')
        content4.classList.remove('active_FAQ')
        content5.classList.remove('active_FAQ')
        content6.classList.remove('active_FAQ')
        content2.classList.add('hidden_FAQ')
        content3.classList.add('hidden_FAQ')
        content4.classList.add('hidden_FAQ')
        content5.classList.add('hidden_FAQ')
        content6.classList.add('hidden_FAQ')
    })
}

if (button2) {
    button2.addEventListener('click', function(){
        content2.classList.remove('hidden_FAQ')
        content2.classList.add('active_FAQ')
        content1.classList.remove('active_FAQ')
        content3.classList.remove('active_FAQ')
        content4.classList.remove('active_FAQ')
        content5.classList.remove('active_FAQ')
        content6.classList.remove('active_FAQ')
        content1.classList.add('hidden_FAQ')
        content3.classList.add('hidden_FAQ')
        content4.classList.add('hidden_FAQ')
        content5.classList.add('hidden_FAQ')
        content6.classList.add('hidden_FAQ')
    })
}

if (button3) {
    button3.addEventListener('click', function(){
        content3.classList.remove('hidden_FAQ')
        content3.classList.add('active_FAQ')
        content1.classList.remove('active_FAQ')
        content2.classList.remove('active_FAQ')
        content4.classList.remove('active_FAQ')
        content5.classList.remove('active_FAQ')
        content6.classList.remove('active_FAQ')
        content1.classList.add('hidden_FAQ')
        content2.classList.add('hidden_FAQ')
        content4.classList.add('hidden_FAQ')
        content5.classList.add('hidden_FAQ')
        content6.classList.add('hidden_FAQ')
    })
}

if (button4) {
    button4.addEventListener('click', function(){
        content4.classList.remove('hidden_FAQ')
        content4.classList.add('active_FAQ')
        content1.classList.remove('active_FAQ')
        content2.classList.remove('active_FAQ')
        content3.classList.remove('active_FAQ')
        content5.classList.remove('active_FAQ')
        content6.classList.remove('active_FAQ')
        content1.classList.add('hidden_FAQ')
        content2.classList.add('hidden_FAQ')
        content3.classList.add('hidden_FAQ')
        content5.classList.add('hidden_FAQ')
        content6.classList.add('hidden_FAQ')
    })
}

if (button5) {
    button5.addEventListener('click', function(){
        content5.classList.remove('hidden_FAQ')
        content5.classList.add('active_FAQ')
        content1.classList.remove('active_FAQ')
        content2.classList.remove('active_FAQ')
        content3.classList.remove('active_FAQ')
        content4.classList.remove('active_FAQ')
        content6.classList.remove('active_FAQ')
        content1.classList.add('hidden_FAQ')
        content2.classList.add('hidden_FAQ')
        content3.classList.add('hidden_FAQ')
        content4.classList.add('hidden_FAQ')
        content6.classList.add('hidden_FAQ')
    })
}

if (button6) {
    button6.addEventListener('click', function(){
        content6.classList.remove('hidden_FAQ')
        content6.classList.add('active_FAQ')
        content1.classList.remove('active_FAQ')
        content2.classList.remove('active_FAQ')
        content3.classList.remove('active_FAQ')
        content4.classList.remove('active_FAQ')
        content5.classList.remove('active_FAQ')
        content1.classList.add('hidden_FAQ')
        content2.classList.add('hidden_FAQ')
        content3.classList.add('hidden_FAQ')
        content4.classList.add('hidden_FAQ')
        content5.classList.add('hidden_FAQ')
    })
}



//////////////////////////////End of FAQ Javascript Code/////////////////////////////////
//////////////////////////////start of update cards component/////////////////////////////////

Vue.component ('upcards', {
    props:['image','title', 'paragraph'],
    template: `
    <div class="card" style="width: 18rem;">
        <img class="card-img-top pt-3" :src="image" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ paragraph }}</p>
        </div>
    </div>
  `,
});

new Vue ({
    el: '#upapp',
    data: {
        message: 'welcome',
    }
})

//////////////////////////////end of update cards component/////////////////////////////////