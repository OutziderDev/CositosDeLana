export interface Producto {
  nombre: string;
  foto: string;
  tamaño: number;
  descripcion: string;
  categoria: Categorias;
  precio: number;
  cantidad?: number;
}

type Categorias = "Amigurumis" | "Bolsos" | "Accesorios";
