# WhatsApp Business Bot - Guía Rápida
## 🚀 Instalación Rápida en ISH (iPhone 11)
### 1. Instalar Node.js (si no lo tienes)
```bash
apk update
apk add nodejs npm git
```
### 2. Clonar el repositorio
```bash
cd ~
git clone https://github.com/sandiro-sa/whatsapp-business-bot.git
cd whatsapp-business-bot
```
### 3. Instalar dependencias
```bash
npm install
```
### 4. Personalizar respuestas
```bash
nano bot.js
```
- Edita la sección `respuestas` con tu información
- Presiona `Ctrl+O` para guardar, `Ctrl+X` para salir
### 5. Iniciar el bot
```bash
npm start
```
### 6. Escanear QR
- Aparecerá un código QR en tu terminal
- Abre WhatsApp → Ajustes → Dispositivos vinculados → Vincular dispositivo
- Escanea el QR con tu cámara
## ✅ ¡Listo! Tu bot está funcionando
## 📝 Para personalizar:
- Edita `bot.js` y cambia los textos en la sección `respuestas`
- Agrega más palabras clave según necesites
## 🛑 Para detener:
- Presiona `Ctrl + C`
## 🔁 Para reiniciar:
- Ejecuta `npm start`
## ⚠️ Importante:
- Mantén ISH abierto para que el bot funcione
- Necesitas conexión a internet constante
- No uses para spam - respeta las políticas de WhatsApp
