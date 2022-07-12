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
