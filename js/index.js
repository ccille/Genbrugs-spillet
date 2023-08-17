const App = Vue.createApp({
    data() {
        return {
            image: './Image/Beach.png',
            images: './Image/google-play-badge.png',
        }
    },
    methods:{
        store(){
            return "https://www.hawaiimagazine.com/the-5-best-beaches-in-hawaii-in-2021/";
        }
    },
    computed: {
        
    }
});
App.mount('#app')