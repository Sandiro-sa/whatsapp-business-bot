# WhatsApp Business Bot - Guía de Uso
## 📱 Descripción
Chatbot gratuito para WhatsApp Business que responde automáticamente a tus clientes. Ejecutable desde ISH en iPhone 11.
## ⚙️ Requisitos
### En tu iPhone 11 con ISH:
1. **ISH Shell** instalado desde App Store
2. **Node.js** instalado en ISH (si no está, ejecuta: `apk add nodejs npm`)
3. Conexión a internet estable
## 🚀 Instalación Paso a Paso
### Paso 1: Clonar el repositorio
```bash
# En ISH, navega a tu carpeta de trabajo
cd ~
# Clona tu repositorio (cambia el URL por el de tu repositorio GitHub)
git clone https://github.com/sandiro-sa/whatsapp-business-bot.git
# Entra al directorio
cd whatsapp-business-bot
```
### Paso 2: Instalar dependencias
```bash
npm install
```
### Paso 3: Personalizar las respuestas
```bash
# Edita el archivo bot.js
nano bot.js
```
**Importante:** Busca la sección `CONFIGURACIÓN DEL BOT - PERSONALIZA AQUÍ` y cambia:
- Las respuestas de texto
- Las palabras clave
- La información de tu negocio
Presiona `Ctrl + O` para guardar, luego `Ctrl + X` para salir.
### Paso 4: Iniciar el bot
```bash
npm start
```
## 📱 Primer Ejecución
1. **Ejecuta el bot:** `npm start`
2. **Verás un código QR** en tu terminal
3. **Abre WhatsApp** en tu teléfono principal
4. **Ve a:** Ajustes → Dispositivos vinculados → Vincular un dispositivo
5. **Escanea el QR** que aparece en ISH
6. **¡Listo!** El bot estará conectado y respondiendo automáticamente
## 🔧 Personalización
### Cómo cambiar las respuestas:
1. Abre `bot.js`
2. Busca esta sección:
```javascript
const respuestas = {
  'hola': 'Tu mensaje personalizado aquí',
  'horario': 'Tu horario personalizado',
  // ... más respuestas
};
```
3. Cambia los textos entre comillas
4. Agrega nuevas palabras clave si necesitas:
```javascript
'tu_palabra': 'Tu respuesta personalizada',
```
### Palabras clave recomendadas:
- `hola`, `buenos dias`, `buenas tardes`
- `horario`, `ubicacion`, `precio`
- `productos`, `servicios`, `contacto`
- `pedido`, `compra`, `envio`
- `telefono`, `email`, `garantia`
## 🛑 Detener el bot
Presiona `Ctrl + C` en la terminal de ISH
## 🔁 Reiniciar el bot
```bash
npm start
```
## ⚠️ Consideraciones Importantes
### Limitaciones de WhatsApp:
- **No uses spam** - WhatsApp puede bloquear tu número
- **Respuestas automáticas** - Solo usa para información básica
- **Horario de uso** - Evita enviar mensajes nocturnos
### Sobre ISH en iPhone:
- ISH emula un entorno Linux en tu iPhone
- Necesitas conexión internet constante
- El bot debe estar ejecutándose para responder
- Si cierras ISH, el bot se detiene
### Alternativa recomendada:
Para uso 24/7, considera:
- Un servidor VPS gratuito (Oracle Cloud, Google Cloud Free Tier)
- Un Raspberry Pi en tu casa
- Un servicio de hosting gratuito
## 🐛 Solución de Problemas
### Error: "Cannot find module"
```bash
npm install
```
### Error: "Puppeteer" o "Chrome"
```bash
# Reinstalar dependencias
rm -rf node_modules
npm install
```
### QR no aparece o no conecta:
1. Cierra el bot (Ctrl + C)
2. Elimina la carpeta de autenticación:
```bash
rm -rf .wwebjs_auth
```
3. Reinicia: `npm start`
4. Escanea el nuevo QR
### ISH se cierra:
- Mantén ISH abierto en segundo plano
- Ajusta la configuración de batería de iPhone para no cerrar ISH
## 📞 Soporte
Si tienes problemas:
1. Revisa los logs en la terminal
2. Verifica que Node.js esté instalado: `node --version`
3. Asegúrate de tener conexión a internet
4. Revisa que el QR fue escaneado correctamente
## 🎯 Mejoras Sugeridas
1. **Agregar más palabras clave** según tu negocio
2. **Personalizar horarios** de respuesta
3. **Agregar imágenes** a las respuestas (whatsapp-web.js lo soporta)
4. **Crear categorías** específicas para tu negocio
## 📄 Licencia
MIT - Uso libre y gratuito
---
**¡Espero que este bot te ayude a automatizar tu WhatsApp Business!** 🚀
