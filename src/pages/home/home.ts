import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'

import { DeviceMotion , DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ballwidthNumber: number = 150;
  perdio: boolean = false;
  count: number;
  arranco: boolean;
  color:string;
  golpe: string;
  message:string;
  pego:boolean;

  x:string;
  y:string;
  z:number;
  timeStamp:string;
  
  id:any;

  constructor(
    public navCtrl: NavController,
    public device : DeviceMotion,
  ) {
    this.z = 0;
    this.timeStamp = "-";
    
    this.count = 0;
    this.arranco = false;
    this.color = "";
    this.golpe = "Golpe";
    this.message = "Pica para comenzar";
    this.start()
  }

  refresh(){
    this.count = 0;
    this.color = "primary";
    this.message = "Pica para Jugar!";
    this.z = 0;
    this.perdio = false;
    this.arranco = false;
    this.start();
  }

  start(){

    /* getCurrentAcceleration() 
    this.device.getCurrentAcceleration().then(
      (acceleration: DeviceMotionAccelerationData) => console.log('acc!',acceleration),
      (error: any) => console.log(error)
    ); */

    try{

      let option: DeviceMotionAccelerometerOptions = {
        frequency : 200
      };

      this.id = this.device.watchAcceleration(option).subscribe((acc: DeviceMotionAccelerationData)=>{

        this.z = Math.floor(acc.z);
        this.timeStamp = ""+acc.timestamp;
        
        this.ballwidthNumber = $(".ball").width();

        if(this.ballwidthNumber >= 120){
          this.color = "secondary";
        }else{
          this.color = "danger";
        }

        if(this.z >= 12){
          if(!this.arranco){
            this.arranco = true;
            this.message = "Jugando";
            this.achicar();
            this.agrandar();
          }else{
            this.pego=false;
            if(this.ballwidthNumber >=80 && this.ballwidthNumber <= 145){
              this.pego = true;
              this.count +=1;
              this.achicar();
              this.agrandar();
            } 
            if(this.ballwidthNumber > 145 && !this.pego){             
              this.message = "Perdiste!. Total puntos: "+ this.count;
              
              $(".ball").css({"width":"150px", "height": "150px","left": "50%", "top": "50%"})
              this.perdio=true;
              this.stop();
            }
          }
        }
      })

    }catch(err){
      alert("Error "+ err);
    }

  }

  stop(){
    this.id.unsubscribe();
  }

  achicar() {
    $(".ball").animate({ width: '10px', height: '10px',left: '50%', top: '50%' },3000);
    //this.withBall();
  }
  agrandar() {
    $(".ball").animate({ width: '150px', height: '150px',left: '50%', top: '50%' },3000);
    //this.withBall();
  }

}
  /* vaArriba() {
    $(".ball").animate({ width: '300px', height: '300px', top: "-800px" });
  }
  vaAbajo() {
    $(".ball").animate({ width: '300px', height: '300px', top: "800px" });
  }
  vaDerecha() {
    $(".ball").animate({ width: '300px', height: '300px', left: "800px" });
  }
  vaIzquierda() {
    $(".ball").animate({ width: '300px', height: '300px', left: "-800px" });
  }
  vaRebota() {
    $(".ball").animate({ width: '10px', height: '10px',left: '50%', top: '50%' });
    $(".ball").animate({ width: '50px', height: '50px',left: '50%', top: '50%' });
    $(".ball").animate({ width: '10px', height: '10px',left: '50%', top: '50%' });
    $(".ball").animate({ width: '30px', height: '30px',left: '50%', top: '50%' });
    $(".ball").animate({ width: '10px', height: '10px',left: '50%', top: '50%' });
  } */
