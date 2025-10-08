# 🗄️ Relación de Tablas - Base de Datos SaaS Ganado

## 📋 Resumen de Arquitectura

Base de datos MongoDB con estructura relacional para gestión integral de ganado, IA, clima, comunidad y marketplace.

---

## 🔗 Diagrama de Relaciones

```
Users (1) -----> (N) Ganado
Users (1) -----> (N) Alertas
Users (1) -----> (N) PostsForo
Users (1) -----> (N) ConfiguracionClima
Users (1) -----> (N) PerfilesUsuario

Ganado (1) -----> (N) ProduccionLeche
Ganado (1) -----> (N) PrediccionesIA
Ganado (1) -----> (N) ConsultasVeterinarias
Ganado (1) -----> (N) HistorialAlertas
Ganado (1) -----> (N) AnalisisGenetico

Sementales (1) -----> (N) AnalisisGenetico
Sementales (1) -----> (N) CrucesRecomendados

Veterinarios (1) -----> (N) ConsultasVeterinarias
Veterinarios (1) -----> (N) Eventos

Foros (1) -----> (N) PostsForo
PostsForo (1) -----> (N) RespuestasForo

Mercados (1) -----> (N) PreciosMercado
Eventos (1) -----> (N) InscripcionesEventos
```

---

## 📊 Tablas Core Existentes

### **👤 Users**
```typescript
interface User {
  _id: ObjectId;
  email: string;
  password: string;
  name: string;
  plan: 'free' | 'pro' | 'genetic';
  created_at: Date;
  updated_at: Date;
}
```

### **🐄 Ganado**
```typescript
interface Ganado {
  _id: ObjectId;
  user: ObjectId; // Referencia a Users
  nombre: string;
  raza: string;
  peso: number;
  edad: number;
  estado: string;
  fechaIngreso: Date;
  numeroIdentificacion: string;
  sexo: 'macho' | 'hembra';
  categoria: 'vaca' | 'toro' | 'ternero' | 'vaquilla' | 'novillo';
  estadoReproductivo?: 'vacia' | 'preñada' | 'lactando' | 'seca';
  fechaUltimoCelo?: Date;
  fechaUltimaMonta?: Date;
  fechaInseminacion?: Date;
  toroPadre?: string;
  fechaEsperadaParto?: Date;
  tiempoSeca?: number;
  diasLactancia?: number;
  numeroPartos?: number;
  ultimaProduccionLeche?: number;
  historialVacunas?: string[];
  proximaVacuna?: string;
  observaciones?: string;
  created_at: Date;
  updated_at: Date;
}
```

### **🥛 ProduccionLeche**
```typescript
interface ProduccionLeche {
  _id: ObjectId;
  user: ObjectId; // Referencia a Users
  ganado: ObjectId; // Referencia a Ganado
  fecha: Date;
  cantidad: number;
  observaciones?: string;
  created_at: Date;
  updated_at: Date;
}
```

### **💰 Finanza**
```typescript
interface Finanza {
  _id: ObjectId;
  user: ObjectId; // Referencia a Users
  tipo: 'ingreso' | 'gasto';
  monto: number;
  descripcion: string;
  categoria: string;
  fecha: Date;
  created_at: Date;
  updated_at: Date;
}
```

### **📊 Reporte**
```typescript
interface Reporte {
  _id: ObjectId;
  user: ObjectId; // Referencia a Users
  tipo: string;
  datos: any;
  fechaGeneracion: Date;
  created_at: Date;
  updated_at: Date;
}
```

---

## 🚨 Tablas Nuevas - Sistema de Alertas (FASE 1)

### **🔔 Alertas**
```typescript
interface Alertas {
  _id: ObjectId;
  user: ObjectId; // Referencia a Users
  tipo: 'dia_60' | 'celo' | 'preparto' | 'vacuna' | 'tratamiento';
  descripcion: string;
  dias_antes: number;
  activa: boolean;
  created_at: Date;
  updated_at: Date;
}
```

### **📝 HistorialAlertas**
```typescript
interface HistorialAlertas {
  _id: ObjectId;
  user: ObjectId; // Referencia a Users
  ganado: ObjectId; // Referencia a Ganado
  tipo_alerta: string;
  mensaje: string;
  fecha_envio: Date;
  leida: boolean;
  created_at: Date;
}
```

