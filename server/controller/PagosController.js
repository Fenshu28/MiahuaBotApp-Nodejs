import AlumnosModel from "../models/AlumnosModel.js";
import PagosModel from "../models/PagosModel.js";
import PlanesModel from "../models/PlanesModelo.js";

// Métodos para el crud

// Mostrar todos los registros
export const getAllPagos = async (req, res) => {
    try {
        const pagos = await PagosModel.findAll({
            include: [
                {
                    model: AlumnosModel,
                    attributes: ['matricula', 'nombre'] // Selecciona los campos que quieras incluir
                }
            ],
            include: [
                {
                    model: PlanesModel,
                    attributes: ['idPlan', 'nombre'] // Selecciona los campos que quieras incluir
                }
            ]
        })
        res.json(pagos)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Mostrar un registro
export const getPago = async (req, res) => {
    try {
        const pago = await PagosModel.findOne({
            where: {
                folio: req.params.id
            },
            include: [
                {
                    model: AlumnosModel,
                    attributes: ['matricula', 'nombre'] // Selecciona los campos que quieras incluir
                }
            ],
            include: [
                {
                    model: PlanesModel,
                    attributes: ['idPlan', 'nombre'] // Selecciona los campos que quieras incluir
                }
            ]
        })
        res.json(pago)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Crear un registro
export const createPago = async (req, res) => {
    try {
        await PagosModel.create(req.body)
        res.json({
            "message": "¡Pago registrado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Actualizar un registro
export const updatePago = async (req, res) => {
    try {
        await PagosModel.update(req.body, {
            where: {
                folio: req.params.id
            }
        })
        res.json({
            "message": "¡Pago actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Eliminar un registro
export const deletePago = async (req, res) => {
    try {
        await PagosModel.destroy({
            where: {
                folio: req.params.id
            }
        })
        res.json({
            "message": "¡Pago eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}