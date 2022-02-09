import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // quote: string | undefined;
  isLoading = false;
  class=0

  response?:string
  upload?:string

  formNumber?:FormGroup

  constructor(
    private firestore: AngularFirestore,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    
    // this.quoteService.getRandomQuote({ category: 'dev' })
    //   .pipe(finalize(() => { this.isLoading = false; }))
    //   .subscribe((quote: string) => { this.quote = quote; });

    this.formNumber = this.formBuilder.group({
      number:['',[Validators.required]],
    })

    //revisar los cambios y al borrar la informacion, ocultar la respuesta
    this.formNumber.get('number')?.valueChanges.subscribe(value=>{
      if(!value){
        this.response = undefined;
        this.upload = undefined;
        this.class = 0
        this.isLoading = false
      }
    })
  }

  showAnswer(){

    //activar animacion de carga
    this.isLoading = true;

    //obtener valor del formulario
    const number = +this.formNumber?.value.number

    //multiplos a revisar
    const multiple = [3,5,7]

    const answer = []

    for (let i = 0; i < multiple.length; i++) {

      const num = multiple[i];

      if (number%num == 0) {
        answer.push(num)
      } 
    }

    this.isLoading = false

    if (answer.length > 0) {
       //mostrar la informacion
      this.response = `${number} [${answer.toString().replace(/,/g,' y ')}]`

      //si existen los 3 multiplos, coloca una coma en la primera aparicion
      this.response = this.response.includes('y 5 y') ? this.response.replace(' y',',') :  this.response
      
      //seleccionar la clase
      this.class = answer[0]
    } else {
      this.response = 'Sin multiplos'
      this.upload = undefined
      this.class=0
    }

    //enviar los multiplos o el texto sin multiplos
    const multiplos = answer.length > 0 ? answer.toString().replace(/[\[\]]/g,'') : this.response

    this.sendData(number,multiplos)

  }

  sendData(data:number,multiplos:string){
    this.firestore.collection('numeros').add({numero:data,multiplos}).then((resp) => {

      this.upload = `Enviado correctamente con id ${resp.id}`

    }).catch(err=>{

      console.log(err)
      this.upload = 'Error al enviar a DB'

    })
  }

}
