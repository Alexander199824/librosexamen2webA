module.exports = (sequelize, Sequelize) => {
    const Libros = sequelize.define('libros', {
        Id_libro: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true // Autoincremento para el código del libro
        },
        Titulo: {
            type: Sequelize.STRING(100) // Hasta 100 caracteres para el título
        },
        Id_autor: {
            type: Sequelize.INTEGER // Referencia al autor
        },
        Isbn: {
            type: Sequelize.STRING(13) // ISBN de hasta 13 caracteres
        },
        Editorial: {
            type: Sequelize.STRING(50) // Hasta 50 caracteres para la editorial
        },
        Año_publicacion: {
            type: Sequelize.DATE // Año de publicación
        },
        Categoría: {
            type: Sequelize.STRING(50) // Categoría del libro
        },
        Cantidad_disponible: {
            type: Sequelize.INTEGER // Cantidad disponible de libros
        },
        Ubicacion: {
            type: Sequelize.STRING(100) // Ubicación del libro
        }
    });
    
    return Libros;
};
