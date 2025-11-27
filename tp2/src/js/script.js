console.clear();

class Coder {

    static uniqSymbols = null;
    static speed = 300;     // valeur par défaut
    static txt = '';
    static time1 = null;
    static time2 = null;
    static time3 = null;
    static anim = true;

    static init() {

        // input texte
        let inp = document.querySelector('.placeholder .binary-module input[type=text]');

        // slider speed (invisible dans l'UI)
        // on le crée dynamiquement pour garder le comportement original
        let sp = document.createElement('input');
        sp.type = "range";
        sp.min = 0;
        sp.max = 1000;
        sp.value = 800;
        sp.style.display = "none"; // ❗️ invisible
        document.body.appendChild(sp);

        let go = () => {
            clearTimeout(this.time1);
            clearTimeout(this.time2);
            clearTimeout(this.time3);

            this.txt = inp.value;
            this.speed = Number(sp.max) - Number(sp.value);

            this.time3 = setTimeout(this.convert.bind(this), 200);
        };

        inp.addEventListener('input', go);
        sp.addEventListener('input', go);
        go();
    }

    static getBinary(symbol) {
        let code = symbol.charCodeAt().toString(2);
        return '0'.repeat(8 - code.length) + code;
    }

    static createCodeObj(txt) {
        let code = [...txt].map(s => this.getBinary(s)).join(' ');
        let block = document.createElement('span');
        let raw = document.createElement('span');
        block.innerHTML = code + ' ';
        raw.innerHTML = txt;

        return {
            symbol: txt,
            code: code,
            html: block,
            raw: raw,
        };
    }

    static convert() {
        let txt = this.txt;
        this.addUniqSymbols(txt);
        this.addInterface(txt);
    }

    static addUniqSymbols(txt) {
        this.uniqSymbols = [...new Set([...txt])]
            .map(e => this.createCodeObj(e));
    }

    static createSymbolsBlock() {
        let block = document.createElement('div');
        block.innerHTML = `<div style="margin-bottom:10px;font-size:16px">Symbols</div>`;
        this.uniqSymbols.forEach(e => block.append(e.html));
        return block;
    }

    static addInterface(txt) {

        if (!this.uniqSymbols) return;

        let space = document.querySelector('.placeholder .binary-module .code');
        let original = document.querySelector('.placeholder .binary-module .adres');

        space.innerHTML = '';
        original.innerHTML = `<div style="margin-bottom:10px;font-size:16px">Original</div>`;

        // SYMBOLS ONLY
        let symbols = this.createSymbolsBlock();
        space.append(symbols);

        // ORIGINAL TEXT → spans
        [...txt].forEach(character => {
            let block = document.createElement('span');
            block.innerHTML = character;
            original.append(block);

            let sObj = this.uniqSymbols.find(code => code.symbol == character);

            block.addEventListener('mouseover', () => {
                block.classList.add('active');
                sObj.html.classList.add('block-active');
            });
            block.addEventListener('mouseout', () => {
                block.classList.remove('active');
                sObj.html.classList.remove('block-active');
            });
        });

        // PLAY / PAUSE
        document.querySelector('.placeholder .binary-module button').onclick = ({ target }) => {
            this.anim = !this.anim;
            if (this.anim) this.animate();
            target.innerHTML = this.anim ? 'Play' : 'Pause';
        };

        this.animate();
    }

    static animate(i = 0) {
        let blocks = document.querySelectorAll('.placeholder .binary-module .adres span');
        if (!blocks.length) return;

        let block = blocks[i];
        let symbol = block.innerHTML;

        let sObj = this.uniqSymbols.find(c => c.symbol == symbol);

        block.classList.add('active');
        sObj.html.classList.add('block-active');

        let remove = () => {
            block.classList.remove('active');
            sObj.html.classList.remove('block-active');
        };

        this.time2 = setTimeout(remove, this.speed);

        i = (i < blocks.length - 1) ? i + 1 : 0;

        if (this.anim)
            this.time1 = setTimeout(() => this.animate(i), this.speed);
    }
}

setTimeout(() => Coder.init(), 50);
