class Kaitlente {

    constructor(skyliuKiekis) {
        this.size = skyliuKiekis; 
    } 

    render () {
        const mainDOM = document.querySelector('main');

        const columns = Math.ceil(Math.sqrt(this.size));
        const width = columns * 120 + 2;
        const HTML = `<div class="kaitlente" style="width: ${width}px">
            <div class="top">
                ${'<div class="skyle"></div>'.repeat(this.size)}
            </div>
            <div class="bottom">
                ${'<div class="jungiklis"></div>'.repeat(this.size)}
            </div>
        </div>`;

        mainDOM.innerHTML += HTML ; 
    }

    enableClicks() {

        const jungikliaiArray = Array.from(document.querySelectorAll(".jungiklis"));
        const skylesArray = Array.from(document.querySelectorAll(".skyle"));

        jungikliaiArray.forEach( )

        // cia aprasome veiksmu logika...
        // susirandame skyles
        // susirandame jungiklius
        // kai jungiklis paspaustas: ijungiam/isjungiam atitinkama skyle
    }
}

export { Kaitlente } ;
