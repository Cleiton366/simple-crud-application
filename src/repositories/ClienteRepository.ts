import { db, clienteCollection } from "../connection/connection";
import { ClienteServices } from "../services/ClienteServices";

const clienteServices = new ClienteServices();

interface ICliente {
    cnpj: string,
    razaoSocial: string,
    nomeContato: string,
    tel: string,
    logradouro: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    estado: string,
    cep: string,
    lat: string,
    lng: string
}

class ClienteRepository {

    async create({ cnpj, razaoSocial, nomeContato, tel,
        logradouro, numero, complemento, bairro,
        cidade, estado, cep, lat, lng }: ICliente) {

        const cliente = {
            cnpj, razaoSocial, nomeContato, tel,
            logradouro, numero, complemento, bairro,
            cidade, estado, cep, lat, lng
        };

        //Getting client geocoding
        var address = logradouro + "+" + cidade + "+" + bairro + "+" + estado + "+" + cep;
        await clienteServices.getGeocoding(address).then((data) => {
            console.log("Client geocoding: ", data.status);  
            cliente.lat = data.results[0].geometry.location.lat;
            cliente.lng = data.results[0].geometry.location.lng;
        });  
        
        try {
            clienteCollection.insertOne(cliente)
                .then(result => {
                    console.log("Client inserted successfully: ", result);
                })
        } catch (err) {
            console.error("Error while trying to insert client: ", err);
        }

    }
    
    async getClients() {     
        try {
           return await db.collection("clientes").find().toArray();
        } catch (err) {
            console.error("Error while trying to acess clients from the data base: ", err);
        }
    }
    
    update({ cnpj, razaoSocial, nomeContato, tel,
        logradouro, numero, complemento, bairro,
        cidade, estado, cep, lat, lng }: ICliente) {

        const cliente = {
            cnpj, razaoSocial, nomeContato, tel,
            logradouro, numero, complemento, bairro,
            cidade, estado, cep
        };

        clienteCollection.findOneAndUpdate(
            { cnpj: cliente.cnpj },
            {
                $set: {
                    cnpj: cliente.cnpj,
                    razaoSocial: cliente.razaoSocial,
                    nomeContato: cliente.nomeContato,
                    tel: cliente.tel,
                    logradouro: cliente.logradouro,
                    numero: cliente.numero,
                    complemento: cliente.complemento,
                    bairro: cliente.bairro,
                    cidade: cliente.cidade,
                    estado: cliente.estado,
                    cep: cliente.cep
                }
            }
        ).then(result => {
            console.log("Client info edited successfully:", result);
        }).catch(err => console.error("Erro while trying to edit client info:", err));

    }

    deleteClient(cnpj) {
        const cnpjClient = cnpj;
        clienteCollection.deleteOne(
            { cnpj: cnpjClient.cnpj }
        ).then(result => {
            console.log("Client deleted from the database:", result);
        }).catch(err => console.error("Error while trying to delete client:", err));
    }

}

export { ClienteRepository }