### **⚙️ ConfiguracionUsuario**
```typescript
interface ConfiguracionUsuario {
  _id: ObjectId;
  user: ObjectId; // Referencia a Users
  alertas_email: boolean;
  alertas_push: boolean;
  alertas_sms: boolean;
  idioma: 'es' | 'qu';
  zona_horaria: string;
  created_at: Date;
  updated_at: Date;
}
```

---

## 🌡️ Tablas Nuevas - Clima Local (FASE 1)

### **🌦️ DatosClima**
```typescript
interface DatosClima {
  _id: ObjectId;
  region: string;
  fecha: Date;
  temperatura_max: number;
  temperatura_min: number;
  precipitacion: number;
  humedad: number;
  viento: number;
  created_at: Date;
}
```

### **⚠️ AlertasClima**
```typescript
interface AlertasClima {
  _id: ObjectId;
  user: ObjectId; // Referencia a Users
  tipo: 'lluvia' | 'sequia' | 'helada' | 'calor_extremo';
  mensaje: string;
  fecha_alerta: Date;
  activa: boolean;
  created_at: Date;
  updated_at: Date;
}
```

### **🌍 ConfiguracionClima**
```typescript
interface ConfiguracionClima {
  _id: ObjectId;
  user: ObjectId; // Referencia a Users
  region: string;
  alertas_lluvia: boolean;
  alertas_sequia: boolean;
  alertas_heladas: boolean;
  created_at: Date;
  updated_at: Date;
}
```

---

## 🤝 Tablas Nuevas - Comunidad (FASE 2)

### **💬 Foros**
```typescript
interface Foros {
  _id: ObjectId;
  titulo: string;
  descripcion: string;
  categoria: 'reproduccion' | 'sanidad' | 'alimentacion' | 'genetica';
  activo: boolean;
  created_at: Date;
  updated_at: Date;
}
```

### **📝 PostsForo**
```typescript
interface PostsForo {
  _id: ObjectId;
  foro: ObjectId; // Referencia a Foros
  user: ObjectId; // Referencia a Users
  titulo: string;
  contenido: string;
  likes: number;
  respuestas: number;
  created_at: Date;
  updated_at: Date;
}
```

### **💬 RespuestasForo**
```typescript
interface RespuestasForo {
  _id: ObjectId;
  post: ObjectId; // Referencia a PostsForo
  user: ObjectId; // Referencia a Users
  contenido: string;
  likes: number;
  created_at: Date;
  updated_at: Date;
}
```

### **👤 PerfilesUsuario**
```typescript
interface PerfilesUsuario {
  _id: ObjectId;
  user: ObjectId; // Referencia a Users
  region: string;
  experiencia_anos: number;
  especializacion: string[];
  reputacion: number;
  foto_perfil?: string;
  created_at: Date;
  updated_at: Date;
}
```

---

## 🤖 Tablas Nuevas - IA Avanzada (FASE 3)

### **🔮 PrediccionesIA**
```typescript
interface PrediccionesIA {
  _id: ObjectId;
  user: ObjectId; // Referencia a Users
  ganado: ObjectId; // Referencia a Ganado
  tipo_prediccion: 'parto' | 'celo' | 'preñez' | 'enfermedad';
  resultado: any;
  confianza: number;
  fecha_prediccion: Date;
  created_at: Date;
}
```

### **🧠 ModelosIA**
```typescript
interface ModelosIA {
  _id: ObjectId;
  nombre: string;
  version: string;
  tipo: 'reproduccion' | 'produccion' | 'sanidad';
  parametros: any;
  precision: number;
  activo: boolean;
  created_at: Date;
  updated_at: Date;
}
```

### **📚 HistorialEntrenamiento**
```typescript
interface HistorialEntrenamiento {
  _id: ObjectId;
  modelo: ObjectId; // Referencia a ModelosIA
  fecha_entrenamiento: Date;
  precision_anterior: number;
  precision_nueva: number;
  datos_utilizados: number;
  created_at: Date;
}
```

