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