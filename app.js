// Array para almacenar los amigos
let amigos = [];

// Función para agregar amigos a la lista
function adicionarAmigo() {
    // Obtener el valor del campo de entrada
    const inputAmigo = document.querySelector('.input-name');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    // Añadir el amigo al array
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la lista visible
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la UI
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const listaAmigos = document.querySelector('ul');
    
    // Limpiar la lista existente
    listaAmigos.innerHTML = '';
    
    // Iterar sobre el array de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista
        const li = document.createElement('li');
        li.textContent = amigos[i];
        
        // Añadir el elemento a la lista
        listaAmigos.appendChild(li);
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Por favor, añada algunos nombres.');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    const resultado = document.querySelector('.result-list');
    resultado.innerHTML = `¡Tu amigo secreto es: <span>${amigoSorteado}</span>!`;
}

// Agregar eventos a los botones cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    const botonAdicionar = document.querySelector('.button-add');
    const botonSortear = document.querySelector('.button-draw');
    
    if (botonAdicionar) {
        botonAdicionar.addEventListener('click', adicionarAmigo);
    }
    
    if (botonSortear) {
        botonSortear.addEventListener('click', sortearAmigo);
    }
    
    // Permitir agregar amigos presionando Enter en el input
    const inputAmigo = document.querySelector('.input-name');
    if (inputAmigo) {
        inputAmigo.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                adicionarAmigo();
            }
        });
    }
});
