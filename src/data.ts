interface Producto {
  nombre: string
  foto: string
  tamaño: number
  descripcion: string
  categotia: Categorias
}

type Categorias = "amigurumis" | "bolsos" | "decoracion"

export const productos: Producto[] = [
  {
    nombre: "Bunny",
    foto: "bunny.webp",
    tamaño: 6,
    descripcion: "Tierno conejito de crochet, ideal como regalo de san valentin!",
    /* descripcion: "Tierno osito de crochet, ideal como regalo para niños y bebés.", */
    categotia: "amigurumis"
  },
  {
    nombre: "Bolso de tira",
    foto: "bolso-camila.webp",
    tamaño: 10,
    descripcion: "Bolso de tira tejido a mano, ideal para llevar tus cosas con estilo.",
    categotia: "bolsos"
  },
  {
    nombre: "Stitch & Angel",
    foto: "stitch.webp",
    tamaño: 4,
    descripcion: "Pareja de amigurumis de Stitch y Angel, perfectos para los amantes de Disney.",
    categotia: "amigurumis"
  }
] 