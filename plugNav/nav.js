export  class Nav {
    constructor(options) {
        this.nav = options.data,
        this.logo = options.logo
       
        
        console.log('dom')
        this.navlist()
       
    }
    navlist() {
     //   let btn = document.querySelector('button')
        let cub = document.querySelector('.nav')

        let div1 = document.createElement('div')
        let div2 = document.createElement('div')
        div1.classList.add('logodiv1')
        div2.classList.add('logodiv2')
        
        cub.insertAdjacentElement('afterbegin',div1)
        cub.insertAdjacentElement('beforeend',div2)
        
       
        let elarr = []
        document.addEventListener('DOMContentLoaded', () => {

           

            this.nav.forEach((item) => {

                let el = `<div class="btna">${item}</div>`
                elarr.push(el)
            })
            div2.innerHTML = elarr.join('')

            let img = `<img src="${this.logo}" alt="mmmmmmm">`
            div1.innerHTML = img
           
            
        }
        // ,{once: true}
        )
        
    } 
    
    
}

