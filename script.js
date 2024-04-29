const body = document.querySelector('body');
const header = document.createElement('header');
const nav = document.createElement('nav');
const homeLink = document.createElement('a');
const productosLink = document.createElement('a');
const marcasLink = document.createElement('a')
const ofertasLink = document.createElement('a');
const section =document.createElement('section');
const h1 = document.createElement('h1');
const h2 = document.createElement('h2'); 
const productosContainer = document.createElement('div');
const productoElement = document.createElement('div');
const formularioContacto = document.createElement('form');
const nombreInput = document.createElement('input');
const correoInput = document.createElement('input');
const imagen = document.createElement('img');
const mensajeTextarea = document.createElement('textarea');
const enviarButton = document.createElement('button');
const marcas = document.createElement('h2');
const ofertas = document.createElement('h2');
const contacto = document.createElement('h2');

header.style.backgroundColor = '#333';
header.style.color = '#fff';
header.style.textAlign = 'center';
header.style.padding = '15px 0';

nav.style.listStyle = 'none';
nav.style.margin = '0';
nav.style.padding = '0';
nav.style.textAlign = 'center';

homeLink.textContent = 'Inicio';
homeLink.style.color = '#fff';
homeLink.style.textDecoration = 'none';
homeLink.style.fontWeight = 'bold';

productosLink.textContent = 'Productos';
productosLink.style.color = '#fff';
productosLink.style.textDecoration = 'none';
productosLink.style.fontWeight = 'bold';

marcasLink.textContent = 'Marcas';
marcasLink.style.color = '#fff';
marcasLink.style.textDecoration = 'none';
marcasLink.style.fontWeight = 'bold';

ofertasLink.textContent = 'Ofertas';
ofertasLink.style.color = '#fff';
ofertasLink.style.textDecoration = 'none';
ofertasLink.style.fontWeight = 'bold';

nav.appendChild(homeLink);
nav.appendChild(productosLink);
nav.appendChild(marcasLink);
nav.appendChild(ofertasLink);
header.appendChild(nav);
body.appendChild(header);

section.style.padding = '20px';
body.appendChild(section);

h1.textContent = 'Impresoras 3D';
h1.style.color = '#fff';
header.appendChild(h1);
header.appendChild(nav);

h2.textContent = 'Impresoras 3D destacadas';
h2.style.textAlign = 'center';
h2.style.marginBottom = '20px';
section.appendChild(h2);

marcas.textContent = 'Marcas de impresora 3D';
marcas.style.textAlign = 'center';
section.appendChild(marcas);

ofertas.textContent = 'Ofertas en impresoras 3D';
ofertas.style.textAlign = 'center';
section.appendChild(ofertas);

contacto.textContent = 'CONTACTOS';
contacto.style.textAlign = 'center';
section.appendChild(contacto);

section.appendChild(productosContainer);

formularioContacto.style.marginTop = '20px';
formularioContacto.style.backgroundColor = '#333';

nombreInput.type = 'text';
nombreInput.name = 'nombre';
nombreInput.placeholder = 'Nombre';
nombreInput.style.width = '100%';
nombreInput.style.marginBottom = '10px';

correoInput.type = 'email';
correoInput.name = 'correo';
correoInput.placeholder = 'Correo electrónico';
correoInput.style.width = '100%';
correoInput.style.marginBottom = '10px';

mensajeTextarea.name = 'mensaje';
mensajeTextarea.placeholder = 'Escribe tu mensaje';
mensajeTextarea.style.width = '100%';
mensajeTextarea.style.height = '100px';
mensajeTextarea.style.marginBottom = '10px';

enviarButton.textContent = 'Enviar';
enviarButton.style.backgroundColor = '#333';
enviarButton.style.color = '#fff';
enviarButton.style.padding = '10px 20px';
enviarButton.style.border = 'none';
enviarButton.style.cursor = 'pointer';

formularioContacto.appendChild(nombreInput);
formularioContacto.appendChild(correoInput);
formularioContacto.appendChild(mensajeTextarea);
formularioContacto.appendChild(enviarButton);

section.appendChild(formularioContacto);