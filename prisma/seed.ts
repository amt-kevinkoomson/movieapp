import { prisma } from '../src/configs/prismaConfig'
import { faker } from '@faker-js/faker'

(async () => {
    for(let i=0; i<50; i++){
        await prisma.movie.create({
          data: {
            title: faker.music.songName(),
            duration: faker.number.int({ max: 300 }),
            description: faker.lorem.sentence(),
            views: faker.number.int({ max: 99999 }),
            saves: faker.number.int({ max: 99999 }),
            isTrending: false,
          },
        });
    }
})();