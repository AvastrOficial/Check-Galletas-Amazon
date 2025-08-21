# Check-Galletas-Amazon 🔎🍪

Este proyecto es una herramienta web sencilla para **validar cookies** en línea, ofreciendo retroalimentación inmediata sobre su validez.  

Web : https://chekerv2bsz.foroactivo.com/h15-amazon
---

## 🚀 ¿Para qué sirve?

- Permite **pegar una cookie** en un campo de texto y comprobar si es válida o inválida.  
- Muestra el resultado en pantalla y actualiza el estado en tiempo real.  
- Incluye funciones adicionales:  
  - 📋 Copiar el resultado al portapapeles.  
  - 💾 Descargar la cookie en un archivo `.txt` como respaldo.  

---

## 🛠️ Tecnologías y APIs utilizadas

### 1. **API de Validación**
- URL: `https://centralabobora.shop/api.php?validate_cookie=...`  
- Esta API se encarga de **procesar y verificar la cookie** proporcionada.  
- Devuelve un texto indicando si la cookie fue **válida** o **reprobada**.

### 2. **Proxy AllOrigins**
- URL: `https://api.allorigins.win/raw?url=`  
- Se utiliza como **proxy gratuito** para evitar problemas de **CORS** (Cross-Origin Resource Sharing).  
- Esto permite que el navegador pueda acceder a la API externa sin restricciones de origen.

---

## 📌 ¿Por qué se usan proxys?

El navegador bloquea solicitudes directas a dominios externos por motivos de seguridad (CORS).  
Para evitarlo, se usa **AllOrigins** como intermediario:  

1. El navegador envía la petición al proxy.  
2. El proxy la reenvía a la API de validación.  
3. El proxy devuelve la respuesta al navegador sin bloqueos.  

De esta forma, el sistema funciona en cualquier navegador sin configuraciones adicionales.

