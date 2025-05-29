export interface Producto {
  nombre: string
  foto: string
  tamaño: number
  descripcion: string
  categoria: Categorias
  precio: number
}

type Categorias = "Amigurumis" | "Bolsos" | "Decoración"