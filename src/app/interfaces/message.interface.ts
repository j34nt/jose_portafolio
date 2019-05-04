export class Message {
    constructor(
        public name: string,
        public email: string,
        public subject: string,
        public id?: string,
        public from?: string,
        public created_at = new Date
    ) {}
}
