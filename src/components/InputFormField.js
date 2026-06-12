function InputFormField({ label, value, onChange, type = "text", placeholder = "", className = "" }) {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={className}
            />
        </div>
    )
}
export default InputFormField;
