interface IMailServiceTo {
    name: string;
    email: string;
}

interface IMailServiceMessage {
    subject: string;
    body: string;
    attachment: string[];
}

interface IMessageDTO {
    to: IMailServiceTo;
    message: IMailServiceMessage;
}

interface IMailService {
    sendMail(request: IMessageDTO): void;
}

class EmailService implements IMailService {
    sendMail({to, message}: IMessageDTO) {
        console.log(`Enviado para ${to.name}`);
    }
}

export default EmailService;