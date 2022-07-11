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


