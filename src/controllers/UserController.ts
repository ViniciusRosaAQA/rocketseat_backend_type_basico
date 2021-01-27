import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    {
        name: 'teste',
    },
    {
        name: 'teste 2',
    }
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },
    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: { name: 'Teste', email: 'teste@teste.com' },
            message: { subject: 'Teste', body: 'Html Teste', attachment: ['teste', 'teste2'] }
        });

        return res.send();
    }
}