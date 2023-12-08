module.exports = mongoose => {

    const schema = mongoose.Schema(
        {
            merk_baju: String,
            harga_baju: Number,
            ukuran_baju: String,
            kategori_baju: String,
            id_penjual: Number
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, id, ...object } = this.toObject();
        object.id_baju = id;
        return object;
    });
    return mongoose.model("baju", schema);

}