---

## 🌦️ Tablas Nuevas - Clima Avanzado (FASE 3)

### **📋 ProtocolosClima**
```typescript
interface ProtocolosClima {
  _id: ObjectId;
  nombre: string;
  tipo_condicion: 'lluvia' | 'sequia' | 'helada' | 'calor';
  accion_recomendada: string;
  dias_antes: number;
  created_at: Date;
  updated_at: Date;
}
```

### **📊 HistorialProtocolos**
```typescript
interface HistorialProtocolos {
  _id: ObjectId;
  user: ObjectId; // Referencia a Users
  protocolo: ObjectId; // Referencia a ProtocolosClima
  fecha_aplicacion: Date;
  resultado: string;
  created_at: Date;
}
```

---

## 🧬 Tablas Nuevas - Genética (FASE 4)

### **🐂 Sementales**
```typescript
interface Sementales {
  _id: ObjectId;
  nombre: string;
  raza: string;
  fecha_nacimiento: Date;
  peso: number;
  caracteristicas_geneticas: any;
  precio: number;
  disponibilidad: boolean;
  created_at: Date;
  updated_at: Date;
}
```

### **🧪 AnalisisGenetico**
```typescript
interface AnalisisGenetico {
  _id: ObjectId;
  ganado: ObjectId; // Referencia a Ganado
  semental: ObjectId; // Referencia a Sementales
  tipo_analisis: string;
  resultado: any;
  fecha_analisis: Date;
  created_at: Date;
}
```

### **🌳 LineasSanguineas**
```typescript
interface LineasSanguineas {
  _id: ObjectId;
  ganado: ObjectId; // Referencia a Ganado
  padre: ObjectId; // Referencia a Ganado
  madre: ObjectId; // Referencia a Ganado
  generacion: number;
  created_at: Date;
  updated_at: Date;
}
```

### **💡 CrucesRecomendados**
```typescript
interface CrucesRecomendados {
  _id: ObjectId;
  user: ObjectId; // Referencia a Users
  ganado: ObjectId; // Referencia a Ganado
  semental: ObjectId; // Referencia a Sementales
  probabilidad_exito: number;
  razon: string;
  created_at: Date;
}
```

---

## 🏥 Tablas Nuevas - Red Veterinaria (FASE 4)

### **👨‍⚕️ Veterinarios**
```typescript
interface Veterinarios {
  _id: ObjectId;
  nombre: string;
  especialidad: string[];
  region: string;
  telefono: string;
  email: string;
  disponibilidad: any;
  calificacion: number;
  created_at: Date;
  updated_at: Date;
}
```

### **🩺 ConsultasVeterinarias**
```typescript
interface ConsultasVeterinarias {
  _id: ObjectId;
  user: ObjectId; // Referencia a Users
  veterinario: ObjectId; // Referencia a Veterinarios
  ganado: ObjectId; // Referencia a Ganado
  tipo_consulta: 'presencial' | 'virtual';
  descripcion: string;
  fecha_consulta: Date;
  estado: 'programada' | 'realizada' | 'cancelada';
  created_at: Date;
  updated_at: Date;
}
```

### **📜 ProtocolosSENASA**
```typescript
interface ProtocolosSENASA {
  _id: ObjectId;
  nombre: string;
  descripcion: string;
  requisitos: string[];
  fecha_vigencia: Date;
  created_at: Date;
  updated_at: Date;
}
```

---

## 💰 Tablas Nuevas - Marketplace (FASE 5)

### **🛒 ProductosMarketplace**
```typescript
interface ProductosMarketplace {
  _id: ObjectId;
  vendedor: ObjectId; // Referencia a Users
  tipo: 'semental' | 'insumo' | 'servicio';
  nombre: string;
  descripcion: string;
  precio: number;
  disponibilidad: boolean;
  calificacion: number;
  created_at: Date;
  updated_at: Date;
}
```

### **💳 Transacciones**
```typescript
interface Transacciones {
  _id: ObjectId;
  comprador: ObjectId; // Referencia a Users
  vendedor: ObjectId; // Referencia a Users
  producto: ObjectId; // Referencia a ProductosMarketplace
  monto: number;
  comision: number;
  estado: 'pendiente' | 'completada' | 'cancelada';
  fecha_transaccion: Date;
  created_at: Date;
  updated_at: Date;
}
```

