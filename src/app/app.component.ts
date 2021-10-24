import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  numIntegrantes = 0;
  sinElegir: string[] = ["?", "?", "?"];
  equipo: string[] = [];
  btnDisabled = false;

  agregarIntegrante(nombre: string) {
    this.equipo.push(nombre);
    this.sinElegir.splice(0, 1);
    this.numIntegrantes++;
    if(this.numIntegrantes > 2){
      this.btnDisabled = true;
    }
  }

  eliminarIntegrante(index: number) {
    this.equipo.splice(index, 1);
    this.sinElegir.push('?');
    this.numIntegrantes--;
    if(this.btnDisabled == true){
      this.btnDisabled = false;
    }
  }

  personajes = [
    {
      nombre: "SHUN'EI",
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/e/ed/Kof_xv_shunei_render.png'
    },
    {
      nombre: 'MEITENKUN',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/0/0a/Kof_xv_meitenkun_render.png'
    },
    {
      nombre: 'BENIMARU',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/c/c1/Kof_xv_benimaru_render.png'
    },
    {
      nombre: 'KYO',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/e/e2/Kof_xv_kyo_render.png'
    },
    {
      nombre: 'IORI',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/4/47/Kof_xv_iori_render.png'
    },
    {
      nombre: 'CHIZURU',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/9/9e/Kof_xv_chizuru_render.png'
    },
    {
      nombre: 'TERRY',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/4/41/Kof_xv_terry_render.png'
    },
    {
      nombre: 'ANDY',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/d/df/Kof_xv_andy_render.png'
    },
    {
      nombre: 'JOE',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/7/7b/Kof_xv_joe_render.png'
    },
    {
      nombre: 'YASHIRO',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/a/a4/Kof_xv_yashiro_render.png'
    },
    {
      nombre: 'SHERMIE',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/1/1f/Kof_xv_shermie_render.png'
    },
    {
      nombre: 'CHRIS',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/2/20/Kof_xv_chris_render.png'
    },
    {
      nombre: 'RYO',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/7/70/Kof_xv_ryo_render.png'
    },
    {
      nombre: 'ROBERT',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/8/8a/Kof_xv_robert_render.png'
    },
    {
      nombre: 'KING',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/1/17/Kof_xv_king_render.png'
    },
    {
      nombre: 'LEONA',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/6/66/Kof_xv_leona_render.png'
    },
    {
      nombre: 'RALF',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/6/6d/Kof_xv_ralf_render.png'
    },
    {
      nombre: 'CLARK',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/2/2f/Kof_xv_clark_render.png'
    },
    {
      nombre: 'VANESSA',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/b/bb/Kof_xv_vanessa_render.png'
    },
    {
      nombre: 'MARY',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/4/45/Kof_xv_blue_mary_render.png'
    },
    {
      nombre: 'LUONG',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/4/4e/Kof_xv_luong_render.png'
    },
    {
      nombre: 'ATHENA',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/f/fa/Kof_xv_athena_render.png'
    },
    {
      nombre: 'MAI',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/e/e6/Kof_xv_mai_render.png'
    },
    {
      nombre: 'YURI',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/3/34/Kof_xv_yuri_render.png'
    },
    {
      nombre: 'ANTONOV',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/0/0e/Kof_xv_antonov_render.png'
    },
    {
      nombre: 'RAMON',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/a/af/Kof_xv_ramon_render.png'
    },
    {
      nombre: 'K.O.D',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/d/d9/Kof_xv_dinosaur_render.png'
    },
    {
      nombre: 'ASH',
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/a/a8/Kofxvashrender.png'
    },
    {
      nombre: "K'",
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/2/2c/Kof_xv_k_dash_render.png'
    },
    {
      nombre: "ISLA",
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/d/d9/Kof_xv_isla_render.png'
    },
    {
      nombre: "HEIDERN",
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/9/9f/Kofxvheidernrender.png'
    },
    {
      nombre: "KUKRI",
      rutaImagen: 'https://static.wikia.nocookie.net/snk/images/0/0f/Kofxvkukrirender.png'
    }
    
  ]
}
//FALTA ANDI