import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { DeviceMotion , DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ballwidthNumber: number = 150;
perdio: boolean = false;

  x:string;
  y:string;
  z:string;
  timeStamp:string;
  id: any;
  count: number;
  arranco: boolean;
  color: string;
  golpe : string;
  pego: boolean;
  message: string;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public deviceMotion :DeviceMotion
  ) {
    /* this.x="-";
    this.y="-"; */
    this.z="-";
    //this.timeStamp="-";
    this.count = 0;
    this.arranco = false;
    this.color = "";
    this.golpe = "Golpe";
    this.start();
    this.message = "Pica para jugar!";
  }
  
  /* 
  let toast2 = this.toastCtrl.create({
    message: 'Golpear',
    duration: 1000,
    position: 'middle'
  }) 
  toast2.present(toast2);
    
  */
  showMoveBall(){
    if(!this.arranco){
      this.arranco = true;
      let toast = this.toastCtrl.create({
        message: 'Baja',
        duration: 5000,
        position: 'middle'
      });
      toast.present(toast);
    }
  }

  refresh(){
    //console.log('ee!');
    this.count = 0;
    this.color = "primary";
    this.message = "Pica para jugar!";
    this.z = "-";
    this.agrandar();
    this.perdio = false;
    this.arranco = false;    
    //this.ballwidthNumber = 0;
  // this.stop();
    this.start();
   }

  sumaPtos(){
    this.count +=1;
  }

  start(){

    this.deviceMotion.getCurrentAcceleration().then(
      (acceleration: DeviceMotionAccelerationData) => console.log('acc!',acceleration),
      (error: any) => console.log(error)
    );

    try{
      let option: DeviceMotionAccelerometerOptions ={
        frequency: 200,
      };

      this.id = this.deviceMotion.watchAcceleration(option).subscribe((acc: DeviceMotionAccelerationData)=>{
        this.x = ""+ acc.x;
        this.y = ""+ acc.y;
        this.z = ""+ acc.z;
        this.ballwidthNumber = $(".ball").width();
        if(this.ballwidthNumber >= 120){
          this.color = "secondary";
        }else{
          this.color="danger";
        }
        if(acc.z >= 12)
        {
          if(!this.arranco){
              this.arranco = true; 
              this.message = "Jugando";
              this.achicar();
              this.agrandar();
              
          }
          else
          {
            
              this.pego=false;
              if(this.ballwidthNumber >=80 && this.ballwidthNumber <= 145){
                this.pego= true;
                this.sumaPtos();
                this.achicar();
                //if x y
                this.agrandar();
                //else otro lado
              } 
              if(this.ballwidthNumber > 145 && !this.pego){
                
                this.message = "Perdiste! Total puntos: " + this.count

                $(".ball").css({"width":"150px", "height": "150px","left": "50%", "top": "50%"});
                this.perdio = true;
                this.stop();
              }
            } 
          }
      })
    }catch(err){
      alert("Error" + err);
    }
  }
  stop(){
    this.id.unsubscribe();  
  }

  withBall(){
    this.ballwidthNumber = $(".ball").width();
    
  }
  achicar() {
    $(".ball").animate({ width: '10px', height: '10px',left: '50%', top: '50%' },3000);
    //this.withBall();
  }
  agrandar() {
    $(".ball").animate({ width: '150px', height: '150px',left: '50%', top: '50%' },3000);
    //this.withBall();
  }
  vaArriba() {
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
  }
}
