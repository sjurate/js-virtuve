class Kaitlente {

    constructor(skyliuKiekis) {
        this.size = skyliuKiekis; 
        console.log(this);
    } 

    render () {
        const mainDOM = document.querySelector('main');
        const HTML = `<div class="kaitlente" style="width: 362px;">
            <div class="top">
                <div class="skyle karsta"></div>
                <div class="skyle"></div>
                <div class="skyle"></div>
            </div>
            <div class="bottom">
                <div class="jungiklis ijungtas"></div>
                <div class="jungiklis"></div>
                <div class="jungiklis"></div>
            </div>
        </div>`;

        mainDOM.innerHTML += HTML ; 
    }
}

export { Kaitlente } ;
