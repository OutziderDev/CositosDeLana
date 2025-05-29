import type { Producto } from "./types/Producto"

export const productos: Producto[] = [
  {
    nombre: "Bunny",
    foto: "bunny.webp",
    tamaño: 6,
    descripcion: "Tierno conejito de crochet, ideal como regalo de san valentin!",
    /* descripcion: "Tierno osito de crochet, ideal como regalo para niños y bebés.", */
    categoria: "amigurumis",
    precio: 10.00
  },
  {
    nombre: "Bolso de tira",
    foto: "bolso-camila.webp",
    tamaño: 10,
    descripcion: "Bolso de tira tejido a mano, ideal para llevar tus cosas con estilo.",
    categoria: "bolsos",
    precio: 15.00
  },
  {
    nombre: "Stitch & Angel",
    foto: "stitch.webp",
    tamaño: 4,
    descripcion: "Pareja de amigurumis de Stitch y Angel, perfectos para los amantes de Disney.",
    categoria: "amigurumis",
    precio: 8.00
  }
] 