const app = {
    data() {
        return {
            tasks: [{
                title: 'Lisa', detail: 'Lalisa Manoban (birth name: Pranpriya Manoban, born March 27, 1997 in Bangkok, Thailand) better known by her stage name, Lisa, is a Thai rapper, singer and dancer, based in South Korea. She is a member of Blackpink.',
                url: './images/1.jpg', alt: 'Lisa', done: false, count: 199
            },
            {
                title: 'Jennie', detail: "She is the only child in their family. At a height of 5'3 ft (that is 163 cm) and weighing only 41 kgs, Jennie is probably one of the sexiest and most petite idols right now. She also has a lovely, small face. She can play the piano, as well as the flute.",
                url: './images/2.jpg', alt: 'Jennie', done: false, count: 247
            },
            {
                title: 'Jisoo', detail: "The oldest member in the group, Jisoo is a singer, often referred to as Blackpink's mood-maker. She has a quirky sense of humor and a proclivity for generating on-the-spot songs about any topic — from the weather to a craving for chicken skewers.",
                url: './images/3.jpg', alt: 'Jisoo', done: false, count: 234
            },
            {
                title: 'Rose', detail: "Rose is the group's lead dancer and is also known for her unique, dreamy voice. She has an ability to hit high notes easily while performing extreme dance moves on the stage – something even veteran K-pop artists cannot always manage.",
                url: './images/4.jpg', alt: 'Rose', done: false, count: 542
            }
                // },
                // {
                //     title: 'Dear', detail: "Hi, My name is Yanika Putorn in the group I'm visual and lead vocal. My birthday is 23 Feb 2001 now I'm 19 years old. So I'm maknea in this group and new member in blackpink I'm hope you joy with my song and my show in other stage. Luv u BLINK.",
                //     url: './images/5.jpg', done: false, count: 999}
            ],
            form: {
                inputTask: '',
                search: false
            },
            isShow : false,
            showSrc: ""
        }

    },
    methods: {
        toggleDone(index) {
            if (this.tasks[index].done) {
                this.tasks[index].done = !this.tasks[index].done
                this.tasks[index].count -= 1
            } else {
                this.tasks[index].done = !this.tasks[index].done
                this.tasks[index].count += 1
            }
        },
        toggleDoes(index) {
            this.tasks[index].done = !this.tasks[index].done
        },
        search() {
            this.form.search = !this.form.search;
        },
        closePreview(){
            this.isShow = false;
        },
        toggleView(index) {
            this.showSrc = this.tasks[index].url;
            this.isShow = true ;
        }


    },
    computed: {
        countLike() {
            return this.tasks.filter(i => i.done).length
        },
        countPic() {
            return this.tasks.filter(i => i).length
        },
        searching() {
            return this.tasks.filter((textSearch) => {
                return textSearch.title.toLowerCase().includes(this.form.inputTask.toLowerCase());
            });
        }
    }

}
mountedApp = Vue.createApp(app).mount('#app')

