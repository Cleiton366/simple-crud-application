import { Request, Response } from "express"
import { ClienteRepository } from "../repositories/ClienteRepository"

const clientesRepository = new ClienteRepository();

class ClienteController {


    async create(req: Request, res : Response){
        const {cnpj, razaoSocial, nomeContato, tel,
        logradouro, numero, complemento, bairro,
        cidade, estado, cep, lat, lng}= req.body;
        
        clientesRepository.create({cnpj, razaoSocial, nomeContato, tel,
            logradouro, numero, complemento, bairro,
            cidade, estado, cep, lat, lng});
    }

    async update(req: Request, res : Response){
        const {cnpj, razaoSocial, nomeContato, tel,
            logradouro, numero, complemento, bairro,
            cidade, estado, cep, lat, lng} = req.body;

        await clientesRepository.update({cnpj, razaoSocial, nomeContato, tel,
            logradouro, numero, complemento, bairro,
            cidade, estado, cep, lat, lng});
    }
    
    async delete(req: Request, res : Response){
        const cnpj = req.body;

        await clientesRepository.deleteClient(cnpj);
    }

    async getClients(){
        return await clientesRepository.getClients();
    }

}

export { ClienteController }