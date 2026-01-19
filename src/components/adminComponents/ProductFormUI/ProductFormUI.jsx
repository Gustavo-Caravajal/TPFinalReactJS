import "./ProductFormUI.css"
export const ProductFormUI = ({
    product,
    errors,
    loading,
    onChange,
    onFileChange,
    onSubmit
}) => {
    return (
        <section className="product-form-container" >
            <h2 className="panel-title">Panel administrador</h2>
            <h3>Alta de productos</h3>
            <form className="product-form" onSubmit={onSubmit}>
                <h2 className="form-text">Agregar producto</h2>
                <div className="form-field">
                    <label className="form-text">Nombre</label>
                    <input
                        className="product-form-input"
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={onChange}
                        required
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="form-field">
                    <label className="form-text">Precio</label>
                    <input
                        className="product-form-input"
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={onChange}
                        required
                    />
                    {errors.price && <p className="error">{errors.price}</p>}
                </div>
                <div className="form-field">
                    <label className="form-text">Categoria</label>
                    <input
                        className="product-form-input"
                        type="text"
                        name="category"
                        value={product.category}
                        onChange={onChange}
                        required
                    />
                    {errors.category && <p className="error">{errors.category}</p>}
                </div>
                <div className="form-field">
                    <label className="form-text">Descripcion</label>
                    <textarea
                        className="product-form-box"
                        name="description"
                        value={product.description}
                        onChange={onChange}
                        required
                    ></textarea>
                    {errors.description && <p className="error">{errors.description}</p>}
                </div>
                <div className="form-field">
                    <label className="form-text">Imagen</label>

                    <label className="custom-file-btn">
                        Seleccionar imagen
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
                            hidden
                        />
                    </label>

                    {product.file && (
                        <span className="file-name">
                            {product.file.name}
                        </span>
                    )}

                    {errors.file && <p className="error">{errors.file}</p>}
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? "Guardando" : "Guardar"}
                </button>
            </form>
        </section>
    );
};