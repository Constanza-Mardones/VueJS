export default {
    state:{
        timesClicked:0,
    },
    incrementoclick(max,min){
        let azar= Math.round(Math.random() * (max - min) + min);
        this.state.timesClicked += azar;
    },
};