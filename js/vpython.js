let state = true;

window.__context = { glowscript_container: $("#glowscript1") }
cubo()

document.getElementById('mudar').addEventListener('click', () => {
    state = !state;
    if(state){
        $('#glowscript1').empty();
        window.__context = { glowscript_container: $("#glowscript1") };
        cubo()

    } else {
        $('#glowscript1').empty();
        window.__context = { glowscript_container: $("#glowscript1") };
        cilindro()
    }
})



async function cubo() {
    var vector = vec
    let scene = canvas()
    scene.range = 2
    let b = box({color:color.cyan})
    
    async function f(obj) {
        let t = clock()

        while (true) {
            await rate(100)
            obj.rotate({angle:0.07, axis:vec(0,1,1)})
            if (clock()-t > 3) break
        }

        return 0
    }

    let x = await f(b)
}

async function cilindro() {

    var vector = vec
    let scene = canvas()
    scene.range = 2
    let b = cylinder({color:color.cyan})
}

async function esfera() {

    var vector = vec
    let scene = canvas()
    scene.range = 2
    let b = sphere({color:color.cyan})
}

let cond = 1
window.addEventListener('scroll', () => {

    if(window.scrollY < 200 && cond == 0) {
        $('#glowscript2').empty();
        window.__context = { glowscript_container: $("#glowscript1") };
        cubo();
        
        cond = 1;
    }

    if(window.scrollY > 200 && cond == 1) {
        $('#glowscript1').empty();
        window.__context = { glowscript_container: $("#glowscript2") };
        esfera();

        cond = 0;
    }
})