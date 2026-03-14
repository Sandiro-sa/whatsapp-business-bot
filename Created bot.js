// WhatsApp Business Chatbot - Configuración y Respuestas Personalizadas
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
// ============================================
// CONFIGURACIÓN DEL BOT - PERSONALIZA AQUÍ
// ============================================
// Palabras clave y respuestas personalizadas
const respuestas = {
  // Saludos
  'hola': '¡Hola! 👋 Bienvenido a nuestro negocio. ¿En qué puedo ayudarte hoy?',
  'buenos dias': '¡Buenos días! ☀️ ¿Cómo puedo ayudarte hoy?',
  'buenas tardes': '¡Buenas tardes! ☀️ ¿En qué puedo asistirte?',
  'buenas noches': '¡Buenas noches! 🌙 ¿Cómo puedo ayudarte?',
  
  // Información del negocio
  'horario': '🕒 Nuestro horario de atención es:\nLunes a Viernes: 9:00 AM - 6:00 PM\nSábados: 9:00 AM - 2:00 PM\nDomingos: Cerrado',
  
  'ubicacion': '📍 Nos encontramos en:\n[CAMBIAR: Tu dirección completa aquí]\n\n¡Te esperamos!',
  
  'precio': '💰 Nuestros precios varían según el producto/servicio.\n\n¿Qué producto o servicio te interesa conocer?',
  
  'productos': '🛍️ Ofrecemos:\n• [Producto 1]\n• [Producto 2]\n• [Producto 3]\n\n¿Te interesa algún producto en particular?',
  
  'servicios': '🔧 Nuestros servicios incluyen:\n• [Servicio 1]\n• [Servicio 2]\n• [Servicio 3]\n\n¿En qué podemos ayudarte?',
  
  // Contacto
  'telefono': '📞 Puedes contactarnos al:\n+XX XXX XXX XXX\n\n¡Llámanos!',
  
  'email': '📧 Escríbenos a:\ntuemail@ejemplo.com',
  
  'contacto': '📲 Formas de contactarnos:\n• WhatsApp: +XX XXX XXX XXX\n• Email: tuemail@ejemplo.com\n• Dirección: [Tu dirección]',
  
  // Pedidos y ventas
  'pedido': '🛒 Para realizar un pedido:\n1. Elige tus productos\n2. Envíanos tu pedido\n3. Recibirás confirmación\n\n¿Qué deseas pedir?',
  
  'compra': '💳 Aceptamos:\n• Transferencia bancaria\n• Efectivo\n• Tarjetas de crédito/débito\n\n¿Qué método prefieres?',
  
  // Información adicional
  'envio': '🚚 Realizamos envíos a:\n• [Zona 1]\n• [Zona 2]\n• [Zona 3]\n\nTiempo estimado: 24-48 horas',
  
  'garantia': '✅ Todos nuestros productos tienen:\n• [X] días de garantía\n• Cambio o devolución en [X] días\n\n¿Necesitas más información?',
  
  // Respuesta por defecto
  'default': '🤔 No estoy seguro de entender tu pregunta.\n\nPuedo ayudarte con:\n• Horarios\n• Productos/Servicios\n• Precios\n• Ubicación\n• Contacto\n\n¿Qué necesitas?'
};
// ============================================
// CONFIGURACIÓN DE PALABRAS CLAVE
// ============================================
const palabrasClave = Object.keys(respuestas).filter(key => key !== 'default');
// ============================================
// INICIALIZACIÓN DEL CLIENTE WHATSAPP
// ============================================
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-gpu'
    ]
  }
});
// ============================================
// EVENTOS DEL BOT
// ============================================
client.on('qr', (qr) => {
  console.log('\n📱 ESCANEA EL CÓDIGO QR PARA CONECTAR:');
  qrcode.generate(qr, { small: true });
  console.log('⚠️ El código QR aparecerá en tu terminal\n');
});
client.on('ready', () => {
  console.log('\n✅ BOT DE WHATSAPP ESTÁ CONECTADO Y LISTO!');
  console.log('🤖 Respondiendo automáticamente a los clientes...\n');
});
client.on('authenticated', () => {
  console.log('🔐 Autenticado correctamente');
});
client.on('auth_failure', (msg) => {
  console.error('❌ Error de autenticación:', msg);
});
client.on('message', async (message) => {
  try {
    const mensaje = message.body.toLowerCase().trim();
    
    // Ignorar mensajes de grupo o mensajes muy cortos
    if (!message.fromMe && mensaje.length > 0) {
      console.log(`📩 Mensaje recibido de ${message.from}: ${message.body}`);
      
      // Buscar respuesta basada en palabras clave
      let respuestaEncontrada = null;
      
      for (const palabra of palabrasClave) {
        if (mensaje.includes(palabra)) {
          respuestaEncontrada = respuestas[palabra];
          break;
        }
      }
      
      // Si no hay respuesta específica, usar la respuesta por defecto
      if (!respuestaEncontrada) {
        respuestaEncontrada = respuestas['default'];
      }
      
      // Enviar respuesta
      await message.reply(respuestaEncontrada);
      console.log(`✅ Respuesta enviada`);
    }
  } catch (error) {
    console.error('❌ Error al procesar mensaje:', error);
  }
});
client.on('disconnected', (reason) => {
  console.log('❌ Desconectado:', reason);
  console.log('🔄 Intentando reconectar...');
});
// ============================================
// INICIAR EL CLIENTE
// ============================================
console.log('\n🚀 INICIANDO WHATSAPP BUSINESS BOT...\n');
console.log('⏳ Esperando conexión...');
console.log('📱 Escanea el QR con WhatsApp en tu teléfono\n');
client.initialize();
// ============================================
// INSTRUCCIONES DE USO
// ============================================
console.log('\n' + '='.repeat(60));
console.log('📋 INSTRUCCIONES DE PERSONALIZACIÓN:');
console.log('='.repeat(60));
console.log('\n1. Edita el archivo "bot.js" para personalizar las respuestas');
console.log('2. Busca la sección "CONFIGURACIÓN DEL BOT - PERSONALIZA AQUÍ"');
console.log('3. Cambia los textos entre comillas para adaptar las respuestas');
console.log('4. Agrega más palabras clave y respuestas según necesites');
console.log('5. Guarda los cambios y reinicia el bot\n');
console.log('='.repeat(60) + '\n');