### **⭐ Resenas**
```typescript
interface Resenas {
  _id: ObjectId;
  transaccion: ObjectId; // Referencia a Transacciones
  evaluador: ObjectId; // Referencia a Users
  evaluado: ObjectId; // Referencia a Users
  calificacion: number;
  comentario: string;
  created_at: Date;
}
```

---

## 🌟 Tablas Nuevas - Ecosistema (FASE 5)

### **🏪 Mercados**
```typescript
interface Mercados {
  _id: ObjectId;
  nombre: string;
  region: string;
  tipo: 'cooperativa' | 'mercado_local' | 'exportador';
  contacto: any;
  precios_api: string;
  created_at: Date;
  updated_at: Date;
}
```

### **💰 PreciosMercado**
```typescript
interface PreciosMercado {
  _id: ObjectId;
  mercado: ObjectId; // Referencia a Mercados
  producto: string;
  precio: number;
  fecha: Date;
  created_at: Date;
}
```

### **📅 Eventos**
```typescript
interface Eventos {
  _id: ObjectId;
  titulo: string;
  descripcion: string;
  fecha: Date;
  tipo: 'capacitacion' | 'webinar' | 'charla';
  instructor: ObjectId; // Referencia a Veterinarios
  participantes_max: number;
  created_at: Date;
  updated_at: Date;
}
```

### **📝 InscripcionesEventos**
```typescript
interface InscripcionesEventos {
  _id: ObjectId;
  evento: ObjectId; // Referencia a Eventos
  user: ObjectId; // Referencia a Users
  fecha_inscripcion: Date;
  estado: 'confirmada' | 'lista_espera' | 'cancelada';
  created_at: Date;
}
```

---

## 🔍 Índices Recomendados

```javascript
// Índices para optimización de consultas
db.ganado.createIndex({ "user": 1 });
db.ganado.createIndex({ "user": 1, "estado": 1 });
db.ganado.createIndex({ "fechaEsperadaParto": 1 });

db.historialalertas.createIndex({ "user": 1, "fecha_envio": -1 });
db.historialalertas.createIndex({ "ganado": 1 });

db.produccionleche.createIndex({ "fecha": -1 });
db.produccionleche.createIndex({ "ganado": 1, "fecha": -1 });

db.prediccionesia.createIndex({ "ganado": 1 });
db.prediccionesia.createIndex({ "tipo_prediccion": 1 });

db.datosclima.createIndex({ "fecha": -1 });
db.datosclima.createIndex({ "region": 1, "fecha": -1 });

db.postsforo.createIndex({ "foro": 1, "created_at": -1 });
db.postsforo.createIndex({ "user": 1 });

db.transacciones.createIndex({ "comprador": 1 });
db.transacciones.createIndex({ "vendedor": 1 });
db.transacciones.createIndex({ "estado": 1 });
```

---

## 📊 Agregaciones Comunes

### **Dashboard Principal:**
```javascript
// Estadísticas del rebaño por usuario
db.ganado.aggregate([
  { $match: { user: ObjectId("user_id") } },
  {
    $group: {
      _id: "$estado",
      count: { $sum: 1 }
    }
  }
]);

// Alertas pendientes
db.historialalertas.aggregate([
  { $match: { user: ObjectId("user_id"), leida: false } },
  { $sort: { fecha_envio: -1 } },
  { $limit: 10 }
]);
```

### **Análisis de Producción:**
```javascript
// Producción mensual por animal
db.produccionleche.aggregate([
  { $match: { ganado: ObjectId("ganado_id") } },
  {
    $group: {
      _id: { 
        year: { $year: "$fecha" },
        month: { $month: "$fecha" }
      },
      total_produccion: { $sum: "$cantidad" },
      promedio_diario: { $avg: "$cantidad" }
    }
  },
  { $sort: { "_id.year": -1, "_id.month": -1 } }
]);
```

---

*Documento creado: $(date)*
*Versión: 1.0*
*Estado: Planificación*
