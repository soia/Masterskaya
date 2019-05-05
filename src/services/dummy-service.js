
export default class DummyService {

    studios = [
        {
            id: 1,
            number: '1',
            description: 'Lorem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet.',
            img: 'https://i.ibb.co/0FNW07f/G20-0047.png',
            cost: '450'
        },
        {
            id: 2,
            number: '2',
            description: 'Lorem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet.',
            img: 'https://i.ibb.co/86H7CMg/Interior-recording-studio-035447.png',
            cost: '700'
        }
    ];

    training = [
        {
            id: 1,
            number: '1',
            description: 'Lorem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet.',
            img: 'https://i.ibb.co/4WnxD98/image.png',
        },
        {
            id: 2,
            number: '2',
            description: 'Lorem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet.',
            img: 'https://i.ibb.co/swBD17K/AC1-A8866-e1514997116147.png',
        }
    ];

    getStudios() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.studios);
            }, 100);
        });
    }

    getTraining() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.training);
            }, 100);
        });
    }
}