export default {
    state:{
        timesClicked:0,
        resultado:0,
        informacion:[],
    },
    incrementoclick(max,min){
        let azar= Math.round(Math.random() * (max - min) + min);
        this.state.timesClicked += azar;
        this.state.resultado= azar;
    },
    actividadesClick(nombre){
        if (this.state.resultado < 0) {
            this.state.informacion =[...this.state.informacion, "Has Perdido "+this.state.resultado+" de Oro en: "+nombre];
        }
        else{
            this.state.informacion =[...this.state.informacion, "Has Ganado "+this.state.resultado+" de Oro en: "+nombre];
        }
    }
};