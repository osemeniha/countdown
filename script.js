var vue = new Vue ({
    el: '#app',
    data: {
        userDatetime: '',
        userSeconds: '',
        nowSeconds: '',
        between: '',
        seconds: '',
        minutes: '',
        hours: '',
        days: '',
        months: '',
        years: ''
    },
    methods: {
        split(){
            this.nowSeconds = new Date(Date.now());
            this.userSeconds = new Date(this.userDatetime);
            this.between = new Date(this.userSeconds - this.nowSeconds);
            this.seconds = Math.floor(this.between/1000);
            this.minutes = Math.floor(this.seconds / 60);
            this.hours   = Math.floor(this.minutes / 60);
            this.days    = Math.floor(this.hours / 24);
            this.months  = Math.floor(this.days / 30);
            this.years   = Math.floor(this.days / 365);
            this.seconds %= 60;
            this.minutes %= 60;
            this.hours %= 24;
            this.days %= 30;
            this.months %= 12;
        }
    },
    mounted() {
        setInterval(() => {
          this.split();
        }, 1000);
        this.nowSeconds = new Date(Date.now());
      }
});
document.getElementById("date").min = new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"));