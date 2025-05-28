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
    nombre: "Bluey",
    foto: "bluey.webp",
    tamaño: 6,
    descripcion: "Tierno osito de crochet, ideal como regalo para niños y bebés.",
    categotia: "amigurumis"
  }
